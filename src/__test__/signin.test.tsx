import { render, screen, waitFor } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18next from "../locales/locales";
import { test, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "../pages/signin";
import UserDataContext from "../context/UserDataContext";

const userData = {
  username: "",
  fullname: "",
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
        <LoginPage />
      </UserDataContext.Provider>
    </I18nextProvider>
  </BrowserRouter>
);

test("user can input  email", async () => {
  const email = screen.getByTestId(`email-test`) as HTMLInputElement;
  await userEvent.type(email, userData.email);
  userEvent.tab();

  await waitFor(() => {
    expect(email.value).toContain(userData.email);
  });
});

test("user can input password", async () => {
  const password = screen.getByTestId(`password-test`) as HTMLInputElement;
  await userEvent.type(password, userData.password);
  userEvent.tab();

  await waitFor(() => {
    expect(password.value).toContain(userData.password);
  });
});

test("user click login button", async () => {
  const login = screen.getByTestId(`login-test`);
  await login.click();
});
