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
    console.log(req.body);
    console.log(username);
    console.log(password);
    res.send('Data Received!')
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`);
})