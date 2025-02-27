import Footer from "../components/Footer";

function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-60 text-center">
          <div className="flex justify-center">
            <img src="/videos/conec-gif.gif" alt="mant" className="mt-5 h-20 w-20"/>
          </div>
          <p className="text-white font-bold">Cargando...</p>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default Loading;
