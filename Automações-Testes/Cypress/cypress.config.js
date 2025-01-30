const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  video: true,
  videosFolder: 'cypress/videos',
  videoCompression: 32, 
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
