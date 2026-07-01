//Two kinds of dropdowns: Static & Dynamic

//Static dropdown where the values are already there
//Dynamic dropdown is where you type something and the dropdown renders dynamically based on the input

/// <reference types = "cypress"/>

describe('Dropdown Suite', () => {

    it('static dropdown test 1', () => {

        cy.visit('https://codenboxautomationlab.com/practice/');

        //get the static dropdown box
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1');

    })

    //We are using .each() method to iterate over array of jquery/dom elements
    it('dynamic dropdown test 1', () => {
       
        cy.visit('https://codenboxautomationlab.com/practice/');

        //get the dynamic dropdown
        cy.get('[placeholder = "Type to Select Countries"]').type('can', {delay : 20}).as('DynamicdropdownValue')
        
        cy.get('.ui-menu-item > div').each(($el, index, $list) => {

            if($el.text() == 'Canada'){
                cy.wrap($el).click();
            }
        })

        cy.get('@DynamicdropdownValue').should('have.value', 'Canada');

    })

})