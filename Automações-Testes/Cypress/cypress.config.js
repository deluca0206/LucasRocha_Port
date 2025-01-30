const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videosFolder: 'cypress/videos',
  videoCompression: 32, 
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
