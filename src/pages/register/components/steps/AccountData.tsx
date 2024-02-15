import { FormStepProps } from "../../../../utils";

const AccountData = ({ formik, t }: FormStepProps) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="username" className="label-input">
          username
        </label>
        <input
          className="input-form"
          type="text"
          id="username"
          name="username"
          data-testid="username-input"
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
          name="password"
          data-testid="password-input"
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
          data-testid="confirmPassword-input"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="font-light text-red-600">
            {formik.errors.confirmPassword}
          </div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
    </div>
  );
};

export default AccountData;
