import BasePage from "../BasePage.js";

export default class Single_ProductPage extends BasePage {

    static validateProductName(productName){
        return cy.get('h1').should('be.visible').and('have.text', `${productName}`)
    }

    static validateProductPrice(price){
        return cy.get('.price-new').should('be.visible').and('have.text', price)
    }

    static validateDescriptionTab(){
        return cy.get('ul.nav.nav-tabs li').eq(0).should('be.visible')
    }

    static validateDescriptionText(textMessage){
        cy.get('div[id="tab-description"] p').eq(0).should('be.visible').and('contain.text', textMessage)
    }

    static getReviewTab(){
        return cy.get('ul.nav.nav-tabs li').eq(2)
    }

    static writeReview(name, reviewText, rating){
        cy.get('#input-author').type(name);
        cy.get('#input-text').type(reviewText);
        cy.get('[value="'+rating+'"]').click();
        cy.get('[type="submit"]').contains('Continue').click();
    }

    static validateReviewSuccessMessage(successMessage){
        cy.get('#alert').contains(successMessage).should('be.visible');
    }

    static addtoCartAndValidate(){

        cy.get('#button-cart').click()
        cy.get('#alert').contains('Success: You have added').should('be.visible')
        cy.get('.dropdown.d-grid button').eq(0).as('CartIcon').scrollIntoView({duration : 3000})
        cy.get('@CartIcon').click()

    }

    static cartIconPopupValidation(amount, price, viewCartText, checkoutText){
        cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').should('be.visible')
        .and('contain', amount)
        .and('contain', price)
        .and('contain', viewCartText)
        .and('contain', checkoutText)
    }

    static proceedToCheckout(){
        return cy.contains('a', 'Checkout')
    }

    

}