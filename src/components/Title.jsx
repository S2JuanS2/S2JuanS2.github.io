import { useState } from "react";

function Title(){

    const [title, setTitle] = useState("Decisión");

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const toggleEditing = () => {
        if(title.length == 0){
            setTitle("Titulo default");
        }
        setIsEditing(!isEditing);
    }

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="flex">
                {isEditing ? (
                    <input 
                        type="text"
                        value={title}
                        onChange={handleInputChange}
                        onBlur={toggleEditing}
                        maxLength={32}
                        className="text-white font-bold text-2xl mb-3 border-1"
                    />
                ) : (
                    <h1 className="text-white font-bold text-2xl mb-3">{title}</h1>
                )}
                <img 
                    src="/images/edit.png" 
                    alt="edit" 
                    className="cursor-pointer w-6 h-6 mt-1 ml-2 transition-transform duration-300 hover:scale-120"
                    onClick={toggleEditing}
                />
            </div>
            <img 
                src="/images/confused.png" 
                alt="confused" 
                className="shadow-lg mt-4"
            />
        </div>
    );
}

export default Title;