import Footer from "../components/Footer";
import Header from "../components/Header";

function Home (){
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center">
                <div className="pt-8 border-4 border-blue-900 bg-blue-950 rounded-2xl w-10/12 h-80 text-center">
                    <h1 className="text-white font-bold underline underline-offset-2">Bienvenido a Thinks & Pick!</h1>
                    <p className="text-white">El sitio actualmente se encuentra en desarrollo.</p>
                    <p className="text-white">La API se encuentra alojada en un servidor gratuito.</p>
                    <h2 className="text-white font-bold underline underline-offset-2 mt-5">Leyenda</h2>
                    <div className="flex flex-col justify-center ml-20 mt-4 space-y-2">
                        <div className="flex">
                            <img src="/images/info.png" alt="info" className="w-6 h-6"/>
                            <p className="text-white ml-2">Ayuda.</p>
                        </div>
                        <div className="flex">
                            <img src="/images/user-img.png" alt="user" className="w-6 h-6"/>
                            <p className="text-white ml-2">Link al perfil del creador.</p>
                        </div>
                    </div>
                <div className="mt-9">
                    <a href="/#/thinks-pick" className="text-white border-2 border-cyan-500 font-bold p-1 rounded-lg bg-cyan-500 hover:border-blue-300 hover:text-blue-950 transition-colors duration-300">EMPEZAR</a>
                </div>
                </div>
            </div>
            <Footer className="mt-auto" />
        </div>
      );
}

export default Home;