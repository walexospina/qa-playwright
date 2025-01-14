import { Page, Locator, expect } from "@playwright/test";
import { URLs } from "../../utils/urls";

export class LoginPage {
  readonly page: Page;
  readonly abaLogo: Locator;
  readonly loginSection: Locator;
  readonly loginButton: Locator;
  readonly messagePanel: Locator;
  readonly passwordField: Locator;
  readonly emailField: Locator;
  readonly loginFormRememberMe: Locator;
  readonly loginFacebookButton: Locator;
  readonly loginGoogleButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginSection = page.locator("#loginForm_collapse");
    this.loginButton = page.locator("[data-testid='login-button']");
    this.messagePanel = page.locator("#LoginForm_email_em_");
    this.passwordField = page.locator("#LoginForm_password");
    this.emailField = page.locator("#LoginForm_email");
    this.loginFormRememberMe = page.locator("#LoginForm_rememberMe");
    this.loginFacebookButton = page.locator(
      "[data-testid='login-social-facebook']"
    );
    this.loginGoogleButton = page.locator(
      "[data-testid='login-social-google']"
    );
  }

  async open() {
    await this.page.goto(URLs.login);
    await this.page.waitForURL("**/login");
  }

  async isPresent() {
    await this.loginSection.isVisible();
    await this.loginFacebookButton.isVisible();
    await this.loginGoogleButton.isVisible();
    await this.passwordField.isEditable();
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }
  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async doLogin(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
