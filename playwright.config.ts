import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    baseURL: 'https://dev-app.myoform.io/sign-in', // Define your base URL here
    browserName: 'chromium',
    headless: false,
  },
});