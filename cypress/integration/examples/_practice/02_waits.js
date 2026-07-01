/// <reference types="cypress"/>

//Between different it blocks, all data is cleared (cookies, localStorage etc), starts with blank page
//Basically every "it" block is a new test

describe('Learning Waits', () => {
    it('Load app and assert title using waits', () =>{
        
        cy.visit('https://codenboxautomationlab.com/practice/');
        
        //To assert the exact title match
        cy.title().should('eq', 'Automation Practice - CodenBox AutomationLab');

        //To exact the partial title match
        cy.title().should('include', 'CodenBox')

        //Adding wait
        cy.wait(3000);

        //To verify the url
        cy.url().should('include', 'codenboxautomationlab');

    })

    it.skip('Learning pause - should pause execution', ()=>{

        //Freezes the execution
        cy.pause();

        //Blank Page and hence this assertion will fail because element would not be found
        cy.get('input[value="radio2"]').check().should('be.checked');

    })


    it('after pausing, assert page title is visible', ()=> {

        cy.visit('https://codenboxautomationlab.com/practice/');

        //Two assertions using "should" and "and"
        cy.get('.page-title').should('be.visible').and('contain.text', 'Automation Practice');

    })

})
