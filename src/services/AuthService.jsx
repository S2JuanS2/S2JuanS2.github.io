import axios from "axios";

const API_URL = "https://thinks-pick-server.onrender.com/auth"; // Cambia esto según el backend

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // Devuelve el token
  } catch (error) {
    throw error.response?.data?.message || "Error al iniciar sesión";
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // Devuelve el token
  } catch (error) {
    throw error.response?.data?.message || "Error al registrar usuario";
  }
};
