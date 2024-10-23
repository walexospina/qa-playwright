import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginPage";

type pageObjects = {
  loginPage: LoginPage;
};

export const testPages = base.extend<pageObjects>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    use(loginPage);
  },
});
export const test = testPages;
