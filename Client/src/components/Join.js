import React,{useState} from "react";
import {Link} from 'react-router-dom';

const Join = () => {
    const [name,setName] = useState("")
    const [room,setRoom] = useState("")

    return(
        <div>
        <div >
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="room" onChange={(e)=>setRoom(e.target.value)}/>
            <Link to={`/chat?name=${name}&room=${room}`}>Join</Link>
        </div>
        <div>
            <p>{name}</p>
            <p>{room}</p>
        </div>
        </div>
    )
}
export default Join;