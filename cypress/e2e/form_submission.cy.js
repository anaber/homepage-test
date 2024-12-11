describe('Webflow Homepage Form Test', () => {
  it('fills out the form and submits successfully', () => {
    // Visit your Webflow website
    cy.visit('https://www.steadily.com/');

    // Fill out form fields
    cy.get('#auto-complete-address').type('400 105th Ave, Oakland, CA 94603');

    // Submit the form
    cy.get('#wf-form-raw_address > input').click();

    // Validate URL change
    cy.url().should('include', 'https://quote.steadily.com/dwelling_single_funnel/lead/');

    // Ensure the target page loads correctly (not a 404)
    cy.get('body').should('not.contain', '404'); // Check for absence of "404" in the body

    // Validate specific content or element on the loaded page
    cy.contains('So simple').should('be.visible'); // Replace with text or selector unique to the target page
  });
});

describe('Webflow Texas Form Test', () => {
  it('fills out the form and submits successfully', () => {
    // Visit your Webflow website
    cy.visit('https://www.steadily.com/states/texas');

    // Fill out form fields
    cy.get('#raw_address-2').type('680 Ramos St, Austin, TX 78702');

    // Add a delay before clicking the submit button
    cy.wait(1000); // 1 second delay

    // Submit the form
    cy.get('#wf-form-raw_address > input').click();

    // Validate URL change
    cy.url().should('include', 'https://quote.steadily.com/dwelling_single_funnel/lead/');

    // Ensure the target page loads correctly (not a 404)
    cy.get('body').should('not.contain', '404'); // Check for absence of "404" in the body

    // Validate specific content or element on the loaded page
    cy.contains('So simple').should('be.visible'); // Replace with text or selector unique to the target page
  });
});
