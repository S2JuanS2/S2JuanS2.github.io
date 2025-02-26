import React from 'react';

function Button({title}){

    const messageAlert = () => {
        alert("Not implemented")
    }

    return (
        <>
            <button className="border-2 rounded-3xl pl-4 pr-4 border-blue-600 bg-blue-700 text-white font-bold font-sans w-fit cursor-pointer hover:border-b-blue-50 transition-colors duration-300"
                    onClick={messageAlert}
            >
                {title}
            </button>
        </>
    );
}

export default Button;