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
    <div className="login-page">
      <div className=" login-card">
        <h2 className="login-title">digiWish</h2>
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
              data-testid="email-test"
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
              data-testid="password-test"
              className="input-form w-full"
            />
          </div>
          <div className="flex justify-evenly flex-row-reverse">
            <button
              type="submit"
              className="next-button float-right"
              data-testid="login-test"
            >
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
