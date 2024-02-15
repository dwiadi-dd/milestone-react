import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = ({
  changeLanguage,
}: {
  changeLanguage: (value: string) => void;
}) => {
  const { isAuth } = useAuth();
  return (
    <nav className="flex px-10 pt-8 justify-between w-screen bg-white py-4 shadow-sm border-b-2 border-slate-300">
      <Link to={"/"}>
        <h1 className="font-theme text-2xl font-bold text-black ">digiWish</h1>
      </Link>
      <div className="flex items-center gap-5">
        <div className="font-semibold hover:opacity-80 flex gap-4">
          {isAuth() ? (
            <NavLink to={"/user"}>Dashboard</NavLink>
          ) : (
            <>
              <NavLink to={"/signin"}>Login</NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </>
          )}
        </div>
        <select
          className=" bg-zinc-100 rounded-xl w-20 px-4 py-2  cursor-pointer focus:outline-none"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">🇺🇸 EN</option>
          <option value="id">🇮🇩 ID</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
