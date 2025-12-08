import { createBdd } from 'playwright-bdd';
import { ContactsPage } from '../../pages/contactspage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

When('I click the "Create Contact" button', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Clicking Create Contact button...');
    await contactsPage.clickCreateContactButton();
});

When('I enter unique contact details', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Entering unique contact details...');
    contactsPage.enterFirstName('John');
    contactsPage.enterLastName('Doe');
    contactsPage.enterEmail('john.doe@example.com');
    contactsPage.enterPhoneNumber('1234567890');
    contactsPage.enterDescription('This is a test contact');


});

Then('I should see the newly created contact', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Verifying newly created contact...');
    await contactsPage.verifyContactCreated('John');
});