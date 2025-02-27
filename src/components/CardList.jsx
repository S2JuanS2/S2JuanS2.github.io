import React from 'react';
import Card from './Card';

function CardList({customClass, title, items, onDelete, type}){
    return(
        <div className="w-6/12">
            <h1 className={`${customClass} font-bold text-2xl border-t-2 border-l-2 border-r-2 w-40 pl-2 bg-blue-950 rounded-t-md`}>{title} {items.length}</h1>
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