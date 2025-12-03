import { createBdd } from 'playwright-bdd';
import { HomePage } from '../../pages/homepage';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Then('I should see the {string} menu item', async ({ page }, menuItem: string) => {
    const homePage = new HomePage(page);
    console.log(`Verifying ${menuItem} menu item...`);
    switch (menuItem) {
        case 'Accounts':
            await expect(homePage.accountsLink).toBeVisible();
            break;
        case 'Contacts':
            await expect(homePage.contactsLink).toBeVisible();
            break;
        case 'Leads':
            await expect(homePage.leadsLink).toBeVisible();
            break;
        case 'Opportunities':
            await expect(homePage.opportunitiesLink).toBeVisible();
            break;
        // case 'Cases':
        //     await expect(homePage.casesLink).toBeVisible();
        //     break;
        default:
            throw new Error(`Menu item ${menuItem} not implemented`);
    }
});

When('I click on the {string} menu item', async ({ page }, menuItem: string) => {
    const homePage = new HomePage(page);
    console.log(`Clicking on ${menuItem} menu item...`);
    switch (menuItem) {
        case 'Accounts':
            await homePage.accountsLink.click();
            break;
        case 'Contacts':
            await homePage.contactsLink.click();
            break;
        case 'Leads':
            await homePage.leadsLink.click();
            break;
        case 'Opportunities':
            await homePage.opportunitiesLink.click();
            break;
        default:
            throw new Error(`Menu item ${menuItem} not implemented`);
    }
});

Then('I should be navigated to the {string} page', async ({ page }, pageName: string) => {
    console.log(`Verifying navigation to ${pageName} page...`);
    switch (pageName) {
        case 'Accounts':
            await expect(page).toHaveURL(/#Account/);
            break;
        case 'Contacts':
            await expect(page).toHaveURL(/#Contact/);
            break;
        case 'Leads':
            await expect(page).toHaveURL(/#Lead/);
            break;
        case 'Opportunities':
            await expect(page).toHaveURL(/#Opportunity/);
            break;
        default:
            throw new Error(`Page verification for ${pageName} not implemented`);
    }
});
