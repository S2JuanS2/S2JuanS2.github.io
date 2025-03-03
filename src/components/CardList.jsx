import React from 'react';
import Card from './Card';

function CardList({customClass, title, items, onDelete, onDeleteAll, type}){
    return(
        <div className="w-6/12">
            <div className={`flex ${title === "PROS" ? "justify-start" : "justify-end"}`}>
                <div className={`${customClass} flex flex-row justify-between border-t-2 border-l-2 border-r-2 w-40 pl-2 pr-2 pt-1 bg-blue-950 rounded-t-md`}>
                    <h1 className="font-bold text-sm">{title} | {items.length}</h1>
                    <img src="/images/borrar.png" 
                        alt="borrar" 
                        className='w-4 h-4 cursor-pointer'
                        onClick={() => onDeleteAll(type)}
                        />
                </div>
            </div>
            <div className={`${customClass} border-2 min-h-53 pb-2 rounded-x-md rounded-b-md bg-blue-950`}>
                {items.length === 0 ? (
                    <h1 className='text-center mt-20 text-blue-300'>Vacío</h1>
                ) : (
                    items.map((item, index) => (
                        <Card key={index} onDelete={() => onDelete(item, type)} colorClass={customClass}>
                            {item}
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}

export default CardList;