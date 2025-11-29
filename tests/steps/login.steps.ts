import { createBdd } from 'playwright-bdd';
import { testUser } from '../../fixtures/testuser';
import { LoginPage } from '../../pages/loginpage';
import { HomePage } from '../../pages/homepage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log('Navigating to login page...');
    await loginPage.goto();
});

When('I enter username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log("Entering credentials:");
    await loginPage.usernameInput.fill(testUser.username);
    await loginPage.passwordInput.fill(testUser.password);
});

When('I click the login button', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log('Clicking login button...');
    await loginPage.loginButton.click();
});

Then('I should see the dashboard', async ({ page }) => {
    const homePage = new HomePage(page);
    console.log('Waiting for dashboard...');
    await homePage.verifyDashboard();
});
