import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.svg";
import UserDataContext from "../../context/UserDataContext";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ListOfProvinsi, rupiah } from "../../utils";
import WishForm from "./components/WishForm";

export default function Welcome() {
  // const navigate = useNavigate();
  const { t } = useTranslation();
  const [addData, setAddData] = useState(false);
  const [userData] = useContext(UserDataContext);
  useEffect(() => {}, [userData]);
  const removeData = () => {
    localStorage.removeItem("userlogged");

    window.location.href = "/";
  };
  const provinsi = ListOfProvinsi.find(
    (prov) => prov.value === userData?.province
  );
  return (
    <div className=" flex flex-col gap-4  h-screen  bg-stone-100 px-20 ">
      {userData ? (
        <div className="flex gap-4 mt-8">
          <div className="bg-white rounded-2xl p-8 w-1/4 border-2 border-black border-b-[14px] border-r-4">
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
                  className="text-base font-semibold text-wrap"
                  data-testid="test-address"
                >
                  {userData.address}, <br />
                  {userData.city}, {provinsi?.provinsi},{"\n"}
                  {userData.zipcode}.
                </p>
              </div>
              <div className="flex justify-around items-center ">
                <button
                  className="next-button text-ellipsis bg-red-600 hover:bg-red-900"
                  type="button"
                  onClick={removeData}
                >
                  {t("user.clear")}
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl overflow-scroll h-[75vh] w-3/4 border-2 border-black border-b-[14px] border-r-4">
            <button
              className="text-green-500 float-end font-semibold transition ease-in-out  hover:scale-[1.1] hover:text-green-400  font-theme  mb-10"
              type="button"
              onClick={() => setAddData(!addData)}
            >
              {!addData ? "+ add item" : "close form"}
            </button>
            <div className="flex">{addData && <WishForm />}</div>
            <table className="w-full   border-separate">
              <tr>
                <th className="p-4 border-2 bg-slate-200   border-r-4 border-b-8 border-black rounded-xl">
                  No
                </th>
                <th className="p-4 border-2 bg-slate-200   border-r-4 border-b-8 border-black rounded-xl">
                  Item name
                </th>
                <th className="p-4 border-2 bg-slate-200   border-r-4 border-b-8 border-black rounded-xl">
                  Url
                </th>
                <th className="p-4 border-2 bg-slate-200   border-r-4 border-b-8 border-black rounded-xl">
                  Estimated price
                </th>
                <th className="p-4 border-2 bg-slate-200   border-r-4 border-b-8 border-black rounded-xl">
                  Status
                </th>
              </tr>
              {userData.wishlist?.map((data, i) => (
                <tr>
                  <td className="p-4 font-bold text-center ">{i + 1}</td>
                  <td className="p-4 font-bold">{data.name}</td>
                  <td className="p-4 text-sky-400 font-semibold">
                    <a href={data.url}>url</a>
                  </td>
                  <td className="p-4 font-bold">{rupiah(data.price)}</td>
                  <td className="p-4 text-center  font-bold">{data.status}</td>
                </tr>
              ))}
              {userData.wishlist.length === 0 && <p>no data yet</p>}
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
