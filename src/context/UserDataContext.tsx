import { createContext } from "react";
import { RegsiterDataType } from "../utils";

const UserDataContext = createContext<
  [RegsiterDataType | null, (registerData: RegsiterDataType) => void]
>([
  {
    fullname: "",
    email: "",
    dob: "2004-01-01",
    street: "",
    city: "",
    province: "banten",
    username: "",
    password: "",
  },
  () => {},
]);

export default UserDataContext;
