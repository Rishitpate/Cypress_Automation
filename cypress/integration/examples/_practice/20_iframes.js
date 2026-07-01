/// <reference types="cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe';

describe('Frame function', function (){

    beforeEach(function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
    })

    it('Test iframe', function(){
        cy.frameLoaded('#courses-iframe') // Load the iframe to be able to interact with it

        //Use the find() to find the descendant of the previous element
        cy.iframe().find('.elementor-button-text').eq(1).click() // Click on the first button in the iframe
        cy.iframe().find('span[class="ct-text-inner"] cite').should('have.text', 'Courses') // Verify the text in the iframe   
        })
    
    // You can use .find('css_selector'), .filter('css_selector'), .eq(index), .contains(text) to filter further from a DOM element
    

})