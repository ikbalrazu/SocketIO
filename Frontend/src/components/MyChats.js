import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import axios from "axios";

const MyChats = ({ fetchAgain }) =>{

    const [loggedUser,setLoggedUser] = useState();

    const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState()
   
    const fetchChats = async () =>{
        try{

            const config = {

                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
            };
        
            const { data } = await axios.get("/api/chat", config);
            setChats(data);

        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
    },[])
    return(
        <>
        </>
    )
}
export default MyChats;