import React from 'react';
import CardList from "./CardList";
import AddFactor from './AddFactor';

function Board(){

    {/*TESST*/}
    const pros = ["Económicooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", "Fácil de usar", "Rápido"];
    const contras = ["Costoso", "Difícil de aprender", "Poco soporte"];

    return (
        <div>
            <AddFactor></AddFactor>
            <div className="flex justify-between gap-x-10 mt-8 mb-50">
                <CardList customClass="text-green-400" items={pros}>PROS</CardList>
                <CardList customClass="text-red-500" items={contras}>CONTRAS</CardList>
            </div>
        </div>
    );
}

export default Board;