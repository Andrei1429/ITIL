describe('Homepage UI Test', () => {
  it('should display the intro text and product list correctly', () => {
    cy.visit('https://r1070362-realbeans.myshopify.com');

    cy.get('#password').type('awaili');

    cy.get('button').click();

    //check homepage text
    cy.get('em')
      .should('be.visible')
      .and('contain', 'Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care.');

    //check product list
    cy.get('#Slider-template--25358759952648__featured_collection')
      .should('exist');

    cy.get('#Slider-template--25358759952648__featured_collection')
      .should('have.length.greaterThan', 0);

    cy.get('#CardLink-template--25358759952648__featured_collection-10257529241864')
      .should('be.visible')
      .and('contain', 'Blended coffee 5kg');

    cy.get('#CardLink-template--25358759952648__featured_collection-10257519706376')
      .should('be.visible')
      .and('contain', 'Roasted coffee beans 5kg');
  });
});