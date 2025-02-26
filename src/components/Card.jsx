import React from 'react';

function Card({children, onDelete}){
    return(
        <div className="flex justify-center mt-5">
            <div className="flex justify-between border-2 rounded-l-xl w-11/12 min-h-8 text-blue-400 items-center bg-gray-800">
                <p className='p-1 pl-3 text-white font-mono overflow-auto break-words'>{children}</p>
                <img 
                    src="/images/delete.png" 
                    alt="delete" 
                    className="w-6 h-6 mr-3 ml-2 cursor-pointer transition-transform duration-300 hover:scale-120"
                    onClick={onDelete}
                />
            </div>
            <div>
            </div>
        </div>
    )
}

export default Card;