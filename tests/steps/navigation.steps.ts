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
