import { ErrorMessage } from "formik";
import { FormStepProps } from "../../../../utils";

const PersonalInfo = ({ Field, errors, touched, t }: FormStepProps) => {
  return (
    <div>
      <div className="form-group ">
        <label htmlFor="fullname" className="label-input">
          {t(`form.fullname`)}
        </label>
        <Field
          autoFocus
          className="input-form"
          type="text"
          id="fullname"
          name="fullname"
          data-testid="fullname-input"
        />
        {touched.fullname && errors.fullname ? (
          <div
            className="font-light text-red-600"
            data-testid="error-test"
            role="alert"
          >
            {errors.fullname}
          </div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="label-input">
          {t(`form.email`)}
        </label>
        <Field
          className="input-form"
          type="email"
          id="email"
          name="email"
          data-testid="email-input"
        />
        {touched.email && errors.email ? (
          <div className="font-light text-red-600">{errors.email}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}{" "}
      </div>
      <div className="form-group">
        <label htmlFor="dob" className="label-input">
          {t(`form.dob`)}
        </label>
        <Field
          className="input-form"
          type="date"
          id="dob"
          name="dob"
          max="2006-01-01"
          data-testid="dob-input"
        />
        {touched.dob && errors.dob ? (
          <div className="font-light text-red-600">{errors.dob}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}{" "}
      </div>
    </div>
  );
};

export default PersonalInfo;
