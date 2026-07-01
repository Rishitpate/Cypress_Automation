/// <reference types = "cypress"/>

//Learning the concept of inheritance

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

describe('Page Scroll Suite', () => {

    it('Scrolling up and down', () => {

        HomePage.loadHomePage();
        HomePage.scrollToBottom();
        HomePage.wait();
        HomePage.scrollToTop();
        
    })

})
