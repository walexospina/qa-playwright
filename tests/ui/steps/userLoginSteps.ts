import { Page } from "playwright";
import LoginPage from "../pages/loginPage";

export class LoginSteps {
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async performLogin(email: string, password: string) {
    await this.loginPage.isPresent();
    await this.loginPage.doLogin(email, password);
  }
}
