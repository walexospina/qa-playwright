import { Page } from "playwright";
import LoginPage from "../pages/loginPage";
import { HomePage } from "../pages/homePage";

export class LoginSteps {
  private loginPage: LoginPage;
  private homePage: HomePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
  }

  async performLogin(email: string, password: string): Promise<void> {
    await this.loginPage.isPresent();
    await this.loginPage.doLogin(email, password);

    await this.homePage.isPresent();
  }
}
