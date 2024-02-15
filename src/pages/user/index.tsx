import { Navigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataContext";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RegsiterDataType, WishItemType, rupiah } from "../../utils";
import WishForm from "./components/WishForm";
import { useAuth } from "../../hooks/useAuth";
import ProfileSection from "./components/ProfileSection";

const Welcome: React.FC = () => {
  const { t } = useTranslation();
  const [addData, setAddData] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useContext<any>(UserDataContext);
  const userdb = JSON.parse(localStorage.getItem("userdb") as string);

  useEffect(() => {
    const updatedDb = userdb.map((user: RegsiterDataType) =>
      user.username === userData?.username
        ? { ...user, wishlist: userData?.wishlist }
        : user
    );
    localStorage.setItem("userlogged", JSON.stringify(userData));
    localStorage.setItem("userdb", JSON.stringify(updatedDb));
  }, [userData]);

  const { isAuth } = useAuth();
  if (!isAuth()) {
    return <Navigate to="/" />;
  }

  const removeItem = (id: number) => {
    const newUserData = userData?.wishlist.filter(function (
      data: WishItemType
    ) {
      return data.id !== id;
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setUserData((prev: any) => ({
      ...prev,
      wishlist: newUserData,
    }));
  };

  return (
    <div className="user-page">
      <div className="main-user-page">
        <ProfileSection userData={userData} />
        <div className="dashboard-section">
          <button
            className="add-button"
            type="button"
            onClick={() => setAddData(!addData)}
          >
            {!addData ? t("add-wish") : t("close-wish")}
          </button>
          <div className="flex">{addData && <WishForm />}</div>
          <table className="w-full border-separate overflow-x-scroll">
            <tr>
              <th className="table-th">{t("th.no")}</th>
              <th className="table-th">{t("th.item")}</th>
              <th className="table-th">{t("th.url")}</th>
              <th className="table-th">{t("th.price")}</th>
              <th className="table-th">{t("th.action")}</th>
            </tr>
            {userData.wishlist?.map((data: WishItemType, i: number) => (
              <tr>
                <td className="p-4 font-bold text-center ">{i + 1}</td>
                <td className="p-4 font-bold">{data.name}</td>
                <td className="p-4  text-center font-extrabold font-theme hover:scale-[1.1]">
                  <a href={data.url}>url</a>
                </td>
                <td className="p-4 font-bold">{rupiah(data.price)}</td>
                <td className="p-4 text-center font-bold">
                  <button
                    className="remove-button"
                    onClick={() => removeItem(data.id)}
                  >
                    {t("remove")}
                  </button>
                </td>
              </tr>
            ))}
            {userData.wishlist.length === 0 && (
              <tr>
                <td className="p-8 font-extrabold text-center" colSpan={5}>
                  {t("no-data")}
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
