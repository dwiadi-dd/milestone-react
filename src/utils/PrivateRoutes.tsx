import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const isAuth = useAuth(); // Fix: Remove the destructuring and assign the value directly
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
