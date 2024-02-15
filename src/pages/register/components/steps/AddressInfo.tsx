import { FormStepProps, ListOfCity, ListOfProvinsi } from "../../../../utils";

const AddressInfo = ({ formik, t }: FormStepProps) => {
  return (
    <div>
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
          data-testid="address-input"
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="font-light text-red-600" data-testid="address-error">
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
          data-testid="province-select"
          value={formik.values.province}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          children={
            <>
              <option value="" disabled selected>
                {t(`form.provincePlaceholder`)}
              </option>
              {ListOfProvinsi.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.provinsi}
                </option>
              ))}
            </>
          }
        />
        {formik.touched.province && formik.errors.province ? (
          <div className="font-light text-red-600" data-testid="province-error">
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
          data-testid="city-select"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          children={
            <>
              <option value="" disabled selected>
                {t(`form.cityPlaceholder`)}
              </option>
              {ListOfCity[formik.values.province]?.map((option) => (
                <option key={option.kota} value={option.kota}>
                  {option.kota}
                </option>
              ))}
            </>
          }
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="font-light text-red-600" data-testid="city-error">
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
          data-testid="zipcode-input"
          value={formik.values.zipcode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.zipcode && formik.errors.zipcode ? (
          <div className="font-light text-red-600" data-testid="zipcode-error">
            {formik.errors.zipcode}
          </div>
        ) : (
          <div>{"\u00A0"}</div>
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
