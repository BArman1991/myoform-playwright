import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "src/tests",  // ✅ Ensure test files are in `tests/`
  use: {
    baseURL: "https://dev-app.myoform.io",  // ✅ Update with the real URL
    headless: false, 
  },
});
