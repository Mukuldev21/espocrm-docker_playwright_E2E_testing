import { test as setup, expect } from '@playwright/test';
import { testUser } from '../fixtures/testuser';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.goto();

    // Check if already logged in
    try {
        await expect(page.locator('#navbar')).toBeVisible({ timeout: 3000 });
        console.log('Already logged in');
    } catch {
        console.log('Not logged in, performing login');
        await loginPage.usernameInput.fill(testUser.username);
        await loginPage.passwordInput.fill(testUser.password);
        await loginPage.loginButton.click();
        await homePage.verifyDashboard();
    }

    await page.context().storageState({ path: authFile });
});
