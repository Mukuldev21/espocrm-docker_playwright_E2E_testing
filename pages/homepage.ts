import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyDashboard() {
        // Wait for login to complete (login button should disappear)
        await expect(this.page.locator('#btn-login')).not.toBeVisible({ timeout: 15000 });

        // Check if we are still on the login page (error case)
        const isLoginPage = await this.page.locator('#field-userName').isVisible();
        if (isLoginPage) {
            console.log('Still on login page. Checking for errors...');
            console.log('Current URL:', this.page.url());
        }

        // Verify URL contains '#' which indicates we are inside the app
        await expect(this.page).toHaveURL(/#/, { timeout: 15000 });
    }
}
