function Mobile() {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <video width="640" height="360" controls autoPlay muted loop className="mb-5">
        <source src="videos/rick.mp4" type="video/mp4"></source>
        Tu navegador no soporta la etiqueta de video.
        </video>
        <h3 className="text-white">Página no disponible para dispositivos móviles</h3>
        <img src="/images/error-img.png" alt="Error" className="mt-5"/>
      </div>
    );
  }
  
  export default Mobile;
  