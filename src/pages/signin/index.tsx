import React, { useContext, useState } from "react";
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const LoginPage: React.FC = () => {
  const [, setUserData] = useContext(UserDataContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userdb = JSON.parse(localStorage.getItem("userdb"));

  const handleLogin = (data) => {
    const target = userdb?.find((user) => user.email === data.email);
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
    console.log(data);
    console.log(target);
    // navigate("/user");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-stone-100">
      <div className="w-1/4 p-6 py-14 bg-white rounded-xl">
        <h2 className="text-4xl font-theme mb-6 text-center font-bold text-amber-500">
          digiWish
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              email: formData.get("email") ?? "",
              password: formData.get("password") ?? "",
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
              className="w-full p-2 border border-gray-300 rounded-xl border-b-4 border-black outline-none"
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
              className="w-full p-2 border border-gray-300 rounded-xl border-b-4 border-black outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-amber-500 text-white font-bold rounded hover:bg-amber-600"
          >
            Sign In
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
