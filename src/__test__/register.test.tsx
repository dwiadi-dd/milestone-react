import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import UserDataContext from "../context/UserDataContext";
import Register from "../pages/register/index";
import i18next from "../locales/locales";
import { expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

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
};

const userDataMock = {
  username: "testuser",
  fullname: "Test User",
  email: "testuser@example.com",
  dob: "2000-01-01",
  address: "123 Test St",
  city: "Test City",
  province: "Test Province",
  zipcode: "12345",
  password: "12345",
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

test("renders welcome message when user data is present", () => {
  const greeting = screen.getByTestId(`greeting-user`);
  expect(greeting.textContent).toEqual(`Welcome ${userData.username}!`);
});
