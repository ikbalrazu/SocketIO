import './App.css';
import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';


let socket;
function App() {

  const [msg,setMsg] = useState();

  const MessageEvent = () => {
    console.log("working");
    socket.send(msg);
    document.getElementById("input").value="";
  }

  const CustomMessageEvent = () => {
    socket.emit("customEvent",msg);
  }

  useEffect(()=>{
    console.log("hello world")
    socket = io.connect("http://localhost:4000");

    //receive data from server with predifined "message" event
    socket.on("message",(data)=>{
      console.log(data);
      document.getElementById("msg").innerHTML=data;
    })

    //receive data from server with custom event
    socket.on("customEvent",(data)=>{
      console.log(data);
      document.getElementById("msg1").innerHTML=data;
    })

  },[])

  return (
    <div className="App">
      hello world

      <div className='predefinedEvent' style={{border:"1px solid red"}}>
      <div>
      <input id='input' placeholder='message...' onChange={(e)=>setMsg(e.target.value)}/>
      </div>
      <div>
      <button onClick={MessageEvent}>predefined event send</button>
      </div>
      <h1 id='msg'></h1>
      </div>

      <div className='customEvent' style={{border:"1px solid green"}}>
      <div>
      <input id='input' placeholder='message...' onChange={(e)=>setMsg(e.target.value)}/>
      </div>
      <div>
      <button onClick={CustomMessageEvent}>custom event send</button>
      </div>
      <h1 id='msg1'></h1>
      </div>
      
    </div>
  );
}

export default App;
