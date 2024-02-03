import avatar from "../assets/avatar.png";
import UserDataContext from "../context/UserDataContext";
import { useContext } from "react";

export default function Welcome() {
  const [userData] = useContext(UserDataContext);

  return (
    <div className=" flex flex-col mx-auto">
      <h1>hallo ges</h1>
      {JSON.stringify(userData)}
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
          <div className="flex flex-col justify-center mx-auto gap-4">
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
                {userData.street}, {userData.city}, {userData.province}
              </p>
            </div>
            <button className="next-button w-[100px] my-4 mx-auto">
              Finalize
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1>no user data </h1>
        </div>
      )}
    </div>
  );
}
