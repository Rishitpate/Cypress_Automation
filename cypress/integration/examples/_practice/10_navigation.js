//How to navigate the browser like forward or backwards

///<reference types = "cypress"/>

describe('Test navigation function', function(){

    beforeEach(function(){
        cy.visit('https://codenboxautomationlab.com/practice/');
        cy.url().should('contain', 'practice')
    })

    it('Test to navigate back and forward', function(){

        //Click on the Udemy courses link
        cy.contains('Udemy Courses').click({force : true});

        //Validate the page title of the new page
        cy.get('.entry-content > h2 > a').as('Udemy Course Title').should('contain.text', 'Master Selenium WebDriver-Java: Scratch to Advance')

        //Navigate backwards
        cy.go('back');

        cy.title().should('contain', 'Automation Practice');

        //Navigate forward
        cy.go('forward');

        cy.get('@Udemy Course Title').should('contain.text', 'Master Selenium WebDriver-Java: Scratch to Advance');


    })

})

