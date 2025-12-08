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
    readonly website: Locator;
    readonly description: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.contactsLink = page.locator('.nav-link[href="#Contact"]');
        this.createContactButton = page.getByRole('link', { name: 'Create Contact' });
        //this.name = page.locator('input[name="name"]');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.email = page.locator('input[type="email"]');
        this.phoneNumber = page.getByRole('textbox', { name: '-000-0000' });
        this.website = page.locator('input[type="text"][data-name="website"]');
        this.description = page.locator('div[data-name="description"] textarea');
        this.saveButton = page.locator('button[data-action="save"]');
    }

    // async clickContactsLink() {
    //     await this.contactsLink.click();
    // }

    async clickCreateContactButton() {
        await this.createContactButton.click();
    }

    // async enterName(name: string) {
    //     await this.name.fill(name);
    // }

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

    async enterWebsite(website: string) {
        await this.website.fill(website);
    }

    async enterDescription(description: string) {
        await this.description.fill(description);
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }
}