const User = require('../models/userModel.js');
const bcrypt = require("bcryptjs");
const express = require('express');
const loginRoute = express.Router();

loginRoute.get('/', async (req, res)=>{
    const {email, password} = req.body;
    const user = await User.getUserByEmail(email);
    console.log(user);
    if(user){
        console.log(123);
        const compare = await bcrypt.compare(password, user.password);
        if(compare){
            res.send("Login Successfull " + user.username);
        } else {
            res.send("Invalid Credentials");
        }
    } else {
        res.send("Invalid Credentials");
    }
})

module.exports = loginRoute;