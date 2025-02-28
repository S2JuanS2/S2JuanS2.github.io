import { useState } from 'react';
import NumberInput from './NumberInput';

function AddFactor({onAddFactor}){

    const[factorText, setFactorText] = useState("");
    const[factorWeight, setFactorWeight] = useState(0);
    const[factorImpact, setFactorImpact] = useState(0);

    const handleTextChange = (e) => {
        setFactorText(e.target.value);
    }

    const handleWeightChange = (newWeight) => {
        setFactorWeight(newWeight);
    }

    const handleImpactChange = (newImpact) => {
        setFactorImpact(newImpact);
    }

    const handleAddPro = () => {
        if (factorText.trim()) {
            onAddFactor(factorText, factorWeight, factorImpact, 'PRO');
            setFactorText("");
            setFactorImpact(0);
            setFactorWeight(0);
        }
    };
    
    const handleAddContra = () => {
        if (factorText.trim()) {
            onAddFactor(factorText, factorWeight, factorImpact, 'CONTRA');
            setFactorText("");
            setFactorImpact(0);
            setFactorWeight(0);
        }
    };

    const isButtonDisabled = factorWeight <= 0 || factorImpact <= 0 || factorText.length === 0;

    return(
        <div>
            <h1 className="text-white mb-1 mt-4">Piensa...</h1>   
            <div className="flex flex-col">
                <textarea   
                    className="border-2 border-blue-400 text-white rounded-b-md resize-none overflow-auto h-9 pl-2 pr-2 pt-1 mr-2 mb-4 bg-gray-900" 
                    type="text" 
                    value={factorText}
                    onChange={handleTextChange}
                    placeholder="Es muy costoso" 
                    maxLength={80}
                />
                <div className="flex justify-center space-x-10 mb-5 ml-3">
                    <div className="mb-4">
                        <NumberInput value={factorWeight} onChange={handleWeightChange} options={['Peso', 'Insignificante', 'Mínimo', 'Moderado', 'Significativo', 'Crucial']}></NumberInput>
                    </div>
                    <div className="">
                        <NumberInput value={factorImpact} onChange={handleImpactChange} options={['Impacto', 'Mínimo', 'Notable', 'Radical', 'Profundo', 'Revolucionario']}></NumberInput>
                    </div>
                </div>
                    <div className="flex justify-center mb-1">
                        <button
                            className={`text-white focus:outline-none w-auto rounded-l-md font-bold p-1 pl-2 pr-2 h-8 border-1 border-black transition-colors duration-300 ${
                                isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : "hover:border-white bg-green-500 cursor-pointer"
                            }`}
                            onClick={handleAddPro}
                            disabled={isButtonDisabled}
                            >
                            PRO
                        </button>
                        <button
                            className={`text-white focus:outline-none w-auto rounded-r-md font-bold p-1 pr-2 h-8 border-1 border-black transition-colors duration-300 ${
                                isButtonDisabled ? "bg-gray-500 cursor-not-allowed" : "hover:border-white bg-red-500 cursor-pointer"
                            }`}
                            onClick={handleAddContra}
                            disabled={isButtonDisabled}
                            >
                            CONTRA
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default AddFactor;