import { Page, Locator } from "@playwright/test";

export class LandingPage {
  readonly page: Page;
  readonly h2Header: Locator;
  readonly spanLogIn: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.h2Header = page.locator("h2");
    this.spanLogIn = page.locator('span:has-text("Log in to your account")');
    this.emailInput = page.locator('input[placeholder="Email"]');
    this.passwordInput = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]:has-text("Log In")');
  }

  async goto() {
    await this.page.goto("/");
  }

  async getHeaderText() {
    return this.h2Header.textContent();
  }

  async getSpanLogInIsShownUnderH2() {
    return this.spanLogIn.textContent();
  }

  async login(username: string, password: string) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async waitForTimeout(timeout: number) {
    await this.page.waitForTimeout(timeout);
  }
}
