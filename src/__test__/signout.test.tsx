import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import UserDataContext from "../context/UserDataContext";
import ProfileSection from "../pages/user/components/ProfileSection";
import i18next from "../locales/locales";
import { test } from "vitest";
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

test("user click logout button", async () => {
  const logout = screen.getByTestId(`logout-button`);
  await logout.click();
});
