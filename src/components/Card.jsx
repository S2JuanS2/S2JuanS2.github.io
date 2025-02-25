import React from 'react';

function Card({children}){
    return(
        <div className="flex justify-center mt-5">
            <div className="flex justify-between border-2 rounded-sm w-11/12 h-10 text-blue-400 items-center">
                <p className='pl-3 text-white font-mono'>{children}</p>
                {/*
                <p className="text-white font-bold">7</p>
                */}
                <img src={`${process.env.PUBLIC_URL}/images/delete.png`} alt="delete" className="w-6 h-6 mr-3 cursor-pointer transition-transform duration-300 hover:scale-120"/>
            </div>
        </div>
    )
}

export default Card;