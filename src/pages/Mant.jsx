function Mant() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow justify-center items-center">
        <div className="pt-10 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-60 text-center">
          <div className="flex justify-center">
            <img src="/images/mantenimiento.png" alt="mant" className="mt-5"/>
          </div>
          <p className="text-white">Disculpa las molestias.</p>
          <p className="text-white">El sitio esta actualmente bajo mantenimiento.</p>
        </div>
      </div>
    </div>
  );
}

export default Mant;
