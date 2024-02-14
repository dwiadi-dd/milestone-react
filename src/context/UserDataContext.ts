import { createContext } from "react";
import { RegsiterDataContextType } from "../utils";

const UserDataContext = createContext<
  [
    RegsiterDataContextType | null,
    (userData: RegsiterDataContextType | null) => void
  ]
>([
  {
    fullname: " ",
    email: "",
    dob: "",
    address: "",
    zipcode: "",
    city: "",
    province: "",
    username: "",
    password: "",
    wishlist: [],
  },
  () => {},
]);

export default UserDataContext;
