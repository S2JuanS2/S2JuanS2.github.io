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
        <div className="w-170">
            <h1 className="text-white mb-1 mt-4">Piensa... ¿Qué puede malir sal?</h1>   
            <div className="flex flex-col">
                <textarea   
                    className="border-2 border-blue-400 text-white rounded-b-md resize-none overflow-auto h-9 w-6/12 pl-2 pr-2 pt-1 mr-2 mb-4 bg-gray-900" 
                    type="text" 
                    value={factorText}
                    onChange={handleTextChange}
                    placeholder="Es muy costoso" 
                    maxLength={80}
                />
                <div className="flex flex-row w-6/12 justify-between mb-5">
                    <div className="text-center">
                        <h1 className="text-white text-sm mb-1">Peso</h1>
                        <NumberInput></NumberInput>
                    </div>
                    <div className="text-center">
                        <h1 className="text-white text-sm mb-1">Impacto</h1>
                        <NumberInput></NumberInput>
                    </div>
                    <div className=" mt-5">
                        <button 
                            className="text-white bg-green-500 focus:outline-none w-auto cursor-pointer rounded-l-md font-bold p-1 pl-2 pr-2 h-8 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300"
                            onClick={handleAddPro}
                            >
                            PRO
                        </button>
                        <button 
                            className="text-white bg-red-500 focus:outline-none w-auto cursor-pointer rounded-r-md font-bold p-1 pr-2 h-8 border-1 border-black hover:border-1 hover:border-white transition-colors duration-300"
                            onClick={handleAddContra}
                            >
                            CONTRA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFactor;