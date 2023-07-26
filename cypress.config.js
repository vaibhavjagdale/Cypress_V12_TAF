const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    "baseUrl" : 'https://demo.nopcommerce.com/',
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 20000,
    "video": false,
    "screenshotsFolder": "cypress/screenshots",
  },
});
