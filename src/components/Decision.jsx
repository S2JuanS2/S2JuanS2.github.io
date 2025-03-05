import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ServerStatus from "./ServerStatus";
import Confetti from 'react-confetti';
import Chat from "./Chat";

function Decision({ itemsPros, itemsContras }) {

    const audioCalculate = new Audio("/sounds/resolve.mp3");
    const audioAzar = new Audio("/sounds/slot.mp3");
    const audioIa = new Audio("/sounds/ia.mp3");
    
    const [jumpTarget, setJumpTarget] = useState(false);
    const [jumpAzar, setJumpAzar] = useState(false);
    const [jumpIA, setJumpIA] = useState(false);
    const [result, setResult] = useState(0);

    const [showConfetti, setShowConfetti] = useState(false);

    const azar = () => {
        let max = itemsContras.length + itemsPros.length;
        if (max !== 0){
            const min = 1;
            let resultRandom = Math.floor(Math.random() * (max - min + 1)) + min;
            if (itemsPros.length > itemsContras.length){
                if(resultRandom > itemsPros.length){
                    setResult(-1);
                }else{
                    setResult(1);
                }
            }else if (itemsPros.length < itemsContras.length){
                if (resultRandom > itemsContras.length){
                    setResult(1);
                }else{
                    setResult(-1);
                }
            }else{
                if(resultRandom > itemsPros.length){
                    setResult(-1);
                }else{
                    setResult(1);
                }
            }
        }
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

    const ia = async () => {

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
                        onClick={() => {handleJump(setJumpTarget), calculate(), playSound(audioCalculate)}}
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
                        onClick={() => { handleJump(setJumpAzar), azar(), playSound(audioAzar); }}
                        >
                        Azar
                    </h3>
                </div>
                <div className="flex flex-col items-center">
                    <motion.img
                        src="/images/ia.png"
                        alt="target"
                        className="h-16 w-16"
                        animate={jumpIA ? { y: [0, -10, 0, -5, 0] } : {}}
                        transition={{ duration: 0.4 }}
                    />
                    <h3 className="font-serif text-blue-300 mt-2 cursor-pointer underline"
                        onClick={() => { handleJump(setJumpIA), ia(), playSound(audioIa); }}
                        >
                        IA
                    </h3>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className={`w-8/12 flex flex-col mt-5 mb-5 items-center border-2 rounded-lg border-blue-950 bg-blue-950 pt-4 space-y-3 
                                ${result > 0 ? "border-green-400 bg-green-400" : (result === 0 ? "border-yellow-500 bg-yellow-500" : "border-red-400 bg-red-400")}
                                `}>
                    <div className="text-center pb-5">
                        <h1 className="text-white font-bold">Resultado</h1>
                        { result > 0 ? (
                            <h1 className="text-white font-bold">FAVORABLE</h1>
                        ) : result === 0 ?(
                            <h1 className="text-white font-bold">INDEFINIDO</h1>
                        ) : (
                            <h1 className="text-white font-bold">NO FAVORABLE</h1>
                        )}
                    </div>
                </div>
            </div>
            {/*
            <!-- SERVER -->
            */}
            <Chat></Chat>
            <ServerStatus></ServerStatus>
        </div>
    );
}

export default Decision;