import { useState } from "react";
import { register } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

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
      localStorage.setItem("token", data.token); // Guardar token
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
      <div className="w-6/12 flex flex-col text-center">
        <h2 className="text-white font-bold">Register</h2>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      <form onSubmit={handleRegister} className="text-white">
        <div className="flex flex-col w-6/12 items-center border-2 p-4 space-y-2">
          <input
            className="border-1 p-1"
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
          <input
            className="border-1 p-1"
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <input
            className="border-1 p-1"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={userData.firstname}
            onChange={handleChange}
          />
          <input
            className="border-1 p-1"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={userData.lastname}
            onChange={handleChange}
          />
          <input
            className="border-1 p-1"
            type="text"
            placeholder="Country"
            name="country"
            value={userData.country}
            onChange={handleChange}
          />
          <button
            className="cursor-pointer border-1 bg-white rounded-sm text-black w-15"
            type="submit"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
