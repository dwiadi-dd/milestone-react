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
  city: "Test City",
  province: "Test Province",
  zipcode: "12345",
  password: "12345",
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

test("user input invalid fullname", async () => {
  const fullname = screen.getByTestId(`fullname-input`) as HTMLInputElement;
  await userEvent.type(fullname, "ui");
  userEvent.tab();

  await waitFor(() => {
    expect(fullname.value).toContain("ui");
    const error = screen.queryByTestId(`error-fullname`);
    expect(error).toBeTruthy();
  });
});

test("user input valid fullname", async () => {
  const fullname = screen.getByTestId(`fullname-input`) as HTMLInputElement;
  userEvent.clear(fullname);
  await userEvent.type(fullname, userDataMock.fullname);
  userEvent.tab();

  await waitFor(() => {
    expect(fullname.value).toEqual(userDataMock.fullname);

    const error = screen.queryByTestId(`error-fullname`);
    expect(error).toBeNull();
  });
});

test("user input invalid email", async () => {
  const email = screen.getByTestId(`email-input`) as HTMLInputElement;
  await userEvent.type(email, "ui");
  userEvent.tab();

  await waitFor(() => {
    expect(email.value).toContain("ui");
    const error = screen.queryByTestId(`error-email`);
    expect(error).toBeTruthy();
  });
});

test("user input valid email", async () => {
  const email = screen.getByTestId(`email-input`) as HTMLInputElement;
  userEvent.clear(email);
  await userEvent.type(email, userDataMock.email);
  userEvent.tab();

  await waitFor(() => {
    expect(email.value).toContain(userDataMock.email);

    const error = screen.queryByTestId(`error-email`);
    expect(error).toBeNull();
  });
});

test("user input invalid dob", async () => {
  const dob = screen.getByTestId(`dob-input`) as HTMLInputElement;
  userEvent.clear(dob);

  await userEvent.type(dob, "2022-01-01");
  userEvent.tab();

  await waitFor(() => {
    expect(dob.value).toContain("2022-01-01");
    const error = screen.queryByTestId(`error-dob`);
    expect(error).toBeTruthy();
  });
});

test("user input valid dob", async () => {
  const dob = screen.getByTestId(`dob-input`) as HTMLInputElement;
  userEvent.clear(dob);

  await userEvent.type(dob, userDataMock.dob);
  userEvent.tab();

  await waitFor(() => {
    expect(dob.value).toContain(userDataMock.dob);

    const error = screen.queryByTestId(`error-dob`);
    expect(error).toBeNull();
  });
});
