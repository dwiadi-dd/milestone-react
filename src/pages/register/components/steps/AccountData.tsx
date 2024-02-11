import { FormStepProps } from "../../../../utils";

const AccountData = ({ Field, errors, touched, t }: FormStepProps) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="username" className="label-input">
          username
        </label>
        <Field
          className="input-form"
          type="text"
          id="username"
          name="username"
          data-testid="username-input"
        />
        {touched.username && errors.username ? (
          <div className="font-light text-red-600">{errors.username}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label-input">
          {t(`form.password`)}
        </label>
        <Field
          className="input-form"
          type="password"
          id="password"
          name="password"
          data-testid="password-input"
        />
        {touched.password && errors.password ? (
          <div className="font-light text-red-600">{errors.password}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword" className="label-input">
          {t(`form.confirmPassword`)}
        </label>
        <Field
          className="input-form"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          data-testid="confirmPassword-input"
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <div className="font-light text-red-600">
            {errors.confirmPassword}
          </div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
    </div>
  );
};

export default AccountData;
