import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import UserDataContext from "./context/UserDataContext";
import { RegsiterDataContextType } from "./utils.ts";

const Main = () => {
  const userData = useState(
    localStorage.getItem("userdata")
      ? (JSON.parse(
          localStorage.getItem("userdata")
        ) as RegsiterDataContextType)
      : (null as RegsiterDataContextType | null)
  );
  return (
    <React.StrictMode>
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
