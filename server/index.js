const app = require('./app')

require('dotenv').config({path:"./config/config.env"})

app.listen(process.env.PORT,()=>{
    console.log(`Server start working.... on http://localhost:${process.env.PORT}`)
})