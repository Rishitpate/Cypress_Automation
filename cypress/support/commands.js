// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand')

//Custom login function
Cypress.Commands.add('login', (email, password) => {

    cy.get('#input-email').clear().type(email, {delay : 20});
    cy.get('#input-password').clear().type(password);
    cy.contains('button[type="submit"]','Login').click();

})

//To see if a particular is visible
Cypress.Commands.add('isVisible', (element) => {

    cy.get(element).should('be.visible');

})

//To see if a particular element not exists
Cypress.Commands.add('isHidden', (element) => {

    cy.get(element).should('not.exist');

})

//To type text in an input field
Cypress.Commands.add('typeText', (element, text) => {

    element.type(text);

})

//To click on a particular element
Cypress.Commands.add('clickElement', (element) => {

    element.click();

})