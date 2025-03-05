import { useState } from "react";
import { login } from "../services/AuthService";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token); // Guardar token
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
        <div className="w-6/12 flex flex-col text-center">
            <h2 className="text-white font-bold">Login</h2>
            {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
        <form onSubmit={handleLogin} className="text-white">
            <div className="flex flex-col w-6/12 items-center border-2 p-4 space-y-2">
                <input className="border-1 p-1" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="border-1 p-1" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="cursor-pointer border-1 bg-white rounded-sm text-black w-15" type="submit">Login</button>
            </div>
        </form>
    </div>
  );
};

export default Login;