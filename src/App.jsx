import {useState, useEffect} from "react";

import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Mobile from "./components/Mobile";
import Decision from "./components/Decision";

function App(){

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return() =>{
      window.removeEventListener("resize", handleResize);
    };
  },[]);

  if(isMobile){
    return(
      <div>
        <Mobile></Mobile>
      </div>
    );
  }else{
    return(
      <div>
        <Header></Header>
        <div className="ml-45 mr-45">
          <div className="flex">
            <Title></Title>
          </div>
          <Board></Board>
          <Decision></Decision>
        </div>
        <div className="mt-40">
          <Footer></Footer>
        </div>
      </div>
    );
  }

}

export default App;