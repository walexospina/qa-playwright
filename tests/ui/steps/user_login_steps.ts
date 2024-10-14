import { LoginPage } from '../pages/login_page';
import { Page } from 'playwright';

export class LoginSteps {
    private loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async performLogin(email: string, password: string) {
        await this.loginPage.isPresent()
        await this.loginPage.doLogin(email, password);
    }
}