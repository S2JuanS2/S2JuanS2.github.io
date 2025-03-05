import { useState, useEffect} from "react";
import axios from "axios";

function Header(){
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [userName, setUserName] = useState("");

    axios.get("http://localhost:8080/api/v1/demo", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => setUserName(response.data))
      .catch(error => console.error("Error:", error));
    

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
    
        return() =>{
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return(
        <div className="fixed w-full">
            <div className="flex justify-between pb-5 bg-blue-900">
                <div className={`mt-5 ${isMobile ? "ml-5" : "ml-45"}`}>
                    <div className="flex flex-row">
                        <a href="/#">
                            <img src="/images/logo.png" alt="home" className="w-40 h-18 scale-120 transition-transform duration-300 hover:scale-140 cursor-pointer"/>
                        </a>
                    </div>
                </div>
                <div className={`flex justify-end mt-5 ${isMobile ? "mr-5" : "mr-45"}`}>
                    <div className="flex flex-col items-center">
                        <a href="/#/thinks-pick/about">
                            <img src="/images/info.png" alt="config"  className="w-7 h-7 mr-2 transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://github.com/S2JuanS2">
                            <img src="/images/user-img.png" alt="user" className="w-12 h-12  transition-transform duration-300 hover:scale-120 cursor-pointer"/>
                        </a>
                        <p className="font-bold text-blue-400 pt-1 text-sm">{userName}</p>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-blue-950"/>
        </div>
    );
}

export default Header;