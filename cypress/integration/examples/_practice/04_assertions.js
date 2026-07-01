/// <reference types = "cypress"/>

//it.skip() --> to skip an it block
//it.only() --> to only run that specific it block

describe('Should Assertion', () => {

    it('visit automation site', () => {

        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.url().should('include', 'practice')

    })

    //Skip this test case
    it.skip('should check page title', () => {
       
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.get('.page-title').should('be.visible');
        
    })

    it('should check length of element', () => {
        
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.get('.search-input').should('have.length', 2);
        
    })

    it('should assert text of element', () => {
        
        cy.visit('https://codenboxautomationlab.com/practice/');

        //Asserting text of element
        cy.get('#openwindow').should('have.text', 'Open Window');

        //Asserting two attributes, target and href and their values
        cy.get('#opentab').should('have.attr', 'target', '_blank').and('have.attr', 'href').and('contain', 'youtube.com');
        
    })

    it.only('should check radiobutton is checked or not checked', function ()  {
        
        //Conditional skip based on browser
        if(Cypress.browser.name === 'edge'){
        this.skip();
        }

        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.get('input[value="radio2"]').check().should('be.checked');
        cy.get('input[value="radio1"]').should('not.be.checked');
    })

    it.only('dropdown assertions', () => {
        
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1');
        
    })

})


// ==================================
// Different Types of Assertions
// ==================================

// .should('exist')
// .should('not.exist')
// .should('be.visible')
// .should('not.be.visible')
// .should('be.enabled')
// .should('be.disabled')
// .should('be.checked')

// These 3 methods work for assertions on dom elements having text 
// .should('have.text', 'some_text_to_verify') --> Exact text
// .should('contain', 'some_text_to_verify') --> Partial text
// .should('contain.text', 'some_text_to_verify') --> Contain text


// .should('have.value', 'inputted_value') --> to verify the value entered in an input box
// .should('have.class', 'class_name')
// .should('have.attr', 'attr_key', 'attr_value')
// .should('have.css')
// .should('have.length', 'number')

// These 3 methods work for assertions on url or any other string assertions 
// .should('eq', 'string_to_verify') --------> exact match of url
// .should('include', 'string_to_verify') ---> partial match of url
// .should('match') --> matching url with regex