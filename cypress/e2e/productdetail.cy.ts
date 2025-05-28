describe('Product Detail Page Test', () => {
  it('should show correct description, price, and image name', () => {
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes("Cannot read properties of null")) {
        return false;
      }
    });

    cy.visit('https://r1070362-realbeans.myshopify.com');
    cy.get('#password').type('awaili');
    cy.get('button').click();

    cy.get('#CardLink-template--25358759952648__featured_collection-10257529241864')
      .click();

    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Blended coffee 5kg');

    cy.get('.price__regular > .price-item')
      .should('be.visible')
      .and('contain', '€55,00 EUR');

    cy.get('.product__media-item img')
      .should('have.attr', 'src')
      .and('include', 'RealBeansBlendBag.png');




    cy.get('#HeaderMenu-home > span')
      .click();

    cy.get('#CardLink-template--25358759952648__featured_collection-10257519706376')
      .click();

    cy.get('h1')
      .should('be.visible')
      .and('contain', 'Roasted coffee beans 5kg');

    cy.get('.price__regular > .price-item')
      .should('be.visible')
      .and('contain', '€40,00 EUR');

    cy.get('.product__media-item img')
      .should('have.attr', 'src')
      .and('include', 'RealBeansRoastedBag.png');

  });
});