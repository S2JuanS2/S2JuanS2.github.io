import { useState, useEffect } from "react";

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState({ message: "Checking...", online: false});

  useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/health");
        if (response.ok) {
          const data = await response.json();
          setServerStatus({message: data.status === "ON" ? "🟢 Online" : "🔴 Offline", online: true});
        } else {
          setServerStatus({message: "🔴 Offline", online: false});
        }
      } catch (error) {
        setServerStatus({message:"🔴 Offline", online:false});
      }
    };

    checkServer();
    const interval = setInterval(checkServer, 60000); // Verifica cada 5 segundos
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
