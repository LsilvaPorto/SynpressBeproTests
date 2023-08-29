const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  chromeWebSecurity: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  viewportWidth: 1688,
  viewportHeight: 768,
  requestTimeout: 30000,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
    },
    baseUrl: "https://afrodite.taikai.network/",
    supportFile: "cypress/support/e2e.js",
  },
});
