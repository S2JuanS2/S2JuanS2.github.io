import { useState, useEffect } from "react";

const ServerStatus = ({ status }) => {
  const [serverStatus, setServerStatus] = useState({ message: "Revisando conexión...", online: false});

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch("https://thinkspick-server.onrender.com/api/health");
        if (response.ok) {
          const data = await response.json();
          setServerStatus({message: data.status === "ON" ? "🟢 En línea" : "🔴 Sin conexión", online: true});
          status(true);
        } else {
          setServerStatus({message: "🔴 Sin conexión", online: false});
          status(false);
        }
      } catch (error) {
        setServerStatus({message:"🔴 Sin conexión", online:false});
        status(false);
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 240000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-center p-4 rounded-lg text-center">
      <h2 className="text-sm font-semibold text-white pr-2">Estado del Servidor:</h2>
      {serverStatus.online ? (
        <p className="text-sm text-green-500">{serverStatus.message}</p>
      ) : (
          <p className="text-sm text-red-500">{serverStatus.message}</p>
      )}
    </div>
  );
};

export default ServerStatus;
