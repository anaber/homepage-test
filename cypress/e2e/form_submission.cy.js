describe('Webflow Homepage Form Test', () => {
  it('fills out the form and submits successfully', () => {
    // Visit your Webflow website
    cy.visit('https://www.steadily.com/');

    // Fill out form fields
    cy.get('#wf-form-raw_address input[name="address"]').type('400 105th Ave, Oakland, CA 94603');

    // Submit the form
    cy.get('#wf-form-raw_address > input').click();

    // Validate URL change
    cy.url().should('include', 'https://quote.steadily.com/dwelling_single_funnel/lead/');

    // Ensure the target page loads correctly (not a 404)
    cy.get('body').should('not.contain', '404'); // Check for absence of "404" in the body

    // Validate specific content or element on the loaded page
    cy.contains('Start Your Quote').should('be.visible'); // Replace with text or selector unique to the target page
  });
});
