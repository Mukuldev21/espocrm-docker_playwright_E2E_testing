import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
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
        // Extra step from codegen, possibly dismissing a dialog or menu
        await expect(this.page.getByRole('button').first()).toBeVisible();
        await this.page.getByRole('button').first().click();
    }
}
