const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome', // specify the reporter name
    reporterOptions: {
      reportDir: 'cypress/reports', // directory for storing reports
      overwrite: true,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true
    }
  }
});