import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import UserDataContext from "../../context/UserDataContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userData] = useContext(UserDataContext);
  const removeData = () => {
    localStorage.removeItem("userdata");
    navigate("/");
  };

  return (
    <div className=" flex flex-col mx-auto gap-4 justify-center min-h-screen justify-items-center">
      {userData ? (
        <>
          <h1
            className="text-center text-4xl font-semibold tracking-widest"
            data-testid="greeting-user"
          >
            Welcome {userData.username}!
          </h1>
          <img
            src={avatar}
            className=" w-[200px] rounded-full mx-auto my-8"
            alt=""
          />
          <p className="font-light"></p>
          <div className="flex flex-col justify-center mx-auto gap-4 w-[1000px]">
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">{t("user.name")}:</p>
              <p className="text-xl font-semibold" data-testid="test-fullname">
                {userData.fullname}
              </p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">
                {t("user.email")}:
              </p>
              <p className="text-xl font-semibold" data-testid="test-email">
                {userData.email}
              </p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">{t("user.dob")}:</p>
              <p className="text-xl font-semibold" data-testid="test-dob">
                {userData.dob}
              </p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">
                {t("user.address")}:
              </p>
              <p className="text-xl font-semibold" data-testid="test-address">
                {userData.address}, {userData.city}, {userData.province}, {""}
                {userData.zipcode}. {userData.password}
              </p>
            </div>
            <div className="justify-evenly flex ">
              {/* <Link to={"/"}>
                <button className="next-button">{t("user.back")}</button>
              </Link> */}
              <button
                className="next-button text-ellipsis"
                type="button"
                onClick={removeData}
              >
                {t("user.clear")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col mx-auto justify-items-center ">
          <h1 className="text-xl font-light">
            {t(`register`)}{" "}
            <Link to={"/"} className="font-semibold hover:opacity-40">
              {t(`registerLink`)}
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
}
