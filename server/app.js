const express = require('express')
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello Sachin, Myself ProMailer");
})

module.exports = app;