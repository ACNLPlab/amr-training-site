import React, { useState } from 'react';
import './DemoPage.css';
import { amrData } from '../components/amrData';
import AmrDisplay from '../components/AmrDisplay';
import AmrDiffViewer from '../components/AmrDiffViewer';

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
    // check for user input submission
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [prevAttempt, setPrevAttempt] = useState(null);

    // const [isSubmittedInput, setIsSubmittedInput] = useState(false);

    

    const currentItem = amrData[currentIndex];

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const handleRetry = () => {
        setPrevAttempt(userInput);
        setIsSubmitted(false);
    }

    const resetNewSentence = () => {
        setIsSubmitted(false);
        setUserInput('');
        setPrevAttempt(null);
    }

    const handleNext = () => {
        if (currentIndex < amrData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            // reset state for the new sentence
            setIsSubmitted(false);
            setUserInput('');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            // reset state for the new sentence
            setIsSubmitted(false);
            setUserInput('');
        }
    };

    return (
        <div className="demo-page-container">
            <h1>AMR Annotation Practice</h1>
            <p>Sentences and gold annotations are referenced from the AMR 3.0 dataset. Go to the About page to learn more.
                Refer to the AMR guidelines and PropBank framesets to complete your annotations. 
            </p>
            <p>Differences in indentation and variable names (concept labels) do not count as errors.</p>
            <p></p>
            <p>Once you submit your annotation, review the answer, which is the gold AMR, and the explanation below it.</p>
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
                    <textarea
                        className="amr-textarea"
                        value={userInput}
                        onChange={handleInputChange}
                        placeholder="Type your AMR annotation here..."
                        readOnly={isSubmitted}
                    />
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                    
                    {isSubmitted && (
                        <button className="retry-button" onClick={handleRetry}>
                            Retry
                        </button>
                    )}

                    
                </div>

                <div className="demo-column answer-column">
                    <h2>Gold AMR</h2>
                    {isSubmitted ? (
                        <>
                            <pre className="answer-display">{currentItem.goldAMR}</pre>
                            <p className="source">{currentItem.source}</p>
                            {/* <p className="amr-id">{currentItem.id}</p>
                            <p className="amr-filename">{currentItem.filename}</p> */}
                            <p className="amr-explanation-heading">Explanation:</p>
                            <FormattedExplanation text={currentItem.explanation} />
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
                    <AmrDiffViewer
                        userInput={userInput}
                        goldAMR={currentItem.goldAMR}
                    />
                    <div className="amr-display-wrapper">
                        <AmrDisplay breakdownData={currentItem.breakdown} showLines={true} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default DemoPage;
