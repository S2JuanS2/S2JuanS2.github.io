import { useState } from "react";
import { register } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Footer from "../components/Footer";


const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await register(userData);
      Cookies.set("jwtAuth", data.token, { expires: 1/72 });
      navigate("/");
    } catch (err) {
      setError(err);
    } finally{
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <div className="mt-40 flex flex-col text-center">
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
        <form onSubmit={handleRegister} className="text-white">
          <div className="flex flex-col items-center border-1 p-4 ml-6 mr-6 mb-6 space-y-2 border-blue-800 rounded-2xl bg-blue-950">
            <h2 className="text-white font-bold">Registrarse</h2>
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="Usuario"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
              maxLength={20}
            />
            <input
              className="border-b-1 p-1"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
              maxLength={24}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="Nombre"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
              required
              maxLength={50}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="Apellido"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
              required
              maxLength={50}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="País"
              name="country"
              value={userData.country}
              onChange={handleChange}
              required
              maxLength={32}
            />
            { error ? (
                  <p className="text-red-500">{error}</p>
                ) : (
                  <p className="p-3"> </p>
                )}
            <button
              className="mt-4 pl-4 pr-4 cursor-pointer border-1 bg-blue-500 rounded-sm text-white border-blue"
              type="submit"
            >
            Registrarse
            </button>
            {loading && (
              <div className="flex justify-center mt-2">
                    <div className="w-6 h-6 border-4 border-t-white border-gray-500 rounded-full animate-spin"></div>
                  </div>
            )}
            <p className="mt-4">¿Ya tienes cuenta? <a href="/#/login" className="text-sm underline underline-offset-2 mt-2">Inicia sesión</a></p>
          </div>
        </form>
        <div className="mt-auto">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Register;
