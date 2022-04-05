const express = require('express')
const http = require("http");
const socketIO = require("socket.io");
const cors = require('cors');
// const bodyparser = require('body-parser');
const port = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer,{
    cors: {
        origin: "*", //origin:"*" use this for all domain
        methods: ["GET", "POST"],
    }
});

app.use(cors());
// app.use(bodyparser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.send("hello world");
})

//connection 
io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    //message - server to client with "message" event
    setTimeout(() => {
        socket.send("pre-defined message event");
    }, 2000);
    //socket.send("hello world from server side");

    //custom event- data server to client
    socket.emit("customEvent","custom event");

    //receive message - client to server with "message" event
    socket.on("message",(data)=>{
        console.log(data);
    })

    //receive message - with custom event
    socket.on("customEvent",(data)=>{
        console.log(data);
    })

    //when user will be disconnected
    socket.on("disconnect", ()=>{
        console.log("user disconnected",socket.id);
    })
});


// app.listen(port,function(error){
//     if(error){
//         console.log("failed")
//     }
//     else{
//         console.log("success");
//     }
// })

httpServer.listen(port,()=>{
    console.log("success");
})