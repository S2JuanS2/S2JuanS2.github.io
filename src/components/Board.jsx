import React, { useEffect, useState } from 'react';
import CardList from "./CardList";
import AddFactor from './AddFactor';
import Decision from './Decision';

function Board(){

    const [pros, setPros] = useState([]);
    const [contras, setContras] = useState([]);

    useEffect(() => {
        
        const prosSave = JSON.parse(localStorage.getItem("pros")) || [];
        const contrasSave = JSON.parse(localStorage.getItem("contras")) || [];

        setPros(prosSave);
        setContras(contrasSave);
    }, [])

    const handleAddFactor = (text, weight, impact, type) => {
        const newFactor = {text, weight, impact, type};
        if (type === 'PRO') {
            if (!pros.some(factor => factor.text == text)){
                const updatedPros = [...pros, newFactor];
                setPros(updatedPros);
                localStorage.setItem("pros", JSON.stringify(updatedPros));
            }else{
                alert("[ERROR]: Este PRO ya está incluído!");
            }
        } else if (type === 'CONTRA') {
            if (!contras.some(factor => factor.text == text)){
                const updatedContras = [...contras, newFactor];
                setContras(updatedContras);
                localStorage.setItem("contras", JSON.stringify(updatedContras));
            }else{
                alert("[ERROR]: Esta CONTRA ya está incluída!");
            }
        }
    };

    const handleDeleteAll = (type) => {
        if (type === 'PRO') {
            setPros([]);
            localStorage.setItem("pros", [JSON.stringify([])]);
        } else if (type === 'CONTRA') {
            setContras([]);
            localStorage.setItem("contras", JSON.stringify([]));
        }
    };

    const handleDelete = (factor, type) => {
        if (type === 'PRO') {
            const updatedPros = pros.filter((item) => item !== factor);
            setPros(updatedPros);
            localStorage.setItem("pros", JSON.stringify(updatedPros));
        } else if (type === 'CONTRA') {
            const updatedContras = contras.filter((item) => item !== factor);
            setContras(updatedContras);
            localStorage.setItem("contras", JSON.stringify(updatedContras));
        }
    };

    return (
        <div>
            <AddFactor onAddFactor={handleAddFactor}></AddFactor>
            <div className="flex justify-between space-x-10 mt-8">
                <CardList customClass="text-green-400" items={pros} title="PROS" onDelete={handleDelete} onDeleteAll={handleDeleteAll} type="PRO"></CardList>
                <CardList customClass="text-red-500" items={contras} title="CONTRAS" onDelete={handleDelete} onDeleteAll={handleDeleteAll} type="CONTRA">CONTRAS</CardList>
            </div>
            <Decision itemsPros={pros} itemsContras={contras}></Decision>
        </div>
    );
}

export default Board;