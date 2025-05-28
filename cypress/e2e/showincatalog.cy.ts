describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://r1070362-realbeans.myshopify.com')

    cy.get('#password').type('awaili');

    cy.get('button').click();

    cy.get('.header__search > details > .header__icon > :nth-child(1) > :nth-child(1)').click()

    cy.get('input[type="search"]').type('Blended coffee');
    cy.contains('#predictive-search-option-product-1 > .predictive-search__item', 'coffee 5kg').click();

    cy.get('.header__search > details > .header__icon > :nth-child(1) > :nth-child(1)').click()

    cy.get('input[type="search"]').type('Roasted coffee beans');
    cy.contains('#predictive-search-option-product-1 > .predictive-search__item > .predictive-search__item-content', 'coffee beans 5kg').click();



  })
})