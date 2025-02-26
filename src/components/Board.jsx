import React, { useState } from 'react';
import CardList from "./CardList";
import AddFactor from './AddFactor';

function Board(){

    const [pros, setPros] = useState([]);
    const [contras, setContras] = useState([]);

    const handleAddFactor = (text, type) => {
        if (type === 'PRO') {
            setPros((prevPros) => [...prevPros, text]);
        } else if (type === 'CONTRA') {
            setContras((prevContras) => [...prevContras, text]);
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
            <div className="flex justify-between gap-x-10 mt-8 mb-50">
                <CardList customClass="text-green-400" items={pros} title="PROS" onDelete={handleDelete} type="PRO"></CardList>
                <CardList customClass="text-red-500" items={contras} title="CONTRAS" onDelete={handleDelete} type="CONTRA">CONTRAS</CardList>
            </div>
        </div>
    );
}

export default Board;