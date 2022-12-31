const express = require("express")
const chats = require("./dummi-data")
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT;

const app = express()

app.get('/',(req, res)=>{
    res.send('API is running')
})

app.get('/api/data',(req, res)=>{
    res.send(chats)
})

app.get('/api/data/:id', (req,res)=>{
    const singleChat = chats.find(chat => req.params.id === chat._id)
    res.send(singleChat)
})

app.listen(5000,()=>{
    console.log("server Started on PORT "+ PORT)
})