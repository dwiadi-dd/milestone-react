import { Link } from "react-router-dom";

const Navbar = ({
  changeLanguage,
}: {
  changeLanguage: (value: string) => void;
}) => {
  return (
    <nav className="flex px-10 absolute pt-8  justify-between w-screen bg-white py-4 shadow-sm">
      <Link to={"/"}>
        <h1 className="font-theme text-2xl font-bold text-amber-600 ">
          digiWish
        </h1>
      </Link>
      <div>
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
