import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-60 text-center">
          <p className="text-white">Disculpa las molestias</p>
          <p className="text-white">El sitio esta actualmente bajo mantenimiento</p>
          <div className="flex justify-center">
            <img src="/images/mantenimiento.png" alt="mant" className="mt-5"/>
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default Home;
