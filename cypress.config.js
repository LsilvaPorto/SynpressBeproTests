const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  env: {...process.env },
  userAgent: "synpress",
  chromeWebSecurity: true,
  viewportWidth: 1688,
  viewportHeight: 768,
  pageLoadTimeout: 120000,
  requestTimeout: 120000,
  defaultCommandTimeout: 60000,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
    },
    baseUrl: "https://afrodite.bepro.network/",
    supportFile: "cypress/support/e2e.js",
  },
});
