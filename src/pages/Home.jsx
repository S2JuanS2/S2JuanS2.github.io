import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypewriterEffect from "../components/TypeWriterEffect";
import axios from "axios";
import Cookies from "js-cookie";

function Home (){
    const [showButton, setShowButton] = useState(false);
    const [userName, setUserName] = useState("");
    const socket = new WebSocket("wss://thinks-pick-server.onrender.com/chat");
  
    const handleLogOut = () => {
        Cookies.remove("jwtAuth");
    }

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await axios.get("https://thinks-pick-server.onrender.com/api/v1/demo", {
                    headers: { Authorization: `Bearer ${Cookies.get("jwtAuth")}` }
                });
                setUserName(response.data);
                localStorage.setItem("userName", response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchUserName();

        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center">
                <div className="pt-8 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-100 text-center">
                    <h1 className="text-white font-bold underline underline-offset-2">
                        <TypewriterEffect text={`Bienvenido ${userName} a Thinks & Pick!\n`} speed={50} delay={0} />
                    </h1>
                    <h2 className="text-white">
                        <TypewriterEffect text={"El sitio se encuentra en desarrollo."} speed={20} delay={2} />
                    </h2>
                    {showButton && (
                        <div className="mt-10 space-x-2">
                            <a href="/#/thinks-pick" className="text-white border-2 border-cyan-500 font-bold p-1 rounded-lg bg-cyan-500 hover:border-blue-300 hover:text-blue-950 transition-colors duration-300">EMPEZAR</a>
                            <a href="/#/login" onClick={handleLogOut} className="text-white border-2 border-red-600 font-bold p-1 rounded-lg bg-red-400 hover:border-blue-300 hover:text-blue-950 transition-colors duration-300">Cerrar sesión</a>
                        </div>
                    )}
                </div>
            </div>
            <Footer className="mt-auto" />
        </div>
    );
}

export default Home;
