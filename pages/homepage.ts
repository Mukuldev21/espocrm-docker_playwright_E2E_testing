import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly logo: Locator;
    readonly homeLink: Locator;
    readonly threedotsMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.getByRole('button').first();
        this.logo = page.getByRole('link', { name: 'logo' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.threedotsMenu = page.getByRole('button', { name: 'Menu' });
        this.logoutButton = page.getByRole('button', { name: 'Log out' });

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
    //Wait for page to load
    async waitForPageToLoad() {
        await this.page.waitForLoadState('load');
    }

    //click threedots menu
    async clickThreedotsMenu() {
        await this.threedotsMenu.click();
    }

    //click logout button
    async clickLogoutButton() {
        await this.logoutButton.click();
    }


}
