import Button from "./components/Button/button";
import Navbar from "./components/Navbar/Navbar";

function saludar(){
  alert("Hola!");
}

function App(){
  return(
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mt-[80px]">
        <div className="flex items-center justify-center w-screen flex-col">
          
          <p className="text-blue-600">Tittle</p>
          <Button onClick={saludar}>a</Button>
          <Button className="bg-red-500">b</Button>
        </div>
      </main>
    </>
  )
}
export default App;