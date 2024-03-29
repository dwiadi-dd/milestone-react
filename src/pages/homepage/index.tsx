import React, { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const [userData] = useContext(UserDataContext);
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <h1 className="text-4xl font-bold mb-4">
        <span className="font-theme">{t("hero-text")}</span>
      </h1>
      <p className="text-lg text-gray-600"> {t("hero-greet")}</p>
      {userData ? (
        <p>
          {t("user.greeting")}
          <Link to={"/user"} className="font-semibold">
            {userData.fullname}{" "}
          </Link>
        </p>
      ) : (
        <div className="flex">
          <p>
            <Link to={"/signin"} className="font-semibold">
              signin
            </Link>
          </p>{" "}
          /{" "}
          <p>
            <Link to={"/register"} className="font-semibold">
              {t("hero-link")}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
