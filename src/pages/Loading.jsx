import TypewriterEffect from "../components/TypeWriterEffect";

function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-60 text-center">
          <div className="flex justify-center">
            <img src="/videos/conec-gif.gif" alt="mant" className="mt-5 mb-5 h-20 w-20"/>
          </div>
          <h2 className="text-white"><TypewriterEffect text={"API alojada en un servidor gratuito."} speed={50} delay={0}></TypewriterEffect></h2>
          <h2 className="text-white font-bold"><TypewriterEffect text={"Iniciando servidor..."} speed={3} delay={3}></TypewriterEffect></h2>
        </div>
      </div>
    </div>
  );
}

export default Loading;
