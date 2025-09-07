import React, { useState, useEffect, useMemo, useRef } from 'react';
import './DemoPage.css';
import { amrData } from '../components/amrData';
import AmrDisplay from '../components/AmrDisplay';
import AmrDiffViewer from '../components/AmrDiffViewer';
// import { response } from 'express';

// helper function to parse and format text
const FormattedExplanation = ({ text }) => {
    // return null if no text
    if (!text) return null;
  
    // split the string by the ``.
    const parts = text.split('`');
  
    return (
      <p className="amr-explanation">
        {parts.map((part, index) =>
          // if the index is odd, it's a part that was inside backticks
          index % 2 === 1 ? (
            <code key={index}>{part}</code>
          ) : (
            // else, it's just regular text
            <span key={index}>{part}</span>
          )
        )}
      </p>
    );
};

// fisher yates algorithm for shuffling randomly
const shuffleArray = (array) => {
    const shuffled = [...array];    // copy to new array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const DemoPage = () => {
    // managing the state because need user input
    // what sentence on
    const [currentIndex, setCurrentIndex] = useState(0); 
    // user input
    // const [userInput, setUserInput] = useState('');
    const [userInputs, setUserInputs] = useState({});


    // order of sentences in order
    const [displayOrder, setDisplayOrder] = useState(
        () => amrData.map((_, index) => index)  // first arg is unused
    );
    
    // ordered or random mode -- set default to random
    const [orderMode, setOrderMode] = useState('random');

    // shuffle when orderMode is random
    useEffect(() => {
        if (orderMode === 'random') {
            handleSetRandom();
        }
    }, []); 
    

    // check for user input submission
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [prevAttempt, setPrevAttempt] = useState(null);

    // const [isSubmittedInput, setIsSubmittedInput] = useState(false);

    const [saveStatus, setSaveStatus] = useState('');

    // button for gold AMR and breakdown
    const [showGoldAmr, setShowGoldAmr] = useState(false);
    // button for gold AMR explanation
    const [showExplanation, setShowExplanation] = useState(false);
    // button for error highlighting analysis
    const [showDiff, setShowDiff] = useState(true);

    // const currentItem = amrData[currentIndex];

    // local storage to save user input and index
    useEffect(() => {
        try {
            const savedOrder = localStorage.getItem('trainmr_displayOrder');
            const savedIndex = localStorage.getItem('trainmr_currentIndex');
            const savedInputs = localStorage.getItem('trainmr_userInputs');
            const savedMode = localStorage.getItem('trainmr_orderMode');
            if (savedOrder) setDisplayOrder(JSON.parse(savedOrder));
            if (savedIndex) setCurrentIndex(JSON.parse(savedIndex));
            if (savedInputs) setUserInputs(JSON.parse(savedInputs));
            if (savedMode) setOrderMode(JSON.parse(savedMode));
        } catch (error) {
            console.error("Failed to parse from localStorage", error);
            localStorage.clear();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('trainmr_displayOrder', JSON.stringify(displayOrder));
        localStorage.setItem('trainmr_currentIndex', JSON.stringify(currentIndex));
        localStorage.setItem('trainmr_orderMode', JSON.stringify(orderMode));
    }, [displayOrder, currentIndex, orderMode]);

    useEffect(() => {
        localStorage.setItem('trainmr_userInputs', JSON.stringify(userInputs));
    }, [userInputs]);


    // making the tab key work:
    const textareaRef = useRef(null);
    const tab_size = 4;
    const TAB_CHAR = ' '.repeat(tab_size);

    const handleKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault(); // let tab key input 4 spaces, rather than move around page

            const { selectionStart, selectionEnd } = event.currentTarget;

            // update userInput state -- replace selection with tab or input tab character
            setUserInputs(currentUserInput => {
                const newValue =
                    currentUserInput.substring(0, selectionStart) +
                    TAB_CHAR +
                    currentUserInput.substring(selectionEnd);

                // update cursor position to be after the tab character
                setTimeout(() => {
                    if (textareaRef.current) {
                        const newCursorPosition = selectionStart + TAB_CHAR.length;
                        textareaRef.current.selectionStart = newCursorPosition;
                        textareaRef.current.selectionEnd = newCursorPosition;
                    }
                }, 0);

                return newValue;
            });
        }
    };


    // // memoizing current item
    // const currentItem = useMemo(() => {
    //     if (displayOrder.length > 0) {
    //         return amrData[displayOrder[currentIndex]];
    //     }
    //     return null;
    // }, [currentIndex, displayOrder]);

    // memoizing current item
    const currentItem = useMemo(() => {
        if (displayOrder && displayOrder.length > currentIndex) {
            return amrData[displayOrder[currentIndex]];
        }
        return null;
    }, [currentIndex, displayOrder]);

    const currentUserInput = currentItem ? userInputs[currentItem.id] || '' : '';


    // const handleInputChange = (event) => {
    //     setUserInput(event.target.value);
    // };

    const handleInputChange = (event) => {
        const {value} = event.target;
        setUserInputs(prevInputs => ({...prevInputs, [currentItem.id]: value}));
    };

    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxPCM38rkStdU5dBNId39f2u6CYomP1CkMImsHzF_olTWZtprYCQeJpy8xEIN4Ngx8P/exec';

    // save user input to file
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setSaveStatus('Saving...');

        // get user ID
        const userId = localStorage.getItem('amrAnnotatorId');

        try{
            await fetch(GOOGLE_APP_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sentenceId: currentItem.id,
                    sentenceNum: currentItem.order,
                    sentence: currentItem.sentence,
                    goldAMR: currentItem.goldAMR,
                    userId: userId,
                    // userInput: userInput
                    userInput: currentUserInput
                }),
            });

            console.log('Data successfully sent to Google Sheets.');
            setSaveStatus('Annotation Saved');

        } catch (error) {
            console.error('error connecting to server:', error);
            setSaveStatus('error connecting to server:');
        }
    };


    const handleRetry = () => {
        // setPrevAttempt(userInput);
        setPrevAttempt(currentUserInput);
        setIsSubmitted(false);
        setSaveStatus('');

        setShowGoldAmr(false);
        setShowExplanation(false);
        setShowDiff(false);
    }


    useEffect(() => {
        setIsSubmitted(false);
        setUserInputs('');
        setPrevAttempt(null);
        setSaveStatus('');

        setShowGoldAmr(false);
        setShowExplanation(false);
        setShowDiff(true);
    // }, [currentIndex]);
    }, [currentIndex, displayOrder]);

    const handleNext = () => {
        if (currentIndex < amrData.length - 1) {
            setCurrentIndex(currentIndex + 1);
  
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);

        }
    };

    // changing sentence order
    const handleSetOrdered = () => {
        setOrderMode('ordered');
        setDisplayOrder(amrData.map((_, index) => index));
        setCurrentIndex(0);
    };

    const handleSetRandom = () => {
        setOrderMode('random');
        setDisplayOrder(shuffleArray(amrData.map((_, index) => index)));
        setCurrentIndex(0);
    };

    // when rendering before current item is available
    if (!currentItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="demo-page-container">
            <div className="top-content">
                <h1>AMR Annotation Practice</h1>
                <p className="minitext">Sentences and gold annotations are referenced from the AMR 3.0 dataset. Go to the About page to learn more.</p>
                <p><strong>Refer to the <a href="https://github.com/amrisi/amr-guidelines/blob/master/amr.md" target="_blank" rel="noopener noreferrer">
                    AMR guidelines
                </a> and <a href="https://propbank.github.io/v3.4.0/frames/" target="_blank" rel="noopener noreferrer">
                    PropBank framesets
                </a> to complete your annotations.</strong>
                </p>
                <div className="column">
                    <div className="section left">
                        <p><strong>View Options</strong></p>
                        <p>Once you submit your annotation, you have several choices to review the answer:</p>
                        <div className="centered-paragraph">
                            (1) You can view the gold AMR and its line-by-line breakdown below it.<br />
                            (2) You can view an explanation of the gold AMR<br />
                            (3) You can view any differences between your annotation and the gold AMR (on by default)<br />
                        </div>
                        <p>There is also an option to view sentences in order of complexity/length, or to randomize them. The default is randomized.</p>
                    </div>
                    <div className="section right">
                        <p><strong>Tips</strong></p>
                        <p>Differences in indentation and variable names (concept labels) do not count as errors.</p>
                        <p>However, remember to close all open parentheses and avoid duplicate variable names.</p>
                    </div>
                </div>
                <p>Feel free to resubmit your annotation with changes.</p>
                <p></p>
                <h3>Write in PENMAN notation inside the text box.</h3>
            </div>

            <div className="order-controls">
                <button 
                    onClick={handleSetOrdered}
                    className={orderMode === 'ordered' ? 'active' : ''}
                    title="Show sentences in order (simple to more complicated)"
                >
                    In Order
                </button>
                <button 
                    onClick={handleSetRandom}
                    className={orderMode === 'random' ? 'active' : ''}
                    title="Shuffle the order of the sentences"
                >
                    Randomize
                </button>
            </div>

            <div className="navigation-controls">
                <button 
                    onClick={handlePrev} 
                    disabled={currentIndex === 0}
                    title="Previous"
                >
                    &larr;
                </button>
                <span className="progress-indicator">
                    Sentence {currentIndex + 1} of {amrData.length}
                </span>
                <button 
                    onClick={handleNext} 
                    disabled={currentIndex === amrData.length - 1}
                    title="Next"
                >
                    &rarr;
                </button>
            </div>

            <div className="demo-main-content">
                <div className="demo-column sentence-column">
                    <h2>Sentence</h2>
                    <p className="sentence-text">{currentItem.sentence}</p>
                    {prevAttempt && (
                        <div className="prev-attempt-box">
                            <h4>Your Previous Attempt</h4>
                            <pre>{prevAttempt}</pre>
                        </div>
                    )}
                </div>

                <div className="demo-column input-column">
                    <h2>Your Annotation</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                        ref={textareaRef}   // for tab key
                        onKeyDown={handleKeyDown}   //for tab key
                        className="amr-textarea"
                        // value={userInput}
                        value={currentUserInput}
                        onChange={handleInputChange}
                        placeholder="Type your AMR annotation here..."
                        readOnly={isSubmitted}
                    />
                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                        {isSubmitted && saveStatus && <p className='save-status'>{saveStatus}</p>}
                    </form>

                    
                    {isSubmitted && (
                        <div className="retry-button" onClick={handleRetry}>
                            <button>Retry</button>
                        </div>
                    )}

                    
                </div>

                <div className="demo-column answer-column">
                    <h2>Gold AMR</h2>
                    {isSubmitted ? (
                        <>
                            <div className="answer-controls">
                                <button onClick={() => setShowGoldAmr(!showGoldAmr)}>
                                    {showGoldAmr ? 'Hide' : 'Show'} Gold AMR & AMR Breakdown
                                </button>
                                <button onClick={() => setShowExplanation(!showExplanation)}>
                                    {showExplanation ? 'Hide' : 'Show'} Gold AMR Explanation
                                </button>
                                <button onClick={() => setShowDiff(!showDiff)}>
                                    {showDiff ? 'Hide' : 'Show'} AMR Error Highlighting & Analysis
                                </button>
                            </div>

                            {showGoldAmr && (
                                <div className="gold-amr-content">
                                    <pre className="answer-display">{currentItem.goldAMR}</pre>
                                    <p className="source">{currentItem.source}</p>
                                </div>
                            )}
                            {showExplanation && (
                                <div className="explanation-content">
                                    <p className="amr-explanation-heading">Explanation:</p>
                                    <FormattedExplanation text={currentItem.explanation} />
                                </div>
                            )}

                        </>
                    ) : (
                        <div className="answer-placeholder">
                            <p>The answer will be revealed after you submit your annotation.</p>
                        </div>
                    )}
                </div>
            </div>

            {isSubmitted && (
                <div className="full-width-content">
                    {showDiff && (
                        <AmrDiffViewer
                            // userInput={userInput}
                            userInput={currentUserInput}
                            goldAMR={currentItem.goldAMR}
                        />
                    )}
                    {showGoldAmr && (
                        <div className="amr-display-wrapper">
                             <h3>Gold AMR Breakdown</h3>
                            <AmrDisplay breakdownData={currentItem.breakdown} showLines={true} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default DemoPage;