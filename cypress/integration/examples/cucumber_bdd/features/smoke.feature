
Feature: Ecommerce Smoke Test

    This is an end-to-end demo smoke test for cucumber-bdd project

    Background:
    I successfully browse to the application

@sanity
Scenario: As a automation developer, I should be able to perform e2e smoke test
When I confirm to find all the 4 products
And I click on product name 'MacBook'
And I validate the product name is 'MacBook' on the product details page
And I validate the price is '$602.00'
And I ensure description tab is available, 
And the description text is 'Intel Core 2 Duo processor'
And I write a 5 star review
And I validate success message for submitting review
And I click on cart menu and validate
And I click on checkout link
And I click on login page link
And enter correct credentials and login
Then validate the checkout page values

#@focus --> this tag is to isolate this scenario only and run it only
@smoke
Scenario Outline: As a automation developer, I should be able to perform e2e smoke test
When I confirm to find all the 4 products
And I click on product name '<productName>'
And I validate the product name is '<productName>' on the product details page
And I validate the price is '<price>'
And I ensure description tab is available, 
And the description text is '<description_text>'
And I write a 5 star review
And I validate success message for submitting review
And I click on cart menu and validate
And I click on checkout link
And I click on login page link
And enter correct credentials and login
Then validate the checkout page values

#Running it twice
Examples:
    | productName | price | description_text| 
    | MacBook | $602.00 | Intel Core 2 Duo processor |
    | MacBook | $602.00 | Intel Core 2 Duo processor |
