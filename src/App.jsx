import {useState, useEffect} from "react";

import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import Mobile from "./components/Mobile";
import Decision from "./components/Decision";
import ServerStatus from "./components/ServerStatus";

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
        <div>
        <Header classMobileL="ml-5" classMobileR="mr-5"></Header>
        <div className="ml-5 mr-5">
          <div className="flex">
            <Title></Title>
          </div>
          <Board></Board>
          <Decision></Decision>
          <ServerStatus></ServerStatus>
        </div>
        <div className="mt-10">
          <Footer></Footer>
        </div>
      </div>
      </div>
    );
  }else{
    return(
      <div>
        <Header classMobileL="ml-45" classMobileR="mr-45"></Header>
        <div className="ml-45 mr-45">
          <div className="flex">
            <Title></Title>
          </div>
          <Board></Board>
          <Decision></Decision>
          <ServerStatus></ServerStatus>
        </div>
        <div className="mt-10">
          <Footer></Footer>
        </div>
      </div>
    );
  }

}

export default App;