import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly errorText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.errorMessage = page.locator('div.message');
        this.errorText = page.locator('div.popover-content', { hasText: 'Username can not be empty' });
    }

    async goto() {
        await this.page.goto('/');
        await expect(this.page.getByRole('img')).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
}
