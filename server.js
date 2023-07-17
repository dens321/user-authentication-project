const express = require('express');
const app = express();
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
    console.log('Server Hit! (login route)');
    const {username, password} = req.body;
    if(username === "dnns" && password === "anggara"){
        res.status(200).send('Login Successful');
    }
    else {
        res.status(401).send('Invalid Credentials');
    }
})

app.post('/register', (req, res) => {
    console.log('Server Hit! (register route)')
    const {username, password, email} = req.body;
    const id = crypto.randomBytes(16).toString('hex');
    res.status(201).send({
        message: "User Created Successfully",
        userId: id,
        username: username,
        email: email
    });
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})