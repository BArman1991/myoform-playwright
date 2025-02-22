const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    browser: "chrome",
    chromeWebSecurity: false, // Отключает некоторые ограничения безопасности
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-features=AutofillServerCommunication");
        }
        return launchOptions;
      });
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Здесь можно добавить обработку событий
    },
  },
});
