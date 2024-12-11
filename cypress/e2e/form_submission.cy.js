describe('Webflow Homepage Form Test', () => {
  it('fills out the form and submits successfully', () => {
    // Visit your Webflow website
    cy.visit('https://www.steadily.com/');

    // Fill out form fields
    cy.get('#wf-form-raw_address input[name="address"]').type('123 Test Street');

    // Submit the form
    cy.get('#wf-form-raw_address > input').click();

    // Validate success (e.g., check for URL or message)
    cy.url().should('include', 'expected-url-path');
  });
});
