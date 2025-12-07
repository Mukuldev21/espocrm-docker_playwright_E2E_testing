import { test, expect } from '@playwright/test';
import { AccountsPage } from '../../pages/accountspage';
import { generateAccountDetails } from '../../fixtures/accountdetails';
import { saveAccountName } from '../../utils/fileUtils';

test.describe('Data Generation: Accounts', () => {

    test('Generate 5 random accounts', async ({ page }) => {
        test.setTimeout(120000); // Increase timeout for bulk creation
        const accountsPage = new AccountsPage(page);

        // Loop 5 times to create accounts
        for (let i = 0; i < 5; i++) {
            console.log(`\n--- Generating Account ${i + 1} of 5 ---`);

            // Navigate directly to Accounts list using hash
            // This is more reliable than clicking through menus which might be collapsed
            await page.goto('/#Account');
            await page.waitForLoadState('networkidle');

            // Wait for the Create Account button to be visible to ensure we are on the list
            await accountsPage.createAccountButton.waitFor({ state: 'visible', timeout: 10000 });

            // Click Create Account
            await accountsPage.clickCreateAccount();

            // Generate Details
            const accountDetails = generateAccountDetails();
            console.log(`Creating account: ${accountDetails.name}`);

            // Enter Details
            await accountsPage.enterAccountName(accountDetails.name);
            await accountsPage.enterAccountEmail(accountDetails.email);
            await accountsPage.enterAccountWebsite(accountDetails.website);
            await accountsPage.enterAccountPhoneNumber(accountDetails.phoneNumber);
            await accountsPage.enterBillingAddressStreet(accountDetails.street);
            await accountsPage.enterBillingAddressCity(accountDetails.city);
            await accountsPage.enterBillingAddressState(accountDetails.state);
            await accountsPage.enterBillingAddressPostalCode(accountDetails.postalCode);
            await accountsPage.enterBillingAddressCountry(accountDetails.country);
            await accountsPage.selectType(accountDetails.type);
            await accountsPage.selectIndustry(accountDetails.industry);
            await accountsPage.enterDescription(accountDetails.description);

            // Save
            await accountsPage.clickSave();

            // Verify creation (optional but good for stability)
            await accountsPage.verifyAccountCreated(accountDetails.name);

            // Save name to file
            saveAccountName(accountDetails.name);
            console.log(`Account ${accountDetails.name} created and saved.`);
        }
    });
});
