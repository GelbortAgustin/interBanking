export default class HomePage {
  visit() {
    cy.visit('https://www.mercadolibre.com.ar');
    cy.get('input[name="as_word"]').should('be.visible'); // espera el input
  }

  search(producto) {
    cy.get('input[name="as_word"]').type(producto);
    cy.get('button[type="submit"]').click();
  }
}