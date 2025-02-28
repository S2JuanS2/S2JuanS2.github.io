import React from 'react';

function Card({children, colorClass, onDelete}){
    return(
        <div className="flex justify-center mt-2">
            <div className={`flex justify-between w-full min-h-8 text-blue-400 items-center ${colorClass} bg-blue-900`}>
                <p className='p-1 pl-3 text-white font-mono overflow-auto break-all text-sm'>{children.text}</p>
                <div className='flex items-center space-x-1 min-w-[80px] justify-end'>
                    <p className='mr-0'>{children.weight}.</p>
                    <p>{children.impact}</p>
                    <img 
                        src="/images/borrar.png" 
                        alt="delete" 
                        className="w-6 h-6 mr-3 ml-2 cursor-pointer transition-transform duration-300 hover:scale-120"
                        onClick={onDelete}
                    />
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Card;