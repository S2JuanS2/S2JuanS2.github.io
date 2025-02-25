import React, {useState} from "react";

function NumberInput(){

    const [count, setCount] = useState(0);

    const increment = () => {
        if(count+1 <= 10){
            setCount(count +1);
        }
    };

    const decrement = () => {
        if(count-1 >= 0){
            setCount(count -1);
        }
    };

    return(
        <div className="flex justify-center mt-2 mb-2">
            <button className="text-white bg-red-500 focus:outline-none w-5 cursor-pointer rounded-l-md font-bold" onClick={decrement}>-</button>
            <input type="text" className="text-white text-center border border-gray-400 w-8 font-bold" value={count} readOnly/>
            <button className="text-white bg-green-500 focus:outline-none w-5 cursor-pointer rounded-r-md font-bold" onClick={increment}>+</button>
        </div>
    )
}

export default NumberInput