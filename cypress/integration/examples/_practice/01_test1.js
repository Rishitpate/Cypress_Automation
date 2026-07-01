/// <reference types="cypress"/>

describe('My First Test Suite', () => {
    it('Visit our website', () => {

        //Visit the website
        cy.visit("https://codenboxautomationlab.com/practice/");

        //How to check a radio button
        cy.get('input[value="radio2"]').check().should('be.checked');

        //Find the searchbox and type "automation" in it
        cy.get('#search-2 > #searchform > .search-input').type('automation').should('have.value', 'automation');        

    })
});