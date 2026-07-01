export default class Navbar {
    
    //All methods are static

    //click on the Logo method
    static clickOnLogo(){
        cy.get('img[title="Your Store"]').click();
    }

    //Search in the navbar
    static searchProduct(productName){
        cy.get('input[placeholder="Search"]').clear().type(productName + '{enter}');
    }

    static validateAllSearchResults(productName){
        cy.get('.description a').each(($el) => {
            cy.wrap($el).should('contain', productName)
        })
    }

    //Click on the My Account dropdown
    static clickOnMyAccount(){
        cy.contains('span','My Account').click();
    }

    //Click on the Register option from My Account dropdown
    static clickOnRegister(){
        cy.contains('a','Register').click();
    }

    //Click on the Login option from My Account dropdown
    static clickOnLogin(){
        cy.contains('a','Login').click();
    }

}