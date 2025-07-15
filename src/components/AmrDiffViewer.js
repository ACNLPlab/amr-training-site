
//this component compares the user input AMR and the gold AMR for differences

// import React from 'react';
// import { diffChars } from 'diff'; 

import React, { useState } from "react";
import '../components/AmrDiffViewer.css';
import {diffChars} from 'diff';
import { diffArrays } from "diff";


// tokenize breaks string into parts -- whitespace, parentheses
const tokenize = (str) => {
    if (!str) return [];
        const normalizedStr = str.replace(/\//g, ' / ');
    return normalizedStr
        .replace(/\s+/g, ' ') // all whitespace becomes a single space
        .trim()
        .split(/(\s+|\(|\))/)
        .filter(token => token && token.trim());
}

const extractVarToConceptMap = (tokens) => {
    const varMap = new Map();
    for (let i = 0; i < tokens.length; i++) {
        // finding variables by `(`, `var`, `/`, `concept`
        if (tokens[i] === '/' && i > 1 && tokens[i-2] === '(') {
            const variable = tokens[i-1];
            const concept = tokens[i+1];
            if (variable && concept && !varMap.has(variable)) {
                varMap.set(variable, concept);
            }
        }
    }
    return varMap;
};

// takes in userInput and goldAMR
const AmrDiffViewer = ({ userInput, goldAMR }) => {

    if (!goldAMR) {
        console.warn(" goldAMR is undefined or empty!");
    }

    const goldTokens = tokenize(goldAMR);
    const userTokens = tokenize(userInput);

    // creating maps for both AMRs
    const goldVarMap = extractVarToConceptMap(goldTokens);
    const userVarMap = extractVarToConceptMap(userTokens);

    const initmap = new Map();
    const goldConceptToVar = new Map();

    for (const [goldVar, goldConcept] of goldVarMap.entries()){
        goldConceptToVar.set(goldConcept.toLowerCase(), goldVar);   // may change to anything
    }

    //map user vars to gold vars
    for (const [userVar, userConcept] of userVarMap.entries()) {
        const goldVar = goldConceptToVar.get(userConcept.toLowerCase());
        if (goldVar) {
            initmap.set(userVar, goldVar);  
        }
    }

    const normalizedUserTokens = userTokens.map(token => {
        return initmap.get(token) || token; 
    });
    

    const differences = diffArrays(goldTokens, normalizedUserTokens);


    return (
        <div className="amr-diff-viewer">
        <h3>Analysis</h3>
        <div className="diff-legend">
            <span className="legend-item">
                <span className="box removed"></span> Things you missed (in red and bold)
            </span>
            <p></p>
            <span className="legend-item">
                <span className="box added"></span> Things you added (in blue and italics)
            </span>
        </div>
        
        <pre className="diff-output-pre">
            <code>
            {differences.map((part, index) => {
                const className = part.added ? 'diff-added' :
                                part.removed ? 'diff-removed' : 'diff-common';
                const text = part.value.join('');
                return text.length > 0 ? <span key={index} className={className}>{text}</span> : null;
            })}
            </code>
        </pre>
        </div>
    );
};

export default AmrDiffViewer; 

