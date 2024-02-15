import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import UserDataContext from "../context/UserDataContext";
import ProfileSection from "../pages/user/components/ProfileSection";
import i18next from "../locales/locales";
import { expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

const userData = {
  username: "testuser",
  fullname: "Test User",
  email: "testuser@example.com",
  dob: "2000-01-01",
  address: "123 Test St",
  city: "Test City",
  province: "jabar",
  zipcode: "12345",
  password: "12345",
  wishlist: [],
};

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <UserDataContext.Provider value={[userData, () => {}]}>
        <ProfileSection userData={userData} />
      </UserDataContext.Provider>
    </I18nextProvider>
  </BrowserRouter>
);

test("renders welcome message when user data is present", () => {
  const greeting = screen.getByTestId(`greeting-user`);
  expect(greeting.textContent).toEqual(`Hello,  ${userData.fullname}!`);
});

test("renders email when user data is present", () => {
  const email = screen.getByTestId(`test-email`);
  expect(email.textContent).toEqual(`${userData.email}`);
});

test("renders dob when user data is present", () => {
  const dob = screen.getByTestId(`test-dob`);
  expect(dob.textContent).toEqual(`${userData.dob}`);
});

test("renders address when user data is present", () => {
  const address = screen.getByTestId(`test-address`);
  expect(address.textContent).toEqual(
    `${userData.address}, ${userData.city}, Jawa Barat, ${userData.zipcode}.`
  );
});

test("renders fullname when user data is present", () => {
  const fullname = screen.getByTestId(`test-fullname`);
  expect(fullname.textContent).toEqual(`${userData.fullname}`);
});
