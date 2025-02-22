import { test, expect } from "@playwright/test";
import { LandingPage } from "../pages/landing-page"; // ✅ Убедитесь, что регистр символов совпадает

test("Should open the landing page and verify the title", async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.goto();
  
  // ✅ Проверяем заголовок страницы
  await expect(page).toHaveTitle(/Landing Page/i);
});
