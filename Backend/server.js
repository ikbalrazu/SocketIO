const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');
const {chats} = require('./data/data');
const connectDB = require('./confiq/db');
const userRoutes = require("./routes/userRouters");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use(cors());



const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("app is running..");
})

app.use("/api/user",userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound)
app.use(errorHandler)

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
        connectDB();
    }
})