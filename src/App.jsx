import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Title from "./components/Title";

function App(){
  return(
    <div>
      <Header></Header>
      <Nav></Nav>
      <Title></Title>
      <Board></Board>
      <Footer></Footer>
    </div>
  );
}

export default App;