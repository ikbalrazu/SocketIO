import {createContext,useState,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';

const ChatContext = createContext();


const ChatProvider = ({children}) =>{

    const [user,setUser] = useState()

    //const history = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        setUser(userInfo); 

        // if(!userInfo){
        //     history.push("/");
        // }
    },[]);

    return(
        <ChatContext.Provider value={{ user, setUser }}>
            {children}
        </ChatContext.Provider>
    )
};

export const ChatState = () =>{
    return useContext(ChatContext);
}
export default ChatProvider;