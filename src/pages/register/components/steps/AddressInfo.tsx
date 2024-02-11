import { FormStepProps, ListOfCity, ListOfProvinsi } from "../../../../utils";

const AddressInfo = ({ Field, errors, touched, values, t }: FormStepProps) => {
  return (
    <div>
      <div className="form-group ">
        <label htmlFor="address" className="label-input">
          {t(`form.address`)}
        </label>
        <Field
          className="input-form"
          type="text"
          id="address"
          name="address"
          data-testid="address-input"
        />
        {touched.address && errors.address ? (
          <div className="font-light text-red-600">{errors.address}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="province" className="label-input">
          {t(`form.province`)}
        </label>
        <Field
          as="select"
          className="input-form"
          id="province"
          name="province"
          data-testid="province-select"
        >
          <option value="" disabled selected>
            {t(`form.provincePlaceholder`)}
          </option>
          {ListOfProvinsi.map((option, index) => (
            <option key={index} value={option.value}>
              {option.provinsi}
            </option>
          ))}
        </Field>
        {touched.province && errors.province ? (
          <div className="font-light text-red-600">{errors.province}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="city" className="label-input">
          {t(`form.city`)}
        </label>
        <Field
          as="select"
          className="input-form"
          id="city"
          name="city"
          data-testid="city-select"
        >
          <option value="" disabled selected>
            {t(`form.cityPlaceholder`)}
          </option>
          {ListOfCity[values.province]?.map((option) => (
            <option key={option.kota} value={option.kota}>
              {option.kota}
            </option>
          ))}
        </Field>
        <p className="text-red-400">{"\u00A0"}</p>
        {touched.city && errors.city ? (
          <div className="font-light text-red-600">{errors.city}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
      <div className="form-group ">
        <label htmlFor="zipcode" className="label-input">
          {t(`form.zipcode`)}
        </label>
        <Field
          className="input-form"
          type="text"
          id="zipcode"
          name="zipcode"
          data-testid="zipcode-input"
        />
        {touched.zipcode && errors.zipcode ? (
          <div className="font-light text-red-600">{errors.zipcode}</div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
