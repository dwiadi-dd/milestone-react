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
    console.log("next");
    setStep((i) => {
      if (i >= stepList.length - 1) return i;
      return i + 1;
    });
  };

  const back = () => {
    console.log("back");

    setStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

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
      confirmPassword: "",
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
      username: Yup.string()
        .required("Username is required")
        .max(24, "Us can be maximum 24 characters"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          passwordRules,
          "password must contain at least min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit."
        )
        .max(24, "Password can be maximum 24 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Required"),
    }),

    onSubmit: (values) => {
      if (!isLastStep) return next();
      setRegisterData(values);
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
              className="form-registration mt-10 grid gap-1"
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
                      <div className="font-light text-red-600">
                        {formik.errors.fullname}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.email}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.dob}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.street}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.province}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.city}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.username}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
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
                      <div className="font-light text-red-600">
                        {formik.errors.password}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="label-input">
                      Confirm Password
                    </label>
                    <input
                      className="input-form"
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="font-light text-red-600">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : (
                      <div>{"\u00A0"}</div>
                    )}
                  </div>
                </>
              ) : (
                <div>{"\u00A0"}</div>
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
                {isLastStep ? (
                  <button className="next-button" type="submit">
                    Finish
                  </button>
                ) : (
                  <button className="next-button" type="button" onClick={next}>
                    Next
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
