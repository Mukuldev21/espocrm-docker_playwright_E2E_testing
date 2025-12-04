import { Page } from '@playwright/test';

export async function updateAccountDetails(page: Page) {
    // Extract Name from accounts/view page
    // We use the header-title locator which contains the account name
    const name = await page.locator('.header-title').innerText();

    const domains = ['.com', '.co.in', '.co.us', '.net', '.org', '.io', '.tech'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];

    // Split the name at space and join using .
    // Example: "John Wick" -> "john.wick"
    const formattedName = name.trim().toLowerCase().split(/\s+/).join('.');

    const website = `www.${formattedName}${randomDomain}`;

    return {
        website
    };
}