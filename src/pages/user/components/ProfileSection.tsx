import { useTranslation } from "react-i18next";
import { ListOfProvinsi, RegsiterDataType } from "../../../utils";
import avatar from "../../../assets/avatar.svg";

const ProfileSection = ({ userData }: { userData: RegsiterDataType }) => {
  const { t } = useTranslation();

  const removeData = () => {
    localStorage.removeItem("userlogged");

    window.location.href = "/";
  };
  const provinsi = ListOfProvinsi.find(
    (prov) => prov.value === userData?.province
  );

  return (
    <div className="profile-section">
      <h1 className="greeting-title" data-testid="greeting-user">
        {t("user.greeting")} {userData.fullname}!
      </h1>
      <img src={avatar} loading="lazy" className="avatar-img" alt="avatar" />
      <div className="bio-section">
        <div className="detail-group gap-4">
          <h2 className="bio-title">{t("user.name")}:</h2>
          <p className="text-xl font-semibold" data-testid="test-fullname">
            {userData.fullname}
          </p>
        </div>
        <div className="detail-group gap-4">
          <h2 className="bio-title">{t("user.email")}:</h2>
          <p className="text-xl font-semibold" data-testid="test-email">
            {userData.email}
          </p>
        </div>
        <div className="detail-group gap-4">
          <h2 className="bio-title">{t("user.dob")}:</h2>
          <p className="text-xl font-semibold" data-testid="test-dob">
            {userData.dob}
          </p>
        </div>
        <div className="detail-group gap-4">
          <h2 className="bio-title">{t("user.address")}:</h2>
          <p
            className="text-base font-semibold text-wrap"
            data-testid="test-address"
          >
            {userData.address}, <br />
            {userData.city}, {provinsi?.provinsi}, {userData.zipcode}.
          </p>
        </div>
        <div className="flex justify-around items-center ">
          <button
            className="next-button text-ellipsis bg-red-600 hover:bg-red-900"
            type="button"
            data-testid="logout-button"
            onClick={removeData}
          >
            {t("user.clear")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
