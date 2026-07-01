describe('Checkbox Test Suite', () => {

    it('Checkbox Scenario 1', () => {

        cy.visit('https://codenboxautomationlab.com/practice/');

        //Check the first checkbox and check if it's checked and the value attribute
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');

        //unchecked the option 1 box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //check multiple options using common attribute
        cy.get('input[type = "checkbox"]').check(['option1', 'option2']);

    })


})