import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/homePage";
import ResultsPage from "../pages/resultsPage";

const homePage = new HomePage();
const resultsPage = new ResultsPage();

Given("que estoy en la página principal de Mercado Libre", () => {
    homePage.visit();
});

When("busco {string}", (producto) => {
    homePage.search(producto);
});

Then("debería ver resultados que incluyan {string}", (textoEsperado) => {
    resultsPage.resultsShouldInclude(textoEsperado);
});

Then("debería ver un mensaje de {string}", (mensajeEsperado) => {
    resultsPage.shouldSeeNoResultsMessage(mensajeEsperado);
});

Given("que hago una búsqueda vía API por {string}", (producto) => {
    cy.request(https://api.mercadolibre.com/sites/MLA/search?q=${producto}).as('apiResponse')
    );
});

Then("los resultados deberían contener al menos un producto con {string}", (keyword) => {
    cy.get('@apiResponse').its('body.results').should((results) => {
        const matches = results.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
        expect(matches.length).to.be.greaterThan(0);
    });
});