import { useState } from "react";
import logo from "./assets/FA_DIGICAMP_LOGO_WHITE.png";
import {
  RegsiterDataType,
  stepList,
  ListOfCity,
  ListOfProvinsi,
} from "./utils";
import Welcome from "./components/Welcome";
import Stepper from "./components/Stepper";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const [step, setStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [valid, setValid] = useState("");

  const [registerData, setRegisterData] = useState<RegsiterDataType>({
    fullname: "",
    email: "",
    dob: "2004-01-01",
    street: "",
    city: "",
    province: "banten",
    username: "",
    password: "",
  });

  const isFirstStep = step === 0;
  const isLastStep = step === stepList.length - 1;

  const next = () => {
    setStep((i) => {
      if (i >= stepList.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    setStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!isLastStep) return next();
  //   if (isLastStep && valid.length >= 1) return;
  //   setIsSuccess(true);
  // };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      dob: "2004-01-01",
      street: "",
      city: "",
      province: "banten",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Fullname is required")
        .min(4, "Fullname must be at least 4 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      dob: Yup.date().required("Date of birth is required"),
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      province: Yup.string().required("Province is required"),
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
          "password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
    }),

    onSubmit: (values) => {
      if (!isLastStep) return next();
      setRegisterData(values);
      alert(JSON.stringify(registerData, null, 2));
      setIsSuccess(true);
    },
  });

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="bg-slate-700 w-full lg:w-1/3 text-white shadow-2xl flex flex-col">
        <header>
          <img
            src={logo}
            alt="logo digicamp"
            className="lg:w-[200px] w-[10em] pt-4 pl-4"
          />
        </header>
        {isSuccess ? (
          <p className="mx-auto stepper-desc text-2xl font-semibold lg:pt-48 pt-8 h-[4em]">
            Registration Complete
          </p>
        ) : (
          <Stepper step={step} stepList={stepList} />
        )}
      </div>
      <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
        {isSuccess ? (
          <>
            <Welcome registerData={registerData} />
          </>
        ) : (
          <div className="step-form">
            <h1 className="form-title ">{stepList[step].title}</h1>
            <h3 className="form-desc">{stepList[step].desc}</h3>
            <form
              className="form-registration mt-10 grid gap-8"
              onSubmit={formik.handleSubmit}
            >
              {step === 0 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="fullname" className="label-input">
                      Full Name
                    </label>
                    <input
                      className="input-form"
                      type="text"
                      id="fullanme"
                      name="fullname"
                      value={formik.values.fullname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                      <div>{formik.errors.fullname}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="label-input">
                      Email
                    </label>
                    <input
                      className="input-form"
                      type="email"
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="dob" className="label-input">
                      Date of Birth
                    </label>
                    <input
                      className="input-form"
                      type="date"
                      id="dob"
                      name="dob"
                      value={formik.values.dob}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      max="2006-01-01"
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                      <div>{formik.errors.dob}</div>
                    ) : null}
                    <p className="text-red-400">{"\u00A0"}</p>
                  </div>
                </>
              ) : step === 1 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="street" className="label-input">
                      street address
                    </label>
                    <input
                      className="input-form"
                      type="text"
                      id="street"
                      name="street"
                      value={formik.values.street}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.street && formik.errors.street ? (
                      <div>{formik.errors.street}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="province" className="label-input">
                      province
                    </label>
                    <select
                      className="input-form"
                      id="province"
                      name="province"
                      value={formik.values.province}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    >
                      {ListOfProvinsi.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.provinsi}
                        </option>
                      ))}
                    </select>
                    {formik.touched.province && formik.errors.province ? (
                      <div>{formik.errors.province}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="city" className="label-input">
                      City
                    </label>
                    <select
                      className="input-form"
                      id="city"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    >
                      {ListOfCity[formik.values.province]?.map((option) => (
                        <option value={option.kota}>{option.kota}</option>
                      ))}
                    </select>
                    <p className="text-red-400">{"\u00A0"}</p>
                    {formik.touched.city && formik.errors.city ? (
                      <div>{formik.errors.city}</div>
                    ) : null}
                  </div>
                </>
              ) : step === 2 ? (
                <>
                  <div className="form-group ">
                    <label htmlFor="username" className="label-input">
                      username
                    </label>
                    <input
                      className="input-form"
                      type="text"
                      id="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <div>{formik.errors.username}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="label-input">
                      password
                    </label>
                    <input
                      className="input-form"
                      type="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="reenter" className="label-input">
                      reenter password
                    </label>
                    <input
                      className="input-form"
                      type="password"
                      id="reenter"
                      name="reenter"
                      onBlur={(e) => {
                        e.target.value !== registerData.password
                          ? setValid("pass not valid")
                          : setValid("");
                      }}
                    />
                    <p className="text-red-400">
                      {valid.length >= 1 ? valid : "\u00A0"}
                    </p>
                  </div>
                </>
              ) : (
                <p>-</p>
              )}
              <div className="button-form-group ">
                <button
                  className="back-button"
                  onClick={back}
                  type="button"
                  disabled={isFirstStep}
                >
                  back
                </button>

                <button className="next-button" type="submit">
                  {isLastStep ? "Finish" : "Next"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
