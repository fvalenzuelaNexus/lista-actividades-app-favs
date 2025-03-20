import { e2e } from '../support/constantes';

describe('Agregar una Actividad', () => {
  it('Verifica que se pueda agregar una nueva actividad a la lista.', () => {
    // Visitar la página principal
    cy.visit('/')
    cy.validacionInicial();
    
    // Agregar una actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).click();
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');

    cy.get(e2e.BOTON_AGREGAR).click();

    cy.get(e2e.TEXT_AREA).should('have.text', 'Actividad de prueba');
  })
})

