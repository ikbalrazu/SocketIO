const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const {chats} = require('./data/data');

const app = express();
const server = http.createServer(app);

app.use(cors());

dotenv.config();

const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("app is running..");
})

app.get("/api/chat",(req,res)=>{
    res.send(chats);
})

app.get("/api/chat/:id",(req,res)=>{
    //console.log(req.params.id);
    const singlechat = chats.find((c)=>c._id === req.params.id);
    res.send(singlechat);
})

server.listen(port,function(error){
    if(error){
        console.log("server fail");
    }
    else{
        console.log(`server started on port ${port}`);
    }
})