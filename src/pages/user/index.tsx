import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import UserDataContext from "../../context/UserDataContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ListOfProvinsi } from "../../utils";

export default function Welcome() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userData] = useContext(UserDataContext);
  const removeData = () => {
    localStorage.removeItem("userdata");
    navigate("/");
  };
  const provinsi = ListOfProvinsi.find(
    (prov) => prov.value === userData?.province
  );
  return (
    <div className=" flex flex-col mx-auto  gap-4 justify-center min-h-screen justify-items-center bg-stone-100 px-20 ">
      {userData ? (
        <div className="flex gap-4 mt-8">
          <div className="bg-white rounded-xl p-8 w-1/4">
            <h1
              className="text-center text-2xl font-semibold tracking-widest font-theme"
              data-testid="greeting-user"
            >
              {t("user.greeting")} {userData.fullname}!
            </h1>
            <img
              src={avatar}
              className=" w-[200px] rounded-full mx-auto my-8"
              alt=""
            />
            <p className="font-light"></p>
            <div className="flex flex-col justify-center mx-auto gap-4 ">
              <div className="detail-group gap-4">
                <p className="capitalize text-xl font-light">
                  {t("user.name")}:
                </p>
                <p
                  className="text-xl font-semibold"
                  data-testid="test-fullname"
                >
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
                <p className="capitalize text-xl font-light">
                  {t("user.dob")}:
                </p>
                <p className="text-xl font-semibold" data-testid="test-dob">
                  {userData.dob}
                </p>
              </div>
              <div className="detail-group gap-4">
                <p className="capitalize text-xl font-light">
                  {t("user.address")}:
                </p>
                <p
                  className="text-xl font-semibold text-wrap"
                  data-testid="test-address"
                >
                  {userData.address}, <br />
                  {userData.city}, {provinsi?.provinsi},{"\n"}
                  {userData.zipcode}.
                </p>
              </div>
              <div className="flex justify-around items-center ">
                <Link to={"/register"}>
                  <button className="back-button">{t("edit")}</button>
                </Link>
                <button
                  className="next-button text-ellipsis"
                  type="button"
                  onClick={removeData}
                >
                  {t("user.clear")}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl w-3/4">
            <table className="w-full ">
              <tr className="border-2">
                <th className="border-2">No</th>
                <th className="border-2">Item name</th>
                <th className="border-2">Url</th>
                <th className="border-2">Estimated price</th>
                <th className="border-2">Status</th>
              </tr>
              <tr>
                <td className="border-2 p-2">1</td>
                <td className="border-2 p-2">Iphone 18</td>
                <td className="border-2 p-2">iBox</td>
                <td className="border-2 p-2">RP. 5.000.000</td>
                <td className="border-2 p-2">
                  <span className="p-2 bg-sky-200 rounded-lg">Pending</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
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
