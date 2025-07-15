import React from 'react';
import './AmrDisplay.css';

const AmrDisplay = ({ breakdownData, showLines = true }) => {
    
    if (!breakdownData || breakdownData.length === 0) {
        return <p>No breakdown available for this sentence.</p>;
    }

    return (
        <div className="amr-container">
            {breakdownData.map((item) => (
                <div
                    key={item.id}
                    className={`amr-row ${showLines ? 'with-line' : ''}`}
                >
                    <div
                        className="amr-graph"
                        style={{ paddingLeft: `${item.indentation * 5}ch`}}
                    >
                        {item.amr}
                    </div>

                    <div className="amr-translation">
                        {item.sentence}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default AmrDisplay;