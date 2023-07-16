const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/', (req, res) => {
    console.log('Server Hit!')
    const {username, password} = req.body;
    if(username === "dnns" && password === "anggara"){
        res.status(200).send('Login Successful');
    }
    else {
        res.status(401).send('Invalid Credentials');
    }
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})