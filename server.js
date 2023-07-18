const express = require('express');
const app = express();
const crypto = require('crypto');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static('view'))

app.post('/login', (req, res) => {
    console.log('Server Hit! (login route)');
    const {username, password} = req.body;
    if(username === "dnns" && password === "anggara"){
        res.redirect('/landingPage')
    }
    else {
        res.status(401).send('Invalid Credentials');
    }
})

app.get('/landingPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'landingPage.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'))
})

// app.post('/register', (req, res) => {
//     console.log('Server Hit! (register route)')
//     const {username, password, email} = req.body;
//     const id = crypto.randomBytes(16).toString('hex'); // generate random char for user ID
//     // response
//     res.status(201).send({
//         message: "User Created Successfully",
//         userId: id,
//         username: username,
//         email: email
//     });
// })

app.all('/*', (req, res) => {
    res.send("invalid url");
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})