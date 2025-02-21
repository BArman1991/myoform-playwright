import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  use: {
    baseURL: "https://dev-app.myoform.io/sign-in",
    headless: false,
  },
  reporter: [
    ["html", { open: "never" }],
    ["json", { outputFile: "playwright-report.json" }],
  ],
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
