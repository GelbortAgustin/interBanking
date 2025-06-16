export default class ResultsPage {
  resultsShouldInclude(text) {
    cy.get('.ui-search-item__title').should('contain.text', text);
  }

  shouldSeeNoResultsMessage(message) {
    cy.contains(message).should('be.visible');
  }
}