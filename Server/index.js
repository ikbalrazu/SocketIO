const express = require('express')
const http = require("http");
const socketIO = require("socket.io");
const cors = require('cors');
const bodyparser = require('body-parser');
const port = process.env.PORT || 4000;
const {AddUser, RemoveUser, getUserById} = require('./users');
const { callbackify } = require('util');
const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer,{
    cors: {
        origin: "http://localhost:3000", //origin:"*" use this for all domain
        methods: ["GET", "POST"],
    }
});

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
    res.send("hello world");
})

io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    socket.on("join", ({ name, room }, callback) => {
        console.log(name, room);
        const { error, user } = AddUser({id:socket.id, name, room});
        if(error){
            callback(error);
        }
        socket.join(room);
        socket.emit("message",{
            user: "System",
            text: `welcome ${name} to ${room}.`,
        });

        socket.broadcast.to(room).emit("message",{
            user: "System",
            text: `${name} just joined ${room}.`,
        });

        callback();
    })

    socket.on("message",(message)=>{
        console.log("Message: ",message);
    })

    socket.on("disconnect", () => {
        console.log("user disconnect",socket.id);
        const user = RemoveUser(socket.id);
        
        if(user){
            io.to(user.room).emit("message",{
                user:"System",
                text:`${user.name} just left ${user.room}.`,
            })
        }
        
    })
});

httpServer.listen(port,()=>{
    console.log("success");
})