import {createContext,useState,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext();


const ChatProvider = ({children}) =>{
    const [selectedChat, setSelectedChat] = useState();
    const [user,setUser] = useState();
    const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState();

    //const history = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        setUser(userInfo); 

        // if(!userInfo){
        //     history.push("/");
        // }
    },[]);

    return(
        <ChatContext.Provider value={{
            selectedChat,
            setSelectedChat, 
            user, 
            setUser, 
            chats, 
            setChats,
            notification,
            setNotification
        }}>
            {children}
        </ChatContext.Provider>
    )
};

export const ChatState = () =>{
    return useContext(ChatContext);
}
export default ChatProvider;