import { createBdd } from 'playwright-bdd';
import { ContactsPage } from '../../pages/contactspage';
import { expect } from '@playwright/test';
import { generateContactDetails } from '../../fixtures/contactdetails';
import { getcontactSearchdata } from '../../fixtures/searchcontact';
const { Given, When, Then } = createBdd();

let createdContactDetails: {
    firstName: string, lastName: string, email: string, phoneNumber: string, description: string
};

let searchContactDetails: {
    name: string
};

When('I click the "Create Contact" button', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Clicking Create Contact button...');
    await contactsPage.clickCreateContactButton();
});

When('I enter unique contact details', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    createdContactDetails = generateContactDetails();
    console.log('Entering unique contact details...');
    await contactsPage.enterFirstName(createdContactDetails.firstName);
    await contactsPage.enterLastName(createdContactDetails.lastName);
    await contactsPage.enterEmail(createdContactDetails.email);
    await contactsPage.enterPhoneNumber(createdContactDetails.phoneNumber);
    await contactsPage.enterDescription(createdContactDetails.description);


});

Then('I should see the newly created contact', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Verifying newly created contact...');
    await contactsPage.verifyContactCreated(createdContactDetails.firstName);
});

When('I search for the created contact', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    searchContactDetails = getcontactSearchdata();
    console.log('Searching for created contact...');
    await contactsPage.searchForContact(searchContactDetails.name);
});

Then('I should see the contact in the list', async ({ page }) => {
    const contactsPage = new ContactsPage(page);
    console.log('Verifying contact in list...');
    await contactsPage.verifyContactInList(searchContactDetails.name);
});
