//How to hover over an element

/// <reference types = "cypress"/>

describe('Hovering over elements', () => {

    beforeEach(()=> {
        cy.visit('https://codenboxautomationlab.com/practice/');

    })

    it('Hovering using jQuery show method', () => {

        //Get the parent element holding the hover elements and invoke the show jQuery method
        cy.get('.mouse-hover-content').invoke('show');

        //Select the option which opens after hovering
        cy.contains('Top').click();

        cy.url().should('contain','top');

    })

})