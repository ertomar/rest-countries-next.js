describe('Home page', () => {
  it('home page should have heading', () => {
    cy.visit('/');

    cy.get('h1').should('contain', 'Countries App');
  });

  it('home page should have at least one country card', () => {
    cy.visit('/');

    cy.get('.country-card').should('have.length.greaterThan', 0);
  });

  it('country card should have name, title, capital, population', () => {
    cy.visit('/');

    cy.get('.country-card')
      .first()
      .within(() => {
        cy.get('#countryCardTitle').should('exist');
        cy.get('#countryName').should('exist');
        cy.get('#countryCapital').should('exist');
        cy.get('#countryPopulation').should('exist');
      });
  });

  it('on clicking country card should navigate to country details', () => {
    cy.visit('/');

    cy.get('.country-card').first().click();

    cy.url().should('include', '/country/');
  });
});
