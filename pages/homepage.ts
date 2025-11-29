import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly logo: Locator;
    readonly homeLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.getByRole('button').first();
        this.logo = page.getByRole('link', { name: 'logo' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
    }

    async verifyDashboard() {
        // Wait for login to complete (login button should disappear)
        await expect(this.page.getByRole('button', { name: 'Log in' })).not.toBeVisible({ timeout: 15000 });

        // Click hamburger menu to reveal the logo (as per codegen)
        await expect(this.hamburgerMenu).toBeVisible();
        await this.hamburgerMenu.click();

        // Verify elements on the dashboard
        await expect(this.logo).toBeVisible();
        await expect(this.homeLink).toBeVisible();
    }
}
