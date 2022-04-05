import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../App.css';

let socket;
const Chat = () => {

    const [message,setMessage] = useState([]);

    const location = useLocation(); //distractring
    const {name,room} = queryString.parse(location.search);
    console.log(name);
    //console.log(query);

    const sendMessage = (e) => {
        if(e.key === "Enter" && e.target.value){
            socket.emit("message", e.target.value);
            e.target.value = "";
        }
    }

    useEffect(()=>{
        socket = io.connect("http://localhost:4000");
        socket.emit("join", { name, room }, (error) => {
            if(error){
                alert(error);
            }
        });
        socket.on("message",(message)=>{
            setMessage((preMsg)=>[...preMsg,message]);
        })
    },[]);

    return(
        <div className="ChatBox">
        <div className="chat">
        <div className="chat-head">
          <div className="room">
            {room}
          </div>
          <Link to="/">X</Link>
        </div>
        <div className="chat-box">
            <div className="messages">
                {message.map((message,index)=>(
                    <div key={index} className="message"><span style={{background:"#87CEFA",color:"black",borderRadius:"3px",margin:"2px"}}>{message.user}</span>: {message.text}</div>
                ))}
                
            </div>
            <input placeholder="message.." onKeyDown={sendMessage}/>
        </div>
        </div>
        </div>
    )
}
export default Chat;