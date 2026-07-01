//How to scroll up until an element

/// <reference types = "cypress"/>

describe('Page Scroll into View', () => {

    beforeEach(function () {
        cy.visit('https://codenboxautomationlab.com');
    })

    it('Scrolling to an element up and down', function() {

        //scrollIntoView --> to bottom
        cy.get('button a').as('connectElement').scrollIntoView({duration : 3000});
        cy.get('@connectElement').should('be.visible');

        cy.wait(3000);

        //scrollIntoView --> to the top
        cy.get('.entry-content > p > strong').as('topElement').scrollIntoView({duration: 3000});


    })

})