import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const token = Cookies.get("jwtAuth")
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
