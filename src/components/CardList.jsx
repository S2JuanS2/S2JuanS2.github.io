import React from 'react';
import Card from './Card';

function CardList({customClass, children, items}){
    return(
        <div className="w-6/12">
            <h1 className={`${customClass} font-bold text-2xl border-t-2 border-l-2 border-r-2 w-40 pl-5 bg-blue-950 rounded-t-md`}>{children}</h1>
            <div className={`${customClass} border-2 h-150 rounded-r-md rounded-b-md bg-blue-950`}>
                {items.map((item, index) => (
                    <Card key={index}>{item}</Card>
                ))}
            </div>
        </div>
    );
}

export default CardList;