
//this component compares the user input AMR and the gold AMR for differences

import './AmrDiffViewer.css';

import React, { useState, useEffect } from 'react';
import * as penman from 'penman-js';
import { diffArrays } from 'diff';


const AmrDiffViewer = ({ userInput, goldAMR }) => {

// diffing logic, uses penman-js to set the bar of what is syntactically an AMR

    const [diffData, setDiffData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userInput || !goldAMR) {
            setDiffData([]);
            setError(null);
            return;
        }

        try {
            const tokenize = (str) => str.replace(/\(/g, ' ( ').replace(/\)/g, ' ) ').trim().split(/\s+/).filter(Boolean);
          
            const userGraph = penman.decode(userInput);
            const goldGraph = penman.decode(goldAMR);
            const canonicalGoldString = penman.encode(goldGraph);
            const goldTokens = tokenize(canonicalGoldString);
            
            const canonicalUserString = penman.encode(userGraph);
            const userTokens = tokenize(canonicalUserString);

            // for mapping variables to concepts
            const extractVarToConceptMap = (tokens) => {
                const varMap = new Map();
                for (let i = 0; i < tokens.length - 3; i++) {
                    // finding variables by `(`, `var`, `/`, `concept`
                    if (tokens[i] === '(' && tokens[i + 2] === '/') {
                        const variable = tokens[i + 1];
                        const concept = tokens[i + 3];
                        if (variable && concept && !varMap.has(variable)) {
                            varMap.set(variable, concept);
                        }
                    }
                }
                return varMap;
            };

            const goldVarMap = extractVarToConceptMap(goldTokens);
            const userVarMap = extractVarToConceptMap(userTokens);

            const varToVar = new Map(); // maps user variables to gold variables (should their concepts match)
            const usedGoldVars = new Set(); // maps gold concepts to gold variables
            for (const [userVar, userConcept] of userVarMap.entries()) {
                for (const [goldVar, goldConcept] of goldVarMap.entries()) {
                    if (userConcept === goldConcept && !usedGoldVars.has(goldVar)) {
                        varToVar.set(userVar, goldVar);
                        usedGoldVars.add(goldVar); // mark this gold variable as used
                        break; // move to the next user variable
                    }
                }
            }

            // alphabetically sort roles for easier comparison
            const sortedUserTokens = sortSiblingRoles(userTokens);
            const sortedGoldTokens = sortSiblingRoles(goldTokens);


            // initial diff result
            const differences = diffArrays(sortedGoldTokens, sortedUserTokens);

            // post-processing (ie: variable names and structure switching)
            const processedDifferences = [];

            // track the parenthesis level to find the context for roles
            for (let i = 0; i < differences.length; i++) {
                const currentPart = differences[i];

                const nextPart = i + 1 < differences.length ? differences[i + 1] : null;

                // variable swaps
                if (nextPart && currentPart.removed && nextPart.added && currentPart.value.length === 1 && nextPart.value.length === 1) {
                    const goldVar = currentPart.value[0];
                    const userVar = nextPart.value[0];
                    
                    // check if  user's variable is valid by checking gold variable
                    if (varToVar.get(userVar) === goldVar) {
                        // it is valid and we use user's variable name for display
                        processedDifferences.push({value: [userVar]});  // removing 'removed' and 'added' to make it 'common'
                        i++; // skip what we already processed
                        
                        continue;
                    }
                }

                // if no matches, push the current part as is
                processedDifferences.push(currentPart);
            }

            // update the state with the diff data
            setError(null);
            setDiffData(processedDifferences);


        } catch (err) {
            // parsing failed, inform user with the error message.
            setDiffData([]);
            setError('Invalid AMR Syntax. Please check for missing or added parentheses (hint: make sure all open parentheses get closed), proper single forward slash "/" between variables and concepts, or other incorrect structure.');
            console.error("AMR Parsing Error:", err);
        }

    }, [userInput, goldAMR]);



