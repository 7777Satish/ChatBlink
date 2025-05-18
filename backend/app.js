const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/userModel.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send("Nice");
})

app.post('/contact', (req,res)=>{
    console.log(req.body);

    res.send('Nice');
})

const loginRoute = require('./routes/login.js');
app.use('/login', loginRoute);

module.exports = app;