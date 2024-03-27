const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello Sachin, Myself ProMailer");
})


app.get('/check',(req,res)=>{
    res.send("Hello Sachin, Check This Side...");
})

module.exports = app;