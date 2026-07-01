import HomePage from "../../../PageObjects/pages/HomePage";
import Single_ProductPage from "../../../PageObjects/pages/Single_ProductPage";
import CheckoutPage from "../../../PageObjects/pages/CheckoutPage";
import LoginPage from "../../../PageObjects/pages/LoginPage";
import Navbar from "../../../PageObjects/components/Navbar";

/// <reference types = "cypress"/>

//Reading config level global variables from config.js
    const validEmail = Cypress.config('defaultEmail');
    const ValidPassword = Cypress.config('defaultPassword');
    const baseUrl = Cypress.config('baseUrl');

//Smoke E2E Test for ecommerce website --> demo.codenbox.com
describe('Ecommerce Smoke Suite', () => {    

    before('Initializing fixture data and broswer', function() {

        //Clear cookies and local storage before the 1st test
        cy.clearCookies();
        cy.clearLocalStorage();

    })

    beforeEach(function() {

        //Visiting the url and asserting the url
        cy.visit(`${baseUrl}`);
        cy.url().should('include', 'demo')

        //Initializing global variables, reading from fixture files
        cy.fixture('example').then(function (data){
            this.data = data
        })

    })

    //to retry this test case if it fails
    it('Testing NavBar Component Test', {retries : 0}, function() {

        Navbar.searchProduct(this.data.productName)
        Navbar.validateAllSearchResults(this.data.productName)
        Navbar.clickOnMyAccount()
        Navbar.clickOnLogin()
        Navbar.clickOnLogo()
        
        //to fail the test case
        cy.title().should('contain', 'Dashgdfhgdf')

    })

    it('e-2-e smoke test', function() {

        //Get MacBook link from HomePage and click on it
        HomePage.displayAllProducts().should('have.length', 4);
        cy.clickElement(HomePage.filterProductList(this.data.productName));

        //Validate the product Name is MackBook
        Single_ProductPage.validateProductName(this.data.productName)

        //Validate the price
        Single_ProductPage.validateProductPrice('$602.00')

        //Validate the "Description" tab
        Single_ProductPage.validateDescriptionTab()

        //Validate the text under the Description tab
        Single_ProductPage.validateDescriptionText('Intel Core 2 Duo processor')

        //Write a review
        //Click on the review tab
        cy.clickElement(Single_ProductPage.getReviewTab());

        //Write the name and review, give 5 star rating, click Continue
        Single_ProductPage.writeReview(this.data.name, this.data.review, 5);
        
        //Validate the success message
        Single_ProductPage.validateReviewSuccessMessage(this.data.reviewSuccessMessage);
        
        //Click on Add to Cart and validate the success message
        Single_ProductPage.addtoCartAndValidate();

        //Validate the cart icon pop-up details such as the amount, price, view cart icon, checkout icon
        Single_ProductPage.cartIconPopupValidation('x 1', '602.00', 'View Cart', 'Checkout');
        
        //Proceed to Checkout
        cy.clickElement(Single_ProductPage.proceedToCheckout());

        //Proceed to Login from Checkout Page
        cy.clickElement(CheckoutPage.proceedToLogin());
        
        //call login function from command.js
        LoginPage.logInToAccount(validEmail, ValidPassword);

        //Validate the checkout page values
        CheckoutPage.validateCheckoutValues();       

    })

})