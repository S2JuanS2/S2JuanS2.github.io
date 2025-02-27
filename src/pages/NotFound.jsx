import Footer from "../components/Footer";
import Header from "../components/Header";

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-80 text-center">
          <h1 className="text-white">Página no encontrada</h1>
          <p className="text-white">Lo siento, la página solicitada no existe.</p>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default NotFound;
