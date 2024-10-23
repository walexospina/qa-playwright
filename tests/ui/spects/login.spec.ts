import { test } from "../fixtures/basePages";
import { LoginSteps } from "../steps/userLoginSteps";

const email = process.env.EMAIL!;
const password = process.env.PASSWORD!;
let loginSteps: LoginSteps;

test.beforeEach(async ({ page, loginPage }) => {
  await loginPage.open();
  loginSteps = new LoginSteps(page);
});

test.describe("login ", () => {
  test("@smoke - should login in to the app", async () => {
    await loginSteps.performLogin(email, password);
  });
});
