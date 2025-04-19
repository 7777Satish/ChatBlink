const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.get('/',(req,res)=>{
    console.log(req.body);
    res.send("Nice")
})

app.post('/contact', (req,res)=>{
    console.log(req.body);

    res.send('Nice');
})

module.exports = app;