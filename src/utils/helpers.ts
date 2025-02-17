import { Page } from '@playwright/test';

export async function waitForText(page: Page, selector: string, text: string) {
  await page.waitForSelector(selector, { state: 'visible' });
  const elementText = await page.textContent(selector);
  return elementText === text;
}