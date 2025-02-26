import React, { useState } from 'react';
import CardList from "./CardList";
import AddFactor from './AddFactor';

function Board(){

    const [pros, setPros] = useState([]);
    const [contras, setContras] = useState([]);

    const handleAddFactor = (text, type) => {

        if (type === 'PRO') {
            if (!pros.includes(text)){
                setPros((prevPros) => [...prevPros, text]);
            }else{
                alert("[ERROR]: Este PRO ya está incluído!");
            }
        } else if (type === 'CONTRA') {
            if (!contras.includes(text)){
                setContras((prevContras) => [...prevContras, text]);
            }else{
                alert("[ERROR]: Esta CONTRA ya está incluída!");
            }
        }
    };

    const handleDelete = (text, type) => {
        if (type === 'PRO') {
            setPros((prevPros) => prevPros.filter((item) => item !== text));
        } else if (type === 'CONTRA') {
            setContras((prevContras) => prevContras.filter((item) => item !== text));
        }
    };

    return (
        <div>
            <AddFactor onAddFactor={handleAddFactor}></AddFactor>
            <div className="flex justify-between gap-x-10 mt-8">
                <CardList customClass="text-green-400" items={pros} title="PROS" onDelete={handleDelete} type="PRO"></CardList>
                <CardList customClass="text-red-500" items={contras} title="CONTRAS" onDelete={handleDelete} type="CONTRA">CONTRAS</CardList>
            </div>
        </div>
    );
}

export default Board;