describe('MainPage Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    // cy.contains('STALIN MAZA')
    // cy.contains('sandbox app is running!')
    cy.url().should('not.include', 'about');
  })
})
