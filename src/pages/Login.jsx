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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(username, password);
      Cookies.set("jwtAuth", data.token, { expires: 1/72 });
      navigate("/");
    } catch (err) {
      setError(err);
    } finally{
      setPassword("");
      setLoading(false);
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
                  <p className="text-red-500">{error}</p>
                ) : (
                  <p className="p-3"> </p>
                )}
                <button className="mb-4 pl-4 pr-4 cursor-pointer border-1 bg-blue-500 rounded-sm text-white border-blue" type="submit">Ingresar</button>
                {loading && (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-4 border-t-white border-gray-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <p>¿No tienes cuenta en Thinks & Pick? <a href="/#/register" className="text-sm underline underline-offset-2">Regístrate</a></p>
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