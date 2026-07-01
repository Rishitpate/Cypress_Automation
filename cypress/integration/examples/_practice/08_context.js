/// <reference types = "cypress"/>


describe('Test Suite 1', () => {

    context('Grouping Multiple its based on scenario logic 1', () =>{    

        it('visit automation site', () => {
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.url().should('include', 'practice')
        })

        it('should check page title', () => {
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('.page-title').should('be.visible');  
        })

        it('should check length of element', () => { 
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('.search-input').should('have.length', 2); 
        })

    })

    context('Grouping Multiple its based on scenario logic 2', () =>{

        it('should assert text of element', () => {
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('#openwindow').should('have.text', 'Open Window');
            cy.get('#opentab').should('have.attr', 'target', '_blank').and('have.attr', 'href').and('contain', 'youtube.com');
            
        })

        it.only('should check radiobutton is checked or not checked', function ()  {
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('input[value="radio2"]').check().should('be.checked');
            cy.get('input[value="radio1"]').should('not.be.checked');
        })

        it.only('dropdown assertions', () => {
            cy.visit('https://codenboxautomationlab.com/practice/');
            cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1');
        })

    })

})