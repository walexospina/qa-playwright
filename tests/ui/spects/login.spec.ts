import { test, expect } from '@playwright/test';
import { LoginSteps } from '../steps/user_login_steps';


const userName = 'ao';
const password = 'pp';
let loginSteps: LoginSteps;


test.beforeEach(async ({ page }) => {
    await page.goto('https://campus.abaenglish.com');
    loginSteps = new LoginSteps(page);
  });
  
  test.describe('login ', () => {
    test('@smoke - should login in to the app', async () => {
        await loginSteps.performLogin(userName, password);
  
    });

});