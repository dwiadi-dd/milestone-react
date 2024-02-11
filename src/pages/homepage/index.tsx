import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import { Link } from "react-router-dom";

export default function Home() {
  const [userData] = useContext(UserDataContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to our landing page!</h1>
      <p className="text-lg text-gray-600">Thank you for visiting.</p>
      {userData ? (
        <p>hello {userData.fullname}</p>
      ) : (
        <p>
          hello guest,{" "}
          <Link to={"/register"} className="font-semibold">
            register here
          </Link>
        </p>
      )}
    </div>
  );
}
