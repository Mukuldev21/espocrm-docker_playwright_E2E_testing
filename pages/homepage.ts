import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyDashboard() {
        // Wait for login to complete (login button should disappear)
        await expect(this.page.getByRole('button', { name: 'Log in' })).not.toBeVisible({ timeout: 15000 });

        // Click hamburger menu to reveal the logo (as per codegen)
        await expect(this.page.getByRole('button').first()).toBeVisible();
        await this.page.getByRole('button').first().click();

        // Verify elements on the dashboard
        await expect(this.page.getByRole('link', { name: 'logo' })).toBeVisible();
        await expect(this.page.getByRole('link', { name: ' Home' })).toBeVisible();
    }
}
