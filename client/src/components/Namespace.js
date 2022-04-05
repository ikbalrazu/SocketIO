import React,{useEffect,useState} from "react"
import io from 'socket.io-client';

let socket
const Namespace = () => {

    useEffect(()=>{
        console.log("namespace component");
        socket = io.connect("http://localhost:4000");
        socket = io("/buy");
        socket.on("myevent",function(data){
            console.log(data);
            document.getElementById("msg").innerHTML=data;
        })


    },[])

    return(
        <div>
            Namespace component
            <h1 id='msg'></h1>
        </div>
    )
}
export default Namespace;