import TypewriterEffect from "../components/TypeWriterEffect";

function Mant() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-60 text-center">
          <div className="flex justify-center">
            <img src="/images/mantenimiento.png" alt="mant" className="mt-5 mb-5"/>
          </div>
          <p className="text-white"><TypewriterEffect text={"Disculpa las molestias."} speed={50} delay={0}></TypewriterEffect></p>
          <p className="text-white"><TypewriterEffect text={"El sitio esta actualmente bajo mantenimiento."} speed={50} delay={2}></TypewriterEffect></p>
        </div>
      </div>
    </div>
  );
}

export default Mant;
