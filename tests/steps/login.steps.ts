import { createBdd } from 'playwright-bdd';
import { testUser } from '../../fixtures/testuser';
import { LoginPage } from '../../pages/loginpage';
import { HomePage } from '../../pages/homepage';
import { expect } from '@playwright/test';

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

When('I enter invalid invalid and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log("Entering credentials:");
    await loginPage.usernameInput.fill(testUser.username);
    await loginPage.passwordInput.fill(testUser.password);
});

Then('I should see the error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log('Waiting for error message...');
    await expect(loginPage.errorMessage).toBeVisible();
});

When('I enter invalid {string} and {string}', async ({ page }, arg: string, arg2: string) => {
    const loginPage = new LoginPage(page);
    console.log("Entering credentials:");
    await loginPage.usernameInput.fill(arg);
    await loginPage.passwordInput.fill(arg2);
});

When('I leave username and password empty', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log("Entering credentials:");
    await loginPage.usernameInput.fill('');
    await loginPage.passwordInput.fill('');
});


Then('I should see the error text message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log('Waiting for error text message...');
    await expect(loginPage.errorText).toBeVisible();
});
