/// <reference types = "cypress"/>

//Learning the concept of hooks

//Parent class
class BaseClass {

    //static methods
    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com/')
    }

    static wait(){
        cy.wait(3000);
    }

}

//Child class inherits all the methods and properties
class HomePage extends BaseClass {

    static scrollToBottom(){
        //scrollIntoView --> to bottom
        cy.get('button a').as('connectElement').scrollIntoView({duration : 3000});
        cy.get('@connectElement').should('be.visible');
    }

    static scrollToTop(){
         cy.get('.entry-content > p > strong').as('topElement').scrollIntoView({duration: 3000});
         cy.get('@topElement').should('be.visible');
    }

}

//Define Test cases

describe('Page Scroll Suite with Hooks', () => {

    before(() => {

        //runs once before all the test cases executed
        //setup test data
        //set or reset the database

        //Loading the homepage
        HomePage.loadHomePage();

    })

    after(() => {

        //runs once after all the tests ("it blocks") have been executed
        //test clean up
        //clean cookies
        cy.clearCookies()
        cy.clearLocalStorage()

    })

    beforeEach(() => {

        //runs before each "it" block in the describe
        //refer to table.js file to see

    })

    afterEach(() => {

        //runs after each it block in the describe

    })

    it('Scrolling up and down', () => {

        
        HomePage.scrollToBottom();
        HomePage.wait();
        HomePage.scrollToTop();
        
    })

})
