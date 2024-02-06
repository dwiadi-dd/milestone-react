import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import UserDataContext from "../context/UserDataContext";
import User from "../pages/user/index";
import i18next from "../locales/locales";
import { expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

test("renders welcome message when user data is present", () => {
  const userData = {
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
          <User />
        </UserDataContext.Provider>
      </I18nextProvider>
    </BrowserRouter>
  );

  const greeting = screen.getByTestId(`greeting-user`);
  expect(greeting).toString(`Welcome ${userData.username}`);

  const fullname = screen.getByTestId(`fullname`);
  expect(fullname).toString(userData.fullname);

  const email = screen.getByTestId(`email`);
  expect(email).toString(userData.email);

  const dob = screen.getByTestId(`dob`);
  expect(dob).toString(userData.dob);
});
