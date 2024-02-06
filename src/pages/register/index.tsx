import { useContext, useState } from "react";
import logo from "../../assets/FA_DIGICAMP_LOGO_WHITE.png";
import { ListOfCity, ListOfProvinsi } from "../../utils";
import Stepper from "../../components/Stepper";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [, setUserData] = useContext(UserDataContext);
  const { t } = useTranslation();
  const stepList = t("stepList", { returnObjects: true }) as [];

  const isFirstStep = step === 0;
  const isLastStep = step === 2;

  const validateStep = (step: number) => {
    if (step === 0) {
      if (formik.errors.fullname || formik.errors.email || formik.errors.dob)
        return false;
      return true;
    }
    if (step === 1) {
      if (
        formik.errors.address ||
        formik.errors.zipcode ||
        formik.errors.city ||
        formik.errors.province
      )
        return false;
      return true;
    }
    if (step === 2) {
      if (
        formik.errors.username ||
        formik.errors.password ||
        formik.errors.confirmPassword
      )
        return false;
      return true;
    }
    return true;
  };

  const next = () => {
    console.log("next");
    console.log(formik.errors);
    if (!validateStep(step)) return;
    setStep((i) => {
      if (i >= 2) return i;
      return i + 1;
    });

    return;
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
      dob: "",
      address: "",
      zipcode: "",
      city: "",
      province: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required(t(`form.validation.fullname.required`))
        .min(4, t(`form.validation.fullname.min`)),
      email: Yup.string()
        .email(t(`form.validation.email.email`))
        .required(t(`form.validation.email.required`)),
      dob: Yup.date().required(t(`form.validation.dob.required`)),
      address: Yup.string().required(t(`form.validation.address.required`)),
      zipcode: Yup.string().required(t(`form.validation.zipcode.required`)),
      city: Yup.string().required(t(`form.validation.city.required`)),
      province: Yup.string().required(t(`form.validation.province.required`)),
      username: Yup.string()
        .required(t(`form.validation.username.required`))
        .max(15, t(`form.validation.username.max`))
        .min(4, t(`form.validation.username.min`)),
      password: Yup.string()
        .required(t(`form.validation.password.required`))
        .matches(passwordRules, t(`form.validation.password.matches`))
        .max(18, t(`form.validation.password.max`)),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref(`password`), ""],
          t(`form.validation.confirmPassword.oneOf`)
        )
        .required(t(`form.validation.confirmPassword.required`)),
    }),
    onSubmit: (values) => {
      if (!isLastStep) return next();
      setUserData(values);
      localStorage.setItem("userdata", JSON.stringify(values));
      navigate("/user");
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

        <Stepper step={step} />
      </div>
      <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
        <div className="step-form">
          <h1 className="form-title ">{stepList[step]["title"]}</h1>
          <h3 className="form-desc">{stepList[step]["desc"]}</h3>
          <form
            className="form-registration mt-10 grid gap-1"
            onSubmit={formik.handleSubmit}
          >
            {step === 0 ? (
              <>
                <div className="form-group ">
                  <label htmlFor="fullname" className="label-input">
                    {t(`form.fullname`)}
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="fullanme"
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoFocus
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
                    {t(`form.email`)}
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
                    {t(`form.dob`)}
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
                  <label htmlFor="address" className="label-input">
                    {t(`form.address`)}
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="font-light text-red-600">
                      {formik.errors.address}
                    </div>
                  ) : (
                    <div>{"\u00A0"}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="province" className="label-input">
                    {t(`form.province`)}
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
                    {t(`form.city`)}
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
                <div className="form-group ">
                  <label htmlFor="zipcode" className="label-input">
                    {t(`form.zipcode`)}
                  </label>
                  <input
                    className="input-form"
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formik.values.zipcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.zipcode && formik.errors.zipcode ? (
                    <div className="font-light text-red-600">
                      {formik.errors.zipcode}
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
                    {t(`form.password`)}
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
                    {t(`form.confirmPassword`)}
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
      </div>
    </div>
  );
}

export default App;
