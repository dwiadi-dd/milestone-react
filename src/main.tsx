import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import RegisterPge from "./pages/register/index.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/user/index.tsx";
import UserDataContext from "./context/UserDataContext";
import { RegsiterDataContextType } from "./utils.ts";
import "./locales/locales.ts";
import { useTranslation } from "react-i18next";
import Home from "./pages/homepage/index.tsx";
import Navbar from "./components/Navbar.tsx";

const Main = () => {
  const { i18n } = useTranslation();
  const userData = useState(
    localStorage.getItem("userdata")
      ? JSON.parse(localStorage.getItem("userdata") as string)
      : (null as RegsiterDataContextType | null)
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserDataContext.Provider value={userData}>
          <Navbar changeLanguage={changeLanguage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPge />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </UserDataContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("no container to render to");
}

const root = ReactDOM.createRoot(container);
root.render(<Main />);
