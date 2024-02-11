import { useState } from "react";
import { FormStepProps, ListOfCity, ListOfProvinsi } from "../../../../utils";

const AddressInfo = ({ Field, errors, touched, t }: FormStepProps) => {
  const [provinceSelected, setProvinceSelected] = useState("");
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
        <select
          className="input-form"
          id="province"
          name="province"
          onChange={(e) => setProvinceSelected(e.target.value)}
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
        </select>
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
        <select
          className="input-form"
          id="city"
          name="city"
          data-testid="city-select"
        >
          <option value="" disabled selected>
            {t(`form.cityPlaceholder`)}
          </option>
          {ListOfCity[provinceSelected]?.map((option) => (
            <option key={option.kota} value={option.kota}>
              {option.kota}
            </option>
          ))}
        </select>
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
