import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    private emailInput = `input[placeholder="Email"]`;
    private passwordField = `input[placeholder="Password"]`;
    private loginButton = `'button[type="submit"]:has-text("Log In")'`;

    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.emailInput, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }
}
