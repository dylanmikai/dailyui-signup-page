const express = require("express");
const app = express();
const path = require('path');
const port = 5000;

//Serve files in the public folder to
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Parse incoming json data
app.use(express.json());

app.post('/', (req, res) => {
    const userEmail = req.body.email;

    console.log(userEmail);
    res.json({ message: 'Email submitted successfully!' });
})

// Listen on specified port number
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});