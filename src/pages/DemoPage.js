import React, { useState, useEffect } from 'react';
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

const DemoPage = () => {
    // managing the state because need user input
    // what sentence on
    const [currentIndex, setCurrentIndex] = useState(0); 
    // user input
    const [userInput, setUserInput] = useState('');

    // add user input to txt file
    

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
    const [showDiff, setShowDiff] = useState(false);
    

    const currentItem = amrData[currentIndex];

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwg8veS9l98N9YU3lNf5eHWIJlYXV0XGslC9qBN6drHDy0unK7Jts1R7adFGN-aMFFU/exec';

    // save user input to file
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        setSaveStatus('Saving...');

        try{
            await fetch(GOOGLE_APP_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sentenceId: currentItem.id,
                    sentence: currentItem.sentence,
                    userInput: userInput
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
        setPrevAttempt(userInput);
        setIsSubmitted(false);
        setSaveStatus('');

        setShowGoldAmr(false);
        setShowExplanation(false);
        setShowDiff(false);
    }


    useEffect(() => {
        setIsSubmitted(false);
        setUserInput('');
        setPrevAttempt(null);
        setSaveStatus('');

        setShowGoldAmr(false);
        setShowExplanation(false);
        setShowDiff(false);
    }, [currentIndex]);

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

    return (
        <div className="demo-page-container">
            <h1>AMR Annotation Practice</h1>
            <p>Sentences and gold annotations are referenced from the AMR 3.0 dataset. Go to the About page to learn more.
                Refer to the <a href="https://github.com/amrisi/amr-guidelines/blob/master/amr.md" target="_blank" rel="noopener noreferrer">
                AMR guidelines
            </a> and <a href="https://propbank.github.io/v3.4.0/frames/" target="_blank" rel="noopener noreferrer">
                PropBank framesets
            </a> to complete your annotations. 
            </p>
            <p>Differences in indentation and variable names (concept labels) do not count as errors. Also, the tab key doesn't work, so use spaces instead.</p>
            <p></p>
            <p>Once you submit your annotation, review the answer, which is the gold AMR, and the explanation and AMR breakdown below it. Feel free to resubmit your annotation with changes.</p>
            <h3>Write in PENMAN notation inside the text box.</h3>

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
                        className="amr-textarea"
                        value={userInput}
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
                            userInput={userInput}
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