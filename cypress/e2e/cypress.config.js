const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.steadily.com', // Optional, you can define a default base URL
    specPattern: 'cypress/e2e/**/*.cy.js', // Ensure it matches the location of your tests
  },
});
