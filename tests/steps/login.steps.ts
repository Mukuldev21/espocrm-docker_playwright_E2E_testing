import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
    console.log('Navigating to login page...');
    await page.goto('/');
    await expect(page.locator('#field-userName')).toBeVisible();
});

When('I enter username and password', async ({ page }) => {
    console.log(`Entering credentials: admin / password`);
    await page.fill('#field-userName', 'admin');
    await page.fill('#field-password', 'password');
});

When('I click the login button', async ({ page }) => {
    console.log('Clicking login button...');
    await page.click('#btn-login');
});

Then('I should see the dashboard', async ({ page }) => {
    console.log('Waiting for dashboard...');
    // Wait for login to complete (login button should disappear)
    await expect(page.locator('#btn-login')).not.toBeVisible({ timeout: 15000 });

    // Check if we are still on the login page (error case)
    const isLoginPage = await page.locator('#field-userName').isVisible();
    if (isLoginPage) {
        console.log('Still on login page. Checking for errors...');
        // Try to find an error message
        // Common EspoCRM error container might be .alert or similar, but let's just log the URL
        console.log('Current URL:', page.url());
    }

    // Verify URL contains '#' which indicates we are inside the app
    await expect(page).toHaveURL(/#/, { timeout: 15000 });
});
