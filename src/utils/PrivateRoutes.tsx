import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { isAuth }: boolean = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
