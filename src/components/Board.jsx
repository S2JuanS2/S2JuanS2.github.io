import React, { useState } from 'react';
import CardList from "./CardList";
import AddFactor from './AddFactor';
import Decision from './Decision';

function Board(){

    const [pros, setPros] = useState([]);
    const [contras, setContras] = useState([]);

    const handleAddFactor = (text, weight, impact, type) => {
        const newFactor = {text, weight, impact, type};
        if (type === 'PRO') {
            if (!pros.some(factor => factor.text == text)){
                setPros((prevPros) => [...prevPros, newFactor]);
            }else{
                alert("[ERROR]: Este PRO ya está incluído!");
            }
        } else if (type === 'CONTRA') {
            if (!contras.some(factor => factor.text == text)){
                setContras((prevContras) => [...prevContras, newFactor]);
            }else{
                alert("[ERROR]: Esta CONTRA ya está incluída!");
            }
        }
    };

    const handleDelete = (factor, type) => {
        console.log(factor.text);
        if (type === 'PRO') {
            setPros((prevPros) => prevPros.filter((item) => item !== factor));
        } else if (type === 'CONTRA') {
            setContras((prevContras) => prevContras.filter((item) => item !== factor));
        }
    };

    return (
        <div>
            <AddFactor onAddFactor={handleAddFactor}></AddFactor>
            <div className="flex justify-between space-x-10 mt-8">
                <CardList customClass="text-green-400" items={pros} title="PROS" onDelete={handleDelete} type="PRO"></CardList>
                <CardList customClass="text-red-500" items={contras} title="CONTRAS" onDelete={handleDelete} type="CONTRA">CONTRAS</CardList>
            </div>
            <Decision itemsPros={pros} itemsContras={contras}></Decision>
        </div>
    );
}

export default Board;