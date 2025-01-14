import { homedir } from "os";
import { test } from "../fixtures/basePages";

const email = process.env.EMAIL!;
const password = process.env.PASSWORD!;

// test.beforeEach(async ({ page, loginPage }) => {
//   await loginPage.open();
//   loginSteps = new LoginSteps(page);
// });

test.describe("login ", () => {
  test("@smoke - should login in to the app", async ({
    performLogin,
    homePage,
  }) => {
    await performLogin(email, password);
    await homePage.isPresent();
  });
});
