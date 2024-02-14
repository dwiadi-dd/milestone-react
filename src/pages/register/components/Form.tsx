import { useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import UserDataContext from "../../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PersonalInfo from "./steps/PersonalInfo";
import AddressInfo from "./steps/AddressInfo";
import AccountData from "./steps/AccountData";
import bcrypt from "bcryptjs";
import { passwordRules } from "../../../utils";

function FormRegister({
  step,
  next,
  prev,
}: {
  step: number;
  next: () => void;
  prev: () => void;
}) {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserDataContext);
  const { t } = useTranslation();
  const stepList = t("stepList", { returnObjects: true }) as [];
  const isFirstStep = step === 0;
  const isLastStep = step === 2;

  const validationSchemas = [
    Yup.object({
      fullname: Yup.string()
        .required(t(`form.validation.fullname.required`))
        .min(4, t(`form.validation.fullname.min`)),
      email: Yup.string()
        .email(t(`form.validation.email.email`))
        .required(t(`form.validation.email.required`)),
      dob: Yup.date().required(t(`form.validation.dob.required`)),
    }),
    Yup.object({
      address: Yup.string().required(t(`form.validation.address.required`)),
      zipcode: Yup.string()
        .required(t(`form.validation.zipcode.required`))
        .matches(/^[0-9]+$/, t(`form.validation.zipcode.format`))
        .min(5, t(`form.validation.zipcode.format`))
        .max(5, t(`form.validation.zipcode.format`)),
      city: Yup.string().required(t(`form.validation.city.required`)),
      province: Yup.string().required(t(`form.validation.province.required`)),
    }).strict(),
    Yup.object({
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
  ];

  return (
    <div className="regis-container flex flex-col lg:pt-32 pt-12 w-full">
      <div className="step-form">
        <h1 className="form-title ">{stepList[step]["title"]}</h1>
        <h3 className="form-desc mb-10">{stepList[step]["desc"]}</h3>
        <Formik
          initialValues={{
            fullname: userData?.fullname || "",
            email: userData?.email || "",
            dob: userData?.dob || "",
            address: userData?.address || "",
            zipcode: userData?.zipcode || "",
            city: userData?.city || "",
            province: userData?.province || "",
            username: userData?.username || "",
            password: "",
            confirmPassword: "",
            wishlist: [],
          }}
          validationSchema={validationSchemas[step]}
          validateOnMount={false}
          onSubmit={(values) => {
            console.log(values);
            if (step !== 2) return next();
            values.password = bcrypt.hashSync(values.password, 10);
            values.confirmPassword = bcrypt.hashSync(
              values.confirmPassword,
              10
            );
            setUserData(values);

            const userdb = JSON.parse(localStorage.getItem("userdb") as string);
            userdb?.push(values);
            localStorage.setItem("userdb", JSON.stringify(userdb));
            localStorage.setItem("userlogged", JSON.stringify(values));
            navigate("/user");
          }}
        >
          {({ handleSubmit, values, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              {
                [
                  <PersonalInfo
                    Field={Field}
                    values={values}
                    errors={errors}
                    touched={touched}
                    ErrorMessage={ErrorMessage}
                    t={t}
                  />,
                  <AddressInfo
                    Field={Field}
                    errors={errors}
                    values={values}
                    touched={touched}
                    ErrorMessage={ErrorMessage}
                    t={t}
                  />,
                  <AccountData
                    Field={Field}
                    errors={errors}
                    values={values}
                    touched={touched}
                    ErrorMessage={ErrorMessage}
                    t={t}
                  />,
                ][step]
              }
              <div className="button-form-group ">
                <button
                  className="back-button"
                  onClick={prev}
                  type="button"
                  tabIndex={-1}
                  disabled={isFirstStep}
                  data-testid="back-button"
                >
                  {t("back")}
                </button>
                <button
                  className="next-button"
                  type="submit"
                  data-testid="finish-button"
                >
                  {isLastStep ? t("finnish") : t("next")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
