import React, {useEffect, useState} from "react";

function NumberInput({ value = 0, onChange, maxCount}){

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(value ?? 0);
    }, [value]);

    const increment = () => {
        if(count+1 <= maxCount){
            setCount(count + 1);
            onChange(count + 1);
        }
    };

    const decrement = () => {
        if(count-1 >= 0){
            setCount(count - 1);
            onChange(count - 1);
        }
    };

    return(
        <div className="flex justify-center">
            <button className="text-white bg-gray-700 border-gray-800 focus:outline-none w-6 h-7 cursor-pointer rounded-l-md font-bold border-1 hover:border-gray-400 transition-colors duration-300" onClick={decrement}>-</button>
            <input type="text" className="text-white text-center border border-gray-400 w-8 h-7 font-bold bg-blue-800" value={count} readOnly/>
            <button className="text-white bg-gray-700 border-gray-800 focus:outline-none w-6 h-7 cursor-pointer rounded-r-md font-bold border-1 hover:border-gray-400 transition-colors duration-300" onClick={increment}>+</button>
        </div>
    )
}

export default NumberInput