// File: cypress/integration/examples/cucumber_bdd/smoke/hooks.js
import { Before, BeforeAll, After, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

//Reading config level global variables from config.js
const baseUrl = Cypress.config('baseUrl');

BeforeAll(() => {
    cy.log('🔧 Running setup before all scenarios...');
    // Example: set up test data, seed DB, etc.
    //Clear cookies and local storage before the 1st test
    cy.clearCookies();
    cy.clearLocalStorage();
});

Before({ tags: "@smoke" },() => {
    cy.log('🚀 Running before each scenario...');

    //Visiting the url and asserting the url
    cy.visit(`${baseUrl}`);
    cy.url().should('include', 'demo')

    //Initializing global variables, reading from fixture files
    cy.fixture('example').then(function (data) {
        this.data = data
    })
});

After(() => {
    cy.log('🧹 Cleaning up after each scenario...');
    // Example: log out or reset app state
});

AfterAll(() => {
    cy.log('✅ All scenarios complete! Performing final teardown...');
    // Example: close connections, cleanup temp data
});

