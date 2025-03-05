import { useState } from "react";
import { register } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Footer from "../components/Footer";


const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    country: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await register(userData);
      Cookies.set("jwtAuth", data.token, { expires: 1/72 });
      navigate("/");
    } catch (err) {
      setError(err);
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
            />
            <input
              className="border-b-1 p-1"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="Nombre"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="Apellido"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
            <input
              className="border-b-1 p-1"
              type="text"
              placeholder="País"
              name="country"
              value={userData.country}
              onChange={handleChange}
            />
            <button
              className="mt-4 pl-4 pr-4 cursor-pointer border-1 bg-blue-500 rounded-sm text-white border-blue"
              type="submit"
            >
              Registrarse
            </button>
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
