describe('Sort by price high and low  Test', () => {
  it('should sort prices in ascending order after clicking sort button', () => {
    cy.visit('https://r1070362-realbeans.myshopify.com');

    cy.get('#password').type('awaili');

    cy.get('button').click();

    // Click the sorting button
    cy.get('#HeaderMenu-catalog > span').click();

    cy.get('#SortBy').select('Price, low to high');
    cy.get('#SortBy').select('Price, high to low');

    // Get the prices from the table
    cy.get('#Filter-Price-GTE').clear({ force: true }).type('40', { force: true });
    cy.get('#Filter-Price-LTE').clear({ force: true }).type('55', { force: true });


      
  });
});
export{};
