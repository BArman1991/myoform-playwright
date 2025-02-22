const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev-app.myoform.io",  // Замените на ваш URL
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Здесь можно добавить обработку событий
    },
  },
});
