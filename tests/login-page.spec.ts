import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import dotenv from 'dotenv';

test("User should be able to log in", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    if (!username || !password) {
      throw new Error('USERNAME and PASSWORD environment variables must be set');
    }
    await loginPage.login(username, password);

    await expect(page).toHaveURL("/dashboard");
});
