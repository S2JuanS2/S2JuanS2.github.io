import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState("Anonimo");
  const socket = new WebSocket("wss://thinks-pick-server.onrender.com/chat");

  axios.get("https://thinks-pick-server.onrender.com/api/v1/demo", {
    headers: { Authorization: `Bearer ${Cookies.get("jwtAuth")}` }
  })
    .then(response => setUserName(response.data))
    .catch(error => console.error("Error:", error));

  useEffect(() => {
    // Cargar mensajes desde la base de datos al iniciar
    fetch("https://thinks-pick-server.onrender.com/api/messages")
      .then(response => response.json())
      .then(data => setMessages(data.map(msg => `${msg.message}`)))
      .catch(error => console.error("Error al cargar mensajes:", error));

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
  }, []);

  const sendMessage = () => {
    if(message.length !== 0){
        const userMsg = (userName + ": " + message);
        socket.send(userMsg);
        setMessage('');
    }
  };

  return (
    <div className="flex flex-col p-4 mt-5 ml-5 mr-5 mx-auto bg-blue-900 rounded-lg">
        <div className="overflow-auto h-64 mb-4">
        {messages.map((msg, index) => {
            const [userName, userMessage] = msg.split(': ');
            return (
            <div key={index} className="p-2 pl-4 mb-2 bg-gray-100 rounded-lg mr-4 ml-4">
            <span className="font-bold">{userName}:</span> {userMessage}
            </div>
            );
        })}
        </div>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border rounded-lg mb-2 text-white"
            placeholder="Escribe un mensaje"
        />
        <div className='flex justify-end'>
            <input 
                type="text" 
                value={userName}
                readOnly
                className='border-1 text-white rounded-l-lg pl-4 text-end pr-4 font-bold'
            />
            <button onClick={sendMessage} className="px-2 py-1 border-1 bg-blue-500 text-white rounded-r-lg w-30 cursor-pointer hover:border-white">
                Enviar
            </button>
        </div>
        </div>
    );
};

export default Chat;
