import { FormStepProps, priorDate } from "../../../../utils";

const PersonalInfo = ({ formik, t }: FormStepProps) => {
  return (
    <div>
      <div className="form-group ">
        <label htmlFor="fullname" className="label-input">
          {t(`form.fullname`)}
        </label>
        <input
          autoFocus
          className="input-form"
          type="text"
          id="fullname"
          name="fullname"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          data-testid="fullname-input"
        />
        {formik.touched.fullname && formik.errors.fullname ? (
          <div
            className="font-light text-red-600"
            data-testid="error-fullname"
            role="alert"
          >
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
          data-testid="email-input"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div
            className="font-light text-red-600"
            role="alert"
            data-testid="error-email"
          >
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
          max={priorDate.toISOString().split("T")[0]}
          data-testid="dob-input"
          value={formik.values.dob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.dob && formik.errors.dob ? (
          <div
            className="font-light text-red-600"
            role="alert"
            data-testid="error-dob"
          >
            {formik.errors.dob}
          </div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;
