const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.steadily.com', // Optional, sets the default base URL
    specPattern: 'cypress/e2e/**/*.cy.js', // Look for tests in the cypress/e2e/ directory
    supportFile: false, // Optional, disable support files if not used
  },
});
