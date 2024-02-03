import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.tsx";
import UserDataContext from "./context/UserDataContext.tsx";
import { RegsiterDataType } from "./utils.ts";

const Main = () => {
  const userData = useState(null as RegsiterDataType | null);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserDataContext.Provider value={userData}>
          <Routes>
            <Route path="/" element={<App />} />
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
