import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState("Anonimo");
  const socket = useRef(null);

  useEffect(() => {

    setUserName(localStorage.getItem("userName"))
    // Cargar mensajes desde la base de datos al iniciar
    fetch("https://thinks-pick-server.onrender.com/api/messages")
      .then(response => response.json())
      .then(data => setMessages(data.map(msg => `${msg.message}`)))
      .catch(error => console.error("Error al cargar mensajes:", error));

    socket.current = new WebSocket("wss://thinks-pick-server.onrender.com/chat");

    socket.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

  }, []);

  const sendMessage = () => {
    if(message.length !== 0){
        const userMsg = (userName + ": " + message);
        socket.current.send(userMsg);
        setMessage('');
    }
  };

  return (
    <div className="flex flex-col w-auto p-4 mt-5 ml-5 mr-5 mx-auto bg-gray-600 border-black border-2 rounded-lg">
        <div className='border-2 rounded-sm pt-4 border-black bg-gray-800 mb-3'>
          <div className="overflow-auto h-64 mb-4">
          {messages.map((msg, index) => {
              const [userName, userMessage] = msg.split(': ');
              return (
              <div key={index} className="pt-1 pl-2 pr-2 mb-2 bg-gray-100 rounded-lg mr-4 ml-4 h-7 w-max">
              <span className="font-bold">{userName}:</span> {userMessage}
              </div>
              );
          })}
          </div>
        </div>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-1 pr-1 pb-1 border-b-1 rounded-sm text-white mb-4"
            placeholder="Escribe un mensaje"
            maxLength={32}
        />
        <div className='text-end'>
            <input 
                type="text" 
                value={userName}
                readOnly
                className="text-white pl-4 text-end pr-4 font-bold w-max"
            />
            <button onClick={sendMessage} className="px-4 py-1 border-1 bg-gray-400 text-white rounded-r-lg w-auto cursor-pointer hover:border-white">
                Enviar
            </button>
        </div>
        </div>
    );
};

export default Chat;
