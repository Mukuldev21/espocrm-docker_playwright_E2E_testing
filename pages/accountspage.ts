import { Page, Locator, expect } from '@playwright/test';

export class AccountsPage {
    readonly page: Page;
    readonly createAccountButton: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly saveButton: Locator;
    readonly accountNameHeader: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locator for 'Create Account' button on the list page
        this.createAccountButton = page.getByRole('link', { name: 'Create Account' });

        // Locators for the Create Account form
        this.nameInput = page.locator('input[data-name="name"]');
        this.emailInput = page.locator('div[data-name="emailAddress"] input.email-address');
        this.saveButton = page.locator('button[data-action="save"]');

        // Locator for verification (e.g., the header showing the account name after save)
        // Assuming the header has the account name
        this.accountNameHeader = page.locator('.header-title');

        // Search locators
        this.searchInput = page.locator('input[data-name="textFilter"]');
    }

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }

    async enterAccountName(name: string) {
        await this.nameInput.fill(name);
    }

    async enterAccountEmail(email: string) {
        // Email might be a complex field, sometimes needing to click 'add' or just fill the first input
        // Trying simple fill first
        await this.emailInput.fill(email);
    }

    async clickSave() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.saveButton.waitFor({ state: 'visible' });
        // await this.saveButton.waitFor({ state: 'enabled' }); // Sometimes buttons are enabled by js
        await this.saveButton.click({ force: true });
    }

    async verifyAccountCreated(name: string) {
        // Wait for the save to complete and redirect to detail view
        await expect(this.page).toHaveURL(new RegExp(`#Account/view/`));
        // Verify the header contains the name
        await expect(this.page.locator('.header-title')).toContainText(name);
    }

    async searchForAccount(name: string) {
        await this.searchInput.fill(name);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }

    async verifyAccountInList(name: string) {
        // Verify the account name appears in the list
        // Assuming the list has links with the account name
        await expect(this.page.getByRole('link', { name: name }).first()).toBeVisible();
    }
}
