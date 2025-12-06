import { createBdd } from 'playwright-bdd';
import { AccountsPage } from '../../pages/accountspage';
import { expect } from '@playwright/test';
import { generateAccountDetails } from '../../fixtures/accountdetails';
import { getaccount_searchdata } from '../../fixtures/search_accountdata';
import { saveAccountName, getRandomAccountName } from '../../utils/fileUtils';

const { Given, When, Then } = createBdd();

let createdAccountDetails: {
    name: string, email: string, website: string, phoneNumber: string
    street: string, city: string, state: string, postalCode: string, country: string
};
let searchedAccountName: string;

When('I click the "Create Account" button', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    console.log('Clicking Create Account button...');
    await accountsPage.clickCreateAccount();
});

When('I enter unique account details', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    createdAccountDetails = generateAccountDetails();
    console.log(`Entering unique account details: Name=${createdAccountDetails.name}, Email=${createdAccountDetails.email}`);
    saveAccountName(createdAccountDetails.name);
    await accountsPage.enterAccountName(createdAccountDetails.name);
    await accountsPage.enterAccountEmail(createdAccountDetails.email);
    await accountsPage.enterAccountWebsite(createdAccountDetails.website);
    await accountsPage.enterAccountPhoneNumber(createdAccountDetails.phoneNumber);
    await accountsPage.enterBillingAddressStreet(createdAccountDetails.street);
    await accountsPage.enterBillingAddressCity(createdAccountDetails.city);
    await accountsPage.enterBillingAddressState(createdAccountDetails.state);
    await accountsPage.enterBillingAddressPostalCode(createdAccountDetails.postalCode);
    await accountsPage.enterBillingAddressCountry(createdAccountDetails.country);
});

When('I click the "Save" button', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    console.log('Clicking Save button...');
    await accountsPage.clickSave();
});

Then('I should see the newly created account', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    console.log(`Verifying account ${createdAccountDetails.name} created...`);
    await accountsPage.verifyAccountCreated(createdAccountDetails.name);
});



When('I search for the created account', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    const randomName = getRandomAccountName();
    if (!randomName) {
        throw new Error('No account names found in storage to search for.');
    }
    searchedAccountName = randomName;
    console.log(`Searching for random account: ${searchedAccountName}`);
    await accountsPage.searchForAccount(searchedAccountName);
});

Then('I should see the account in the list', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    console.log(`Verifying account ${searchedAccountName} in list...`);
    await accountsPage.verifyAccountInList(searchedAccountName);
});
