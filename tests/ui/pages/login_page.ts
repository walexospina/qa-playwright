import { Page, Locator } from '@playwright/test';

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
      this.loginSection = page.locator('#loginForm_collapse');
      this.loginButton = page.locator("[data-testid='login-button']");
      this.messagePanel = page.locator('#LoginForm_email_em_');
      this.passwordField = page.locator('#LoginForm_password');
      this.emailField = page.locator('#LoginForm_email');
      this.loginFormRememberMe = page.locator('#LoginForm_rememberMe');
      this.loginFacebookButton = page.locator("[data-testid='login-social-facebook']");
      this.loginGoogleButton = page.locator("[data-testid='login-social-google']");
    }

    async isPresent(){
        this.loginSection.isVisible();
        this.loginFacebookButton.isVisible();
        this.loginGoogleButton.isVisible();
        this.passwordField.isEditable();
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