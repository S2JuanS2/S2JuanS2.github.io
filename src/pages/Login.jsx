import { useState } from "react";
import { login } from "../services/AuthService";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      Cookies.set("jwtAuth", data.token, { expires: 1/72 });
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <div className="flex flex-col text-center">
        </div>
        <form onSubmit={handleLogin} className="text-white">
            <div className="mt-40 flex flex-col m-6 items-center border-1 border-blue-800 rounded-2xl bg-blue-950 p-4 space-y-2">
                <h2 className="text-white font-bold mb-5">iniciar sesión</h2>
                <input 
                  className="border-b-1 p-1" 
                  type="text" 
                  placeholder="Usuario" 
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                  className="border-b-1 p-1" 
                  type="password" 
                  placeholder="Contraseña"
                  required
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                />
              { error ? (
                  <p className="text-red-500">Error al iniciar sesión</p>
                ) : (
                  <p className="p-3"> </p>
                )}
                <a href="/#/register" className="text-sm underline underline-offset-2">Registrarse</a>
                <button className="mt-4 pl-4 pr-4 cursor-pointer border-1 bg-blue-500 rounded-sm text-white border-blue" type="submit">Ingresar</button>
            </div>
        </form>
        <div className="mt-auto">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Login;