// find and alphabetize sibling roles based on parenthesis level
// takes in string[] tokens to sort, returns new sorted array
function sortSiblingRoles(tokens) {
    // copy original array while iterating
    const sortedTokens = [...tokens];

    // find the end of a node
    const findNodeEnd = (startIndex) => {
        const nextToken = sortedTokens[startIndex + 1];
        if (nextToken !== '(') {
            // node is a single token (ie: a variable or constant)
            return startIndex + 1;
        }

        // node is a subgraph, need to find its matching closing parenthesis
        let parenCount = 1;
        for (let k = startIndex + 2; k < sortedTokens.length; k++) {
            if (sortedTokens[k] === '(') parenCount++;
            if (sortedTokens[k] === ')') parenCount--;
            if (parenCount === 0) {
                return k; // index of the matching ')'
            }
        }
        return sortedTokens.length - 1; 
    };

    for (let i = 0; i < sortedTokens.length; i++) {
        // block of sibling roles can only start with ':'
        if (!sortedTokens[i].startsWith(':')) {
            continue;
        }

        const firstRoleIndex = i;
        const chunks = [];
        let currentIndex = firstRoleIndex;

        // collect all same-level sibling roles into the 'chunks' array
        while (currentIndex < sortedTokens.length && sortedTokens[currentIndex].startsWith(':')) {
            const nodeEndIndex = findNodeEnd(currentIndex);
            const chunk = sortedTokens.slice(currentIndex, nodeEndIndex + 1);
            chunks.push(chunk);
            currentIndex = nodeEndIndex + 1;
        }
        
        // If more than one sibling role, sort
        if (chunks.length > 1) {
            //alphabetically sort based on the role name 
            chunks.sort((a, b) => a[0].localeCompare(b[0]));
            
            const sortedBlock = chunks.flat();
            
            // replace the original sequence with the new sorted one.
            const originalBlockLength = currentIndex - firstRoleIndex;
            sortedTokens.splice(firstRoleIndex, originalBlockLength, ...sortedBlock);

            // make main loop index to be past the block we just sorted
            i = firstRoleIndex + sortedBlock.length - 1;
        }
    }

    return sortedTokens;
}

    
    return (
        <div className="amr-diff-viewer">
            <h3>Analysis</h3>
            <div className="diff-legend">
                        <span className="legend-item">
                            <span className="box removed"></span> Things you missed (in blue and bold)
                        </span>
                        <p></p>
                        <span className="legend-item">
                            <span className="box added"></span> Things you added (in red and italics)
                        </span>
            </div>
            <pre className="diff-output-pre">
                <code>
                    {error && <span className="syntax-error">{error}</span>}

                    {!error && diffData.map((part, index) => {
                        const className = part.added ? 'diff-added' :
                                          part.removed ? 'diff-removed' : 'diff-common';
                        const text = part.value.join(' ');
                        return text ? <span key={index} className={className}>{text + ' '}</span> : null;
                    })}
                </code>
            </pre>
            <div className="diff-interpretation-note">
            <p><strong>How to Interpret the Analysis:</strong></p>
            <ul>
                <li>Highlighted roles or variables do not always indicate an error.</li>
                <li>(We're currently working on fixing, but the output may show a different ordering of roles than you inputted. However, it should still be marking semantic differences in the input.)</li>
                <li><strong>Variable Names:</strong> Different variable names (i.e., <code>a</code> vs. <code>d</code>) are acceptable, as long as the same variable does not refer to different concepts.
                The Analysis might mark a variable as incorrect if its associated concept was mismatched.</li>
                <li><strong>Role Order:</strong> The order of roles at the same structural level (i.e., <code>:polarity</code> and <code>:ARG1</code>) does not matter.</li>
                <li>Focus on differences in <strong>concepts</strong> (i.e., <code>live-01</code> vs <code>live-02</code>) and major <strong>structural connections</strong> (i.e., incorrect argument usage, different hierarchical structure).</li>
            </ul>
            </div>
        </div>
    );
};

export default AmrDiffViewer;