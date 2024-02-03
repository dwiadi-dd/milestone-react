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
    street: "",
    city: "",
    province: "",
    username: "",
    password: "",
  },
  () => {},
]);

export default UserDataContext;
