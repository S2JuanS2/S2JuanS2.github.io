import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";
import Confetti from 'react-confetti';

function Decision({ itemsPros, itemsContras }) {

    
    const audioCalculate = new Audio("/sounds/resolve.mp3");
    const audioAzar = new Audio("/sounds/slot.mp3");
    const audioIa = new Audio("/sounds/ia.mp3");
    
    const [jumpTarget, setJumpTarget] = useState(false);
    const [jumpAzar, setJumpAzar] = useState(false);
    const [jumpIA, setJumpIA] = useState(false);
    const [result, setResult] = useState(0);
    const [isOffline, setServerStatus] = useState(true);

    const [decisionApi, setDecisionApi] = useState("");

    const [showConfetti, setShowConfetti] = useState(false);

    const iaStatus = (status) => {

    }

    const azar = () => {

    }

    const calculate = () => {
        let totalPro = 0;
        itemsPros.forEach(item => {
            console.log(item);
            totalPro += (item.weight * item.impact); 
        });
        let totalContra = 0;
        itemsContras.forEach(item => {
            totalContra += (item.weight * item.impact);
        });
        totalContra = totalContra*-1;
        let totalResult = totalPro + totalContra;
        setResult(totalResult);

        if (totalResult > 0) {
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        }
    }

    const handleClickIa = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/decision");
            const data = await response.text();
            setDecisionApi(data);
        }catch(error){
            console.error("Server Off", );
        }
    }
      
    const playSound = (sound) =>{
        sound.play();
    }

    const handleJump = (setJumpFn) => {
        setJumpFn(true);
        setTimeout(() => setJumpFn(false), 400);
    };

    return (
        <div>

            {showConfetti > 0 && <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.2}/>}

            <div className="flex justify-center mt-10 space-x-10">
                <div className="flex flex-col items-center">
                    <motion.img
                        src="/images/objetivo.png"
                        alt="target"
                        className="h-16 w-16"
                        animate={jumpTarget ? { y: [0, -10, 0, -5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    />
                    <h3 className="font-serif text-blue-300 mt-2 cursor-pointer underline"
                        onClick={() => {handleJump(setJumpTarget), playSound(audioCalculate), calculate()}}
                        >
                        Cálculo
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <motion.img
                        src="/images/azar.png"
                        alt="target"
                        className="h-16 w-16"
                        animate={jumpAzar ? { y: [0, -10, 0, -5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        
                    />
                    <h3 className="font-serif text-blue-300 mt-2 cursor-pointer underline"
                        onClick={() => { handleJump(setJumpAzar), playSound(audioAzar), azar(); }}
                        >
                        Azar
                    </h3>
                </div>
                <div className={`flex flex-col items-center ${isOffline ? "opacity-20" : "hover:border-white"}`}>
                    <motion.img
                        src="/images/ia.png"
                        alt="target"
                        className="h-16 w-16"
                        animate={jumpIA ? { y: [0, -10, 0, -5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    />
                    <h3 className={`font-serif text-blue-300 mt-2 cursor-pointer underline ${isOffline ? "cursor-wait" : "hover:border-white"}`}
                        onClick={() => {
                            if (!isOffline) {
                                handleJump(setJumpIA);
                                handleClickIa();
                                playSound(audioIa);
                            }
                        }}
                        >
                        IA
                    </h3>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className={`w-8/12 flex flex-col items-center border-2 rounded-lg border-blue-950 bg-blue-950 pt-4 space-y-3 
                                ${result > 0 ? "border-green-400 bg-green-400" : (result === 0 ? "border-yellow-500 bg-yellow-500" : "border-red-400 bg-red-400")}
                                `}>
                    <div>
                        { result > 0 ? (
                            <h1 className="text-white font-bold">Resultado: <span className="">FAVORABLE</span></h1>
                        ) : result === 0 ?(
                            <h1 className="text-white font-bold">Resultado: <span className="">INDEFINIDO</span></h1>
                        ) : (
                            <h1 className="text-white font-bold">Resultado: <span>NO FAVORABLE</span></h1>
                        )};
                    </div>
                </div>
            </div>
            {/*
            <!-- SERVER CAIDO -->
            <ServerStatus status={iaStatus}></ServerStatus>
            */}
        </div>
    );
}

export default Decision;