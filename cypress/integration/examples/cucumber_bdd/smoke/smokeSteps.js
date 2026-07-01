import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../PageObjects/pages/HomePage";
import Single_ProductPage from "../../../../PageObjects/pages/Single_ProductPage";
import CheckoutPage from "../../../../PageObjects/pages/CheckoutPage";
import LoginPage from "../../../../PageObjects/pages/LoginPage";

//Reading config level global variables from config.js
const validEmail = Cypress.config('defaultEmail');
const ValidPassword = Cypress.config('defaultPassword');


When("I confirm to find all the 4 products", () => {
    // TODO: Implement validation of product count
    HomePage.displayAllProducts().should('have.length', 4);

});

When("I click on product name {string}", function (productName) {
    // TODO: Implement logic to click on the product name
    cy.clickElement(HomePage.filterProductList(productName));

});

When("I validate the product name is {string} on the product details page", function (productName) {
    // TODO: Implement product name validation
    Single_ProductPage.validateProductName(productName)

});

When("I validate the price is {string}", (price) => {
    // TODO: Implement price validation
    Single_ProductPage.validateProductPrice(price)
});

When("I ensure description tab is available,", () => {
    // TODO: Implement logic to ensure description tab is visible
    Single_ProductPage.validateDescriptionTab()

});

When("the description text is {string}", (descriptionText) => {
    // TODO: Implement description text validation
    Single_ProductPage.validateDescriptionText(descriptionText)
});

When("I write a 5 star review", function() {
    // TODO: Implement 5-star review writing
    cy.clickElement(Single_ProductPage.getReviewTab());
    //Initializing global variables, reading from fixture files
    Single_ProductPage.writeReview(this.data.name, this.data.review, 5);
});

When("I validate success message for submitting review", function() {
    // TODO: Implement success message validation after review submission
    Single_ProductPage.validateReviewSuccessMessage(this.data.reviewSuccessMessage);
});

When("I click on cart menu and validate", () => {
    // TODO: Implement cart menu click and validation
    Single_ProductPage.addtoCartAndValidate();
    Single_ProductPage.cartIconPopupValidation('x 1', '602.00', 'View Cart', 'Checkout');
});

When("I click on checkout link", () => {
    // TODO: Implement click on checkout link
    cy.clickElement(Single_ProductPage.proceedToCheckout());
});

When("I click on login page link", () => {
    // TODO: Implement navigation to login page
    cy.clickElement(CheckoutPage.proceedToLogin());
});

When("enter correct credentials and login", () => {
    // TODO: Implement login with correct credentials
    LoginPage.logInToAccount(validEmail, ValidPassword);
});

Then("validate the checkout page values", () => {
    // TODO: Implement validation for checkout page totals and details
    CheckoutPage.validateCheckoutValues();
});

