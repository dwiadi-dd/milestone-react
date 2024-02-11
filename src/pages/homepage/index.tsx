import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [userData] = useContext(UserDataContext);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-slate-100">
      <h1 className="text-4xl font-bold mb-4">
        <span className="font-['Orbitron']">{t("hero-text")}</span>
      </h1>
      <p className="text-lg text-gray-600"> {t("hero-greet")}</p>
      {userData ? (
        <p>
          hello {userData.fullname},{" "}
          <Link to={"/user"} className="font-semibold">
            profile
          </Link>
        </p>
      ) : (
        <p>
          <Link to={"/register"} className="font-semibold">
            {t("hero-link")}
          </Link>
        </p>
      )}
    </div>
  );
}
