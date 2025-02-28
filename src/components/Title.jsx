import { useState } from "react";
import Nav from "./Nav";

function Title(){

    const [title, setTitle] = useState("Encabezado de decisión");
    const [isEditing, setIsEditing] = useState(false);
    const [showExamples, setShowExamples] =useState(false);
    const [imageSrc, setImageSrc] = useState("/images/edit.png");

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const toggleEditing = () => {
        if(imageSrc === "/images/edit.png"){
            setImageSrc("/images/save.png");
        }else{
            setImageSrc("/images/edit.png");
        }
        if(title.length == 0){
            setTitle("Titulo default");
        }
        setIsEditing(!isEditing);
    }

    const handleExampleClick = (exampleTitle) => {
        setTitle(exampleTitle);
    }

    const exampleTitles = ["Debería comprarme un ", "Debería comer la ", "Debería ayudar a "];

    return (
        <div className="flex flex-col items mt-35">
            <div className={`flex ${isEditing ? "relative" : ""}`}>
                {isEditing ? (
                    <input 
                        type="text"
                        value={title}
                        onChange={handleInputChange}
                        maxLength={32}
                        className="text-white font-bold text-2xl mb-3 border-1"
                        onFocus={() => setShowExamples(true)}
                    />
                ) : (
                    <h1 className="text-white font-bold text-2xl mb-3">{title}</h1>
                )}
                <img 
                    src={imageSrc}
                    alt="edit" 
                    className="cursor-pointer w-6 h-6 mt-1 ml-3 transition-transform duration-300 hover:scale-120"
                    onClick={toggleEditing}
                />
                {showExamples && isEditing && (
                    <div className="absolute top-10 left-0 mt-1 w-full bg-gray-800 text-white rounded-md shadow-lg">
                        <ul>
                            {exampleTitles.map((exampleTitle, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                                    onClick={() => handleExampleClick(exampleTitle)}
                                    >
                                    {exampleTitle}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
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