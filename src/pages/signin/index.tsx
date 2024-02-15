import React, { useContext, useState } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Navigate, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { useAuth } from "../../hooks/useAuth";

const LoginPage: React.FC = () => {
  const userdb = JSON.parse(localStorage.getItem("userdb") as string);
  const [, setUserData] = useContext(UserDataContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  if (isAuth()) {
    return <Navigate to="/user" />;
  }
  const handleLogin = (data: { email: string; password: string }) => {
    const target = userdb?.find(
      (user: { email: string; password: string }) => user.email === data.email
    );
    if (target) {
      if (bcrypt.compareSync(data.password, target.password)) {
        setUserData(target);
        localStorage.setItem("userlogged", JSON.stringify(target));

        navigate("/user");
      } else {
        setError("invalid credentials");
      }
    } else {
      setError("invalid credentials");
    }
  };
  return (
    <div className="flex items-center justify-center h-[90vh] bg-stone-100">
      <div className="w-1/4 p-6 py-10 bg-white rounded-xl">
        <h2 className="text-4xl font-theme mb-6 text-center font-bold text-green-500">
          digiWish
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const obj = {
              email: formData.get("email")?.toString() ?? "",
              password: formData.get("password")?.toString() ?? "",
            };
            console.log(obj);
            handleLogin(obj);
          }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-form w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-form w-full"
            />
          </div>
          <div className="flex justify-evenly flex-row-reverse">
            <button type="submit" className="next-button float-right">
              Sign In
            </button>
            <button
              className="back-button"
              onClick={() => navigate("/register")}
            >
              register
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
