import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/landing-page';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Open home page', async () => {
    const headerText = await homePage.getHeaderText();
    expect(headerText).toMatch(/Welcome Back/);

    const spanLogIn = await homePage.getSpanLogInIsShownUnderH2();
    expect(spanLogIn).toMatch(/Log in to your account/);

  });

  test('Log In', async () => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    if (!username || !password) {
      throw new Error('USERNAME and PASSWORD environment variables must be set');
    }
    await homePage.login(username, password);
    const welcomeBanner = homePage.page.locator('[class*=-greetings]:has-text("Hi Arman!")');
    await expect(welcomeBanner).toBeVisible();
  });
});