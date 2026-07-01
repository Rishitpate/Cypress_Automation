/// <reference types = "cypress"/>

describe('Test pop-up function', () => {

    //beforeEach hook which runs before every it block
    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/');
    })


    it('Test alert', () => {
        
        //Get the alert button and click on it
        cy.get('#alertbtn').click();

        //Cypress auto accepts the alert and assert the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page who love to learn automation');
        })
    })

    it('Test Confirm', () => {

        //Get the confirm button and click on it
        cy.get('#confirmbtn').click();

        //Assert the confirmation pop-up message
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');

            //To accept confirmation, return false if not accept confirmation
            return true;
        })
    })


})