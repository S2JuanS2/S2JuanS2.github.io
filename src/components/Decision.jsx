import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Decision() {
    
    const [jumpTarget, setJumpTarget] = useState(false);
    const [jumpAzar, setJumpAzar] = useState(false);
    const [jumpIA, setJumpIA] = useState(false);

    const [decisionApi, setDecisionApi] = useState("");

    const handleClick = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/decision");
            const data = await response.text();
            setDecisionApi(data);
        }catch(error){
            console.error("Error:", error);
        }
    }
      
    const handleJump = (setJumpFn) => {
        setJumpFn(true);
        setTimeout(() => setJumpFn(false), 400);
    };

    return (
        <div className="flex justify-center mt-10 space-x-10">
            <div className="flex flex-col items-center">
                <motion.img
                    src="/images/objetivo.png"
                    alt="target"
                    className="h-16 w-16 cursor-pointer"
                    animate={jumpTarget ? { y: [0, -10, 0, -5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    onClick={() => handleJump(setJumpTarget)}
                />
                <h3 className="font-serif text-blue-300 mt-2">Cálculo</h3>
            </div>
            <div className="flex flex-col items-center">
                <motion.img
                    src="/images/azar.png"
                    alt="target"
                    className="h-16 w-16 cursor-pointer"
                    animate={jumpAzar ? { y: [0, -10, 0, -5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    onClick={() => { handleJump(setJumpAzar), handleClick(); }}
                />
                <h3 className="font-serif text-blue-300 mt-2">Azar</h3>
            </div>
            <div className="flex flex-col items-center">
                <motion.img
                    src="/images/ia.png"
                    alt="target"
                    className="h-16 w-16 cursor-pointer"
                    animate={jumpIA ? { y: [0, -10, 0, -5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    onClick={() => handleJump(setJumpIA)}
                />
                <h3 className="font-serif text-blue-300 mt-2">IA</h3>
            </div>
        </div>
    );
}

export default Decision;
