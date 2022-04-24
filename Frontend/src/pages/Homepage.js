
import React, {useEffect,useState} from 'react'
import {Button} from '@material-ui/core';
import axios from 'axios';

const Homepage = () =>{

    const [chat,setChat] = useState();

    const fetchChat = async () => {
        const {data} = await axios.get("http://localhost:4000/api/chat");
        setChat(data);
    }


    useEffect(()=>{
        fetchChat();
    },[])

    return(
        <div>
            {chat?.map((data,index)=>{
                return <div key={data._id}><p>{data.chatName}</p></div>
            })}
        </div>
    )
}

export default Homepage