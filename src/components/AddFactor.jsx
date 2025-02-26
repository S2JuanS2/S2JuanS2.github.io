import { useState } from 'react';
import NumberInput from './NumberInput';

function AddFactor({onAddFactor}){

    const[factorText, setFactorText] = useState("");

    const handleTextChange = (e) => {
        setFactorText(e.target.value);
    }

    const handleAddPro = () => {
        if (factorText.trim()) {
            onAddFactor(factorText, 'PRO');
            setFactorText("");
        }
    };
    
    const handleAddContra = () => {
        if (factorText.trim()) {
            onAddFactor(factorText, 'CONTRA');
            setFactorText("");
        }
    };

    return(
        <div>
            <div className="flex justify-between">
                <h1 className="text-white mb-1 mt-4">Piensa... ¿Qué puede malir sal?</h1>
                <h1 className="text-white mb-1 mt-4 mr-34">Ponderación</h1>
            </div>
            <div className="flex justify-between">
                <textarea   
                    className="border-2 border-blue-400 text-white rounded-b-md resize-none overflow-hidden h-10 w-11/12 pl-2 pr-2 pt-1 mr-2 mb-8 bg-gray-900" 
                    type="text" 
                    value={factorText}
                    onChange={handleTextChange}
                    placeholder="Es muy costoso" 
                    maxLength={80}
                />
                <div className="ml-2 mr-2">
                    <NumberInput></NumberInput>
                </div>
                <div className="flex flex-row justify-center">
                    <button 
                        className="text-white bg-green-500 focus:outline-none w-auto cursor-pointer rounded-l-md font-bold p-1 pl-2 pr-2 h-10 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300"
                        onClick={handleAddPro}
                        >
                        PRO
                    </button>
                    <button 
                        className="text-white bg-red-500 focus:outline-none w-auto cursor-pointer rounded-r-md font-bold p-1 pr-2 h-10 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300"
                        onClick={handleAddContra}
                        >
                        CONTRA
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddFactor;