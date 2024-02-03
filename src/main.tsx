import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import UserDataContext from "./context/UserDataContext";
import { RegsiterDataContextType } from "./utils.ts";
import "./locales/locales.ts";
import { useTranslation } from "react-i18next";

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
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="id">Indonesia</option>
      </select>
      <BrowserRouter>
        <UserDataContext.Provider value={userData}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user" element={<Welcome />} />
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
