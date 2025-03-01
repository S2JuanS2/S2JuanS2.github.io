import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TypewriterEffect from "../components/TypeWriterEffect";

function Home (){

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center">
                <div className="pt-8 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-100 text-center">
                    <h1 className="text-white font-bold underline underline-offset-2"><TypewriterEffect text={"Bienvenido a Thinks & Pick!\n"} speed={50} delay={0}></TypewriterEffect></h1>
                    <p className="text-white"><TypewriterEffect text={"El sitio se encuentra en desarrollo."} speed={50} delay={2}></TypewriterEffect></p>
                    <h2 className="text-white font-bold underline underline-offset-2 mt-5"><TypewriterEffect text={"Leyenda"} speed={50} delay={5}></TypewriterEffect></h2>
                    <div className="flex flex-col justify-center ml-20 mt-4 space-y-2">
                        <div className="flex">
                            <img src="/images/info.png" alt="info" className="w-6 h-6"/>
                            <p className="text-white ml-2"><TypewriterEffect text={"Información."} speed={50} delay={6}></TypewriterEffect></p>
                        </div>
                        <div className="flex">
                            <img src="/images/user-img.png" alt="user" className="w-6 h-6"/>
                            <p className="text-white ml-2"><TypewriterEffect text={"Origen."} speed={50} delay={7}></TypewriterEffect></p>
                        </div>
                    </div>
                    {showButton && (
                        <div className="mt-10">
                            <a href="/#/thinks-pick" className="text-white border-2 border-cyan-500 font-bold p-1 rounded-lg bg-cyan-500 hover:border-blue-300 hover:text-blue-950 transition-colors duration-300">EMPEZAR</a>
                        </div>
                    )}
                </div>
            </div>
            <Footer className="mt-auto" />
        </div>
      );
}

export default Home;