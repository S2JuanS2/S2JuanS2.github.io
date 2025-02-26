import { useState } from "react";
import Nav from "./Nav";

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
        <div className="flex flex-col items mt-35">
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
            <div className="flex">
                <img 
                    src="/images/toma-de-decisiones.png" 
                    alt="confused" 
                    className="shadow-lg mt-2 ml-2 h-20 w-20 mb-4"
                />
                <Nav></Nav>
            </div>
        </div>
    );
}

export default Title;