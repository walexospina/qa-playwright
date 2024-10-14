import { test } from '@playwright/test';
import { LoginSteps } from '../steps/user_login_steps';


const email = process.env.EMAIL!;
const password = process.env.PASSWORD!;
let loginSteps: LoginSteps;


test.beforeEach(async ({ page }) => {
    await page.goto('https://academy.abaenglish.com/login');
    loginSteps = new LoginSteps(page);
  });
  
  test.describe('login ', () => {
    test('@smoke - should login in to the app', async () => {
        await loginSteps.performLogin(email, password);
  
    });

});