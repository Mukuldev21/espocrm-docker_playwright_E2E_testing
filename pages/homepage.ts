import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    clickHamburgerMenu() {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly logo: Locator;
    readonly homeLink: Locator;
    readonly threedotsMenu: Locator;
    readonly logoutButton: Locator;
    readonly accountsLink: Locator;
    readonly contactsLink: Locator;
    readonly leadsLink: Locator;
    readonly opportunitiesLink: Locator;
    //readonly casesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.getByRole('button').first();
        this.logo = page.getByRole('link', { name: 'logo' });
        this.homeLink = page.getByRole('link', { name: 'Home' });
        //this.threedotsMenu = page.getByRole('button', { name: 'Menu' });
        this.threedotsMenu = page.locator('#nav-menu-dropdown');
        this.logoutButton = page.getByRole('button', { name: 'Log out' });
        this.accountsLink = page.locator('.nav-link[href="#Account"]');
        this.contactsLink = page.locator('.nav-link[href="#Contact"]');
        this.leadsLink = page.locator('.nav-link[href="#Lead"]');
        this.opportunitiesLink = page.locator('.nav-link[href="#Opportunity"]');
        //this.casesLink = page.getByRole('link', { name: 'Cases' });
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

    //click hamburger menu
    async clickOnHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

}
