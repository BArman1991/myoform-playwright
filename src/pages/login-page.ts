import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput = '[data-testid="email"]';
  private passwordInput = '[data-testid="password"]';
  private loginButton = '[data-testid="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('');
  }

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.page.isVisible(this.loginButton);
  }
}
