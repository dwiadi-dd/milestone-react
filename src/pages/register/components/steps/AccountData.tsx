import { ErrorMessage } from "formik";
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
        <ErrorMessage
          name="username"
          component="div"
          className="text-red-600"
        />
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
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-600"
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword" className="label-input">
          {t(`form.confirmPassword`)}
        </label>
        <Field
          className="input-form"
          type="password"
          id="confirmPassword"
          validateOnChange={true}
          name="confirmPassword"
          data-testid="confirmPassword-input"
        />
        <ErrorMessage
          name="confirmPassword"
          component="div"
          className="text-red-600"
        />
      </div>
    </div>
  );
};

export default AccountData;
