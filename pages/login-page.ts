import { Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly emailInput = '[data-testid="email"]';
    readonly passwordInput = '[data-testid="password"]';
    readonly loginButton = '[data-testid="login-button"]';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("/login");
    }

    async login(email: string, password: string) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
