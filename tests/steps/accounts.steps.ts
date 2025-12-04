import { createBdd } from 'playwright-bdd';
import { AccountsPage } from '../../pages/accountspage';
import { expect } from '@playwright/test';
import { generateAccountDetails } from '../../fixtures/accountdetails';
import { getaccount_searchdata } from '../../fixtures/search_accountdata';
import { saveAccountName } from '../../utils/fileUtils';

const { Given, When, Then } = createBdd();

let createdAccountDetails: { name: string, email: string };

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
    const accountSearchData = getaccount_searchdata();
    console.log(`Searching for account: ${accountSearchData.name}`);
    await accountsPage.searchForAccount(accountSearchData.name);
});

Then('I should see the account in the list', async ({ page }) => {
    const accountsPage = new AccountsPage(page);
    const accountSearchData = getaccount_searchdata();
    console.log(`Verifying account ${accountSearchData.name} in list...`);
    await accountsPage.verifyAccountInList(accountSearchData.name);
});
