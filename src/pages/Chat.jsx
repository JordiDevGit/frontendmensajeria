import { useEffect, useState } from "react";
import { getMessages, getUsers, postUserMessage } from "../services/api";

const Chat = () => {
    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({
        sender: '',
        receiver: '',
        message: ''
    });

    useEffect (() => {
        getUsers().then((users) => {
        setUsers(users.data)
    })}, []);

    const handleClickCheckbox = (e, user) => {
        if(e.target.checked){
            // Si el checkbox está marcado, introduce el ID
            setMessage({...message, 
                receiver: message.receiver.includes(user.id) ? 
                message.receiver : [...message.receiver, user.id]})
        }else {
            // Si el checkbox está desmarcado, elimina el ID
            setMessage({
                ...message,
                receiver: message.receiver.filter(id => id !== user.id)  // Filtra el ID que se quiere eliminar
            })
        }
    }

    const handleClickSendMessage = (message) => {
        postUserMessage(message)
    }

    const handleClickGetMessages = () => {
        getMessages().then((messages) => {
        setMessages(messages.data)})
    };

    return(
        <>
        <h1>Chat</h1>
        <ul>
            {users?.map((user) =>{
                return(
                    <li key={user.id}>
                        {user.username}
                        <input type="checkbox" onClick={ e => handleClickCheckbox(e, user)}/>
                    </li>
                
                )
            })}
        </ul>
        <button type="button" onClick={handleClickGetMessages} >Get Messages</button>
        <ul>
            {messages?.map((message) => {
                return(
                    <li key={message.id}>
                        <p>{message.message}</p>
                    </li>
                )
            })}
        </ul>
        <div>
            <input type="text" onChange={e => setMessage({...message, message: e.target.value})}/>
            <button type="button" onClick={() => handleClickSendMessage(message)} >Send Message</button>
        </div>
        </>
    )
}

export default Chat;