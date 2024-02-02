import { RegsiterDataTypeObject } from "../utils";
import avatar from "../assets/avatar.png";

export default function Welcome({ registerData }: RegsiterDataTypeObject) {
  const { fullname, email, dob, province, street, city, username } =
    registerData;

  return (
    <div className=" flex flex-col mx-auto">
      <h1 className="text-center text-4xl font-semibold tracking-widest">
        Welcome {username}!
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
          <p className="text-xl font-semibold">{fullname}</p>
        </div>
        <div className="detail-group gap-4">
          <p className="capitalize text-xl font-light">Email:</p>
          <p className="text-xl font-semibold">{email}</p>
        </div>{" "}
        <div className="detail-group gap-4">
          <p className="capitalize text-xl font-light">Date of Birth:</p>
          <p className="text-xl font-semibold">{dob}</p>
        </div>{" "}
        <div className="detail-group gap-4">
          <p className="capitalize text-xl font-light">Address:</p>
          <p className="text-xl font-semibold">
            {street}, {city}, {province}
          </p>
        </div>{" "}
        <button className="next-button w-[100px] my-4 mx-auto">Finalize</button>
      </div>
    </div>
  );
}
