describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'XLista de Actividades');
  })
})