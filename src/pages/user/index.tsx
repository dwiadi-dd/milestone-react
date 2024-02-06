import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
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
          <h1 className="text-center text-4xl font-semibold tracking-widest">
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
              <p className="capitalize text-xl font-light">Name:</p>
              <p className="text-xl font-semibold">{userData.fullname}</p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">Email:</p>
              <p className="text-xl font-semibold">{userData.email}</p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">Date of Birth:</p>
              <p className="text-xl font-semibold">{userData.dob}</p>
            </div>
            <div className="detail-group gap-4">
              <p className="capitalize text-xl font-light">Address:</p>
              <p className="text-xl font-semibold">
                {userData.address}, {userData.city}, {userData.province}
              </p>
            </div>
            <div className="justify-evenly flex border-2 border-sky-400">
              <Link to={"/"}>
                <button className="next-button">Back</button>
              </Link>
              <button
                className="next-button"
                type="button"
                onClick={removeData}
              >
                clear data
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
