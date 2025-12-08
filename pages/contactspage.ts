import { Page, Locator, expect } from '@playwright/test';

export class ContactsPage {
    readonly page: Page;
    //readonly contactsLink: Locator;
    readonly createContactButton: Locator;
    //readonly name: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly phoneNumber: Locator;
    readonly description: Locator;
    readonly saveButton: Locator;
    readonly search: Locator;

    readonly actionsDropdown: Locator;
    readonly removeButton: Locator;
    readonly confirmRemoveButton: Locator;
    readonly noDataLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.contactsLink = page.locator('.nav-link[href="#Contact"]');
        this.createContactButton = page.getByRole('link', { name: 'Create Contact' });
        //this.name = page.locator('input[name="name"]');
        this.firstName = page.locator('input.form-control[data-name="firstName"]');
        this.lastName = page.locator('input.form-control[data-name="lastName"]');
        this.email = page.locator('div[data-name="emailAddress"] input.email-address');
        this.phoneNumber = page.locator('input.form-control.phone-number');
        this.description = page.locator('div[data-name="description"] textarea');
        this.saveButton = page.locator('button[data-action="save"]');
        this.search = page.locator('input[data-name="textFilter"]');

        // Delete locators
        // Using codegen suggested locator
        this.actionsDropdown = page.getByRole('group').getByRole('button').filter({ hasText: /^$/ }).first();
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.confirmRemoveButton = page.getByRole('button', { name: 'Remove' }); // The one in modal
        this.noDataLabel = page.getByText('No Data');
    }


    async clickCreateContactButton() {
        await this.createContactButton.click();
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumber.fill(phoneNumber);
    }


    async enterDescription(description: string) {
        await this.description.fill(description);
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async verifyContactCreated(name: string) {
        // Wait for the save to complete and redirect to detail view
        await expect(this.page).toHaveURL(new RegExp(`#Contact/view/`));
        // Verify the header contains the name
        await expect(this.page.locator('.header-title')).toContainText(name);
    }

    async searchForContact(name: string) {
        await this.search.fill(name);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('networkidle');
    }

    async verifyContactInList(name: string) {
        await expect(this.page.getByRole('link', { name: name }).first()).toBeVisible();
    }

    async deleteContact(name: string) {
        await this.actionsDropdown.click();
        await this.removeButton.click();
        await this.confirmRemoveButton.waitFor({ state: 'visible' });
        await this.confirmRemoveButton.click();
    }

    async verifyContactDeleted(name: string) {
        await this.searchForContact(name);
        await expect(this.noDataLabel).toBeVisible();
    }
}    
