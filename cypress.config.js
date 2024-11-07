const { allureCypress } = require('allure-cypress/reporter');
const { defineConfig } = require('cypress');
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
          allureCypress(on, config, {
            resultsDir: "allure-results",
          });
          return config;
        },
      },
});