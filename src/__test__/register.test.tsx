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
};

const userDataMock = {
  username: "testuser",
  fullname: "kocak",
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

test("user input invalid fullname", async () => {
  const fullname = screen.getByTestId(`fullname-input`);
  await userEvent.type(fullname, "ui");
  userEvent.tab();

  await waitFor(() => {
    expect(fullname.value).toContain("ui");
    const error = screen.queryByRole(`alert`);
    expect(error).toBeTruthy();
  });
});

test("user input valid fullname", async () => {
  const fullname = screen.getByTestId(`fullname-input`);
  await userEvent.type(fullname, userDataMock.fullname);
  userEvent.tab();

  await waitFor(() => {
    expect(fullname.value).toContain(userDataMock.fullname);

    const error = screen.queryByRole(`alert`);
    expect(error).toBeNull();
  });
});
