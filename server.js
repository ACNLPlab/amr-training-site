const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001; 

app.use(cors()); 
app.use(express.json()); 

// save data
app.post('/api/save', (req, res) => {
    const { sentenceId, sentence, userInput } = req.body;

    if (!userInput) {
        return res.status(400).send({ message: 'Input is empty' });
    }

    // entry for the file log
    const dataToStore = `
----------------------------------------
Timestamp: ${new Date().toISOString()}
Sentence ID: ${sentenceId}
Sentence: ${sentence}
User Annotation:
${userInput}
----------------------------------------\n`;

    const filePath = path.join(__dirname, 'submissions.txt');

    //  add the new data to the end of the file
    fs.appendFile(filePath, dataToStore, (err) => {
        if (err) {
            console.error('Failed to save data:', err);
            return res.status(500).send({ message: 'Error saving data to file.' });
        }
        console.log('Data saved for sentence ID:', sentenceId);
        res.status(200).send({ message: 'Data saved successfully' });
    });
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
    console.log('Waiting for annotations...');
});