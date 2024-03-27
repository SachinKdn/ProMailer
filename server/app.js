const express = require('express')
const app = express();
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    // res.send("Hello Sachin, Myself ProMailer");
    res.send({ title: 'Main Header Page of ProMailer' });
})


app.get('/check',(req,res)=>{
    // res.send("Hello Sachin, Check This Side...");
    res.send({ title: 'Checking Page of ProMailer' });
})

module.exports = app;