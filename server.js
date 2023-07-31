const express = require('express')
const mongoose = require('mongoose')
const app =express()

//routes

app.get('/',(req,res)=>{
    res.send('hello node api')
})

app.get("/blog",(req,res)=>{
    res.send("Hello blog my name is dev")
})
app.listen(3000,()=>{
    console.log('Node api is running on port 3000')
})

mongoose.
connect('mongodb+srv://2019riyashukla:123456789RIYA@devapi.7ouxclk.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log("connected to mongoDB")
}).catch((error)=>{
    console.log(error)
})