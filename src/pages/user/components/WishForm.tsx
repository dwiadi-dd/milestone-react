import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useEffect } from "react";
import * as Yup from "yup";
import UserDataContext from "../../../context/UserDataContext";
import { RegsiterDataType } from "../../../utils";
import { useTranslation } from "react-i18next";

const WishForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useContext<any>(UserDataContext);
  const userdb = JSON.parse(localStorage.getItem("userdb") as string);
  const { t } = useTranslation();

  useEffect(() => {
    const updatedDb = userdb.map((user: RegsiterDataType) =>
      user.username === userData?.username
        ? { ...user, wishlist: userData?.wishlist }
        : user
    );
    localStorage.setItem("userlogged", JSON.stringify(userData));
    localStorage.setItem("userdb", JSON.stringify(updatedDb));
  }, [userData]);

  const initialValues = {
    name: "",
    url: "",
    price: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Item Name is required"),
    url: Yup.string().url("Invalid URL").required("URL is required"),
    price: Yup.number().required("Estimated Price is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const data = {
          ...values,
          id: Math.floor(100000 + Math.random() * 900000),
        };
        console.log(data);
        actions.resetForm();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setUserData((prev: any) => ({
          ...prev,
          wishlist: [...prev.wishlist, data],
        }));
      }}
    >
      {({ handleSubmit, values }) => (
        <Form onSubmit={handleSubmit} className="mt-20 w-2/3 mb-20 mx-auto ">
          <h1 className="font-theme text-2xl font-semibold mb-4">
            {t("add-wish")}
          </h1>
          <div className="form-group ">
            <label htmlFor="name">{t("th.item")}</label>
            <Field
              type="text"
              name="name"
              className="input-form"
              value={values.name}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">{t("th.url")}</label>
            <Field
              type="text"
              name="url"
              className="input-form"
              value={values.url}
            />
            <ErrorMessage name="url" component="div" className="text-red-500" />
          </div>
          <div className="form-group">
            <label htmlFor="price">{t("th.price")}</label>
            <Field
              type="text"
              name="price"
              className="input-form"
              value={values.price}
            />
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500"
            />
          </div>

          <button className="next-button mt-8" type="submit">
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default WishForm;
