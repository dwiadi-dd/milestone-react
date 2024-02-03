import { createContext } from "react";
import { RegsiterDataContextType } from "../utils";

const UserDataContext = createContext<
  [
    RegsiterDataContextType | null,
    (registerData: RegsiterDataContextType) => void
  ]
>([
  {
    fullname: "a",
    email: "a",
    dob: "2004-01-01",
    street: "a",
    city: "a",
    province: "banten",
    username: "a",
    password: "a",
  },
  () => {},
]);

export default UserDataContext;
