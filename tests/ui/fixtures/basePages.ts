import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { LoginSteps } from "../steps/userLoginSteps";

type pageObjects = {
  loginPage: LoginPage;
  homePage: HomePage;
  performLogin: (email: string, password: string) => Promise<void>;
};

export const testPages = base.extend<pageObjects>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    use(homePage);
  },
  performLogin: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const loginSteps = new LoginSteps(page);

    await use(async (email: string, password: string) => {
      await loginPage.open();
      await loginSteps.performLogin(email, password);
    });
  },
});
export const test = testPages;
