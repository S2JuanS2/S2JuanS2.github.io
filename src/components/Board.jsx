import React from 'react';
import CardList from "./CardList";
import NumberInput from './NumberInput';

function Board(){

    {/*TESST*/}
    const pros = ["Económico", "Fácil de usar", "Rápido"];
    const contras = ["Costoso", "Difícil de aprender", "Poco soporte"];

    return (
        <div className="flex justify-between ml-45 mr-45 mt-8 mb-50">
            <CardList customClass="text-green-400" items={pros}>PROS</CardList>
            <div className="mt-10">
                <h1 className="text-white mb-2">Pros y Contras:</h1>
                <textarea type="text" className="border-2 border-blue-400 text-white rounded-b-md resize-none overflow-hidden h-40 pl-2 pr-2" placeholder="Es muy costoso" maxLength={80}/>
                <div>
                    {/* NumberInput */}
                    <NumberInput></NumberInput>
                </div>
                <div className="flex flex-row justify-between">
                    <img src="/src/assets/images/load.png" alt="" className="w-8 h-8 ml-2 mt-2 cursor-pointer"/>
                    <h3 className='mt-3 text-white font-medium'>Ingresar</h3>
                    <img src="/src/assets/images/load.png" alt="" className="w-8 h-8 mr-2 mt-2 cursor-pointer transform rotate-180"/>
                </div>
            </div>
            <CardList customClass="text-red-500" items={contras}>CONTRAS</CardList>
        </div>
    );
}

export default Board;