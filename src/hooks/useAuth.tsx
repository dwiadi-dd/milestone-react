import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";

export const useAuth = () => {
  const [userData] = useContext(UserDataContext);
  const isAuth = () => {
    if (!userData) return false;
    if (userData?.fullname !== "") {
      return true;
    }
    return false;
  };

  return { isAuth };
};
