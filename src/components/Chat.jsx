import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("Anonimo");
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://thinks-pick-server.onrender.com/chat");

    socketRef.current.onopen = () => {
      console.log("WebSocket conectado");
    };

    socketRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket cerrado");
    };

    return () => {
      socketRef.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (message.length !== 0 && socketRef.current.readyState === WebSocket.OPEN) {
      const userMsg = `${userName}: ${message}`;
      socketRef.current.send(userMsg);
      setMessage("");
    } else {
      console.warn("WebSocket aún no está listo para enviar mensajes");
    }
  };

  return (
    <div className="flex flex-col p-4 mt-5 ml-5 mr-5 mx-auto bg-blue-900 rounded-lg">
      <div className="overflow-auto h-64 mb-4">
        {messages.map((msg, index) => {
          const [user, userMessage] = msg.split(": ");
          return (
            <div key={index} className="p-2 pl-4 mb-2 bg-gray-100 rounded-lg mr-4 ml-4">
              <span className="font-bold">{user}:</span> {userMessage}
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
      <div className="flex justify-center">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-1 text-white rounded-l-lg pl-4"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 border-1 bg-blue-500 text-white rounded-r-lg w-30 cursor-pointer hover:border-white"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
