import { render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import UserDataContext from "../context/UserDataContext";
import Register from "../pages/register/index";
import i18next from "../locales/locales";
import { expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
const userData = {
  username: "",
  fullname: "",
  email: "",
  dob: "",
  address: "",
  city: "",
  province: "",
  zipcode: "",
  password: "",
  wishlist: [],
};

const userDataMock = {
  username: "testuser",
  fullname: "kocak gaming",
  email: "testuser@example.com",
  dob: "2005-10-04",
  address: "123 Test St",
  city: "Kabupaten Bandung",
  province: "jabar",
  zipcode: "12345",
  password: "Kocak12345",
  wishlist: [],
};

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <UserDataContext.Provider value={[userData, () => {}]}>
        <Register />
      </UserDataContext.Provider>
    </I18nextProvider>
  </BrowserRouter>
);

test("user complete personal info", async () => {
  const fullname = screen.getByTestId(`fullname-input`) as HTMLInputElement;
  userEvent.clear(fullname);
  await userEvent.type(fullname, userDataMock.fullname);
  userEvent.tab();
  const email = screen.getByTestId(`email-input`) as HTMLInputElement;
  userEvent.clear(email);
  await userEvent.type(email, userDataMock.email);
  const dob = screen.getByTestId(`dob-input`) as HTMLInputElement;
  userEvent.clear(dob);
  await userEvent.type(dob, userDataMock.dob);
  userEvent.tab();
  const next = screen.getByTestId(`finish-button`);
  await next.click();

  await waitFor(() => {
    const error = screen.queryByTestId(`error-fullname`);
    expect(error).toBeNull();
  });
});

test("user input valid address", async () => {
  const address = screen.getByTestId(`address-input`) as HTMLInputElement;
  userEvent.clear(address);
  await userEvent.type(address, userDataMock.address);
  userEvent.tab();

  await waitFor(() => {
    expect(address.value).toEqual(userDataMock.address);

    const error = screen.queryByTestId(`address-error`);
    expect(error).toBeNull();
  });
});

test("user select valid province", async () => {
  const province = screen.getByTestId(`province-select`) as HTMLInputElement;
  await userEvent.selectOptions(province, userDataMock.province);
  userEvent.tab();

  await waitFor(() => {
    expect(province.value).toContain(userDataMock.province);

    const error = screen.queryByTestId(`province-error`);
    expect(error).toBeNull();
  });
});

test("user select valid city", async () => {
  const city = screen.getByTestId(`city-select`) as HTMLInputElement;
  await userEvent.selectOptions(city, userDataMock.city);
  userEvent.tab();

  await waitFor(async () => {
    expect(city.value).toContain(userDataMock.city);

    const error = screen.queryByTestId(`city-error`);
    expect(error).toBeNull();
  });
});

test("user input valid zipcode", async () => {
  const zipcode = screen.getByTestId(`zipcode-input`) as HTMLInputElement;
  userEvent.clear(zipcode);
  await userEvent.type(zipcode, userDataMock.zipcode);
  userEvent.tab();

  await waitFor(async () => {
    expect(zipcode.value).toEqual(userDataMock.zipcode);

    const next = screen.getByTestId(`finish-button`);
    await next.click();
  });
});

test("user input valid username", async () => {
  const username = screen.getByTestId(`username-input`) as HTMLInputElement;
  userEvent.clear(username);
  await userEvent.type(username, userDataMock.username);
  userEvent.tab();

  const password = screen.getByTestId(`password-input`) as HTMLInputElement;
  userEvent.clear(password);
  await userEvent.type(password, userDataMock.password);
  userEvent.tab();

  const confirmPassword = screen.getByTestId(
    `confirmPassword-input`
  ) as HTMLInputElement;
  userEvent.clear(confirmPassword);
  await userEvent.type(confirmPassword, userDataMock.password);
  userEvent.tab();

  await waitFor(async () => {
    const next = screen.getByTestId(`finish-button`);
    await next.click();
  });
});
