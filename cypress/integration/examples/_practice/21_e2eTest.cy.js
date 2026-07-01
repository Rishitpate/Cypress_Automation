/// <reference types = "cypress"/>

//Smoke E2E Test for ecommerce website --> demo.codenbox.com

//Declaring global variables to initialize in the it block
let productName = ""; 
let reviewName = "";
let reviewText = "";

//Reading config level global variables from config.js
let validEmail = Cypress.config('defaultEmail');
let ValidPassword = Cypress.config('defaultPassword');
let baseUrl = Cypress.config('baseUrl');


describe('Ecommerce Smoke Suite', () => {

    before(() => {

        //Clear cookies and local storage before the 1st test
        cy.clearCookies();
        cy.clearLocalStorage();

        //Initializing global variables, reading from fixture files
        cy.fixture('example.json').then((data) => {
            productName = data.productName;
            reviewName = data.name;
            reviewText = data.review;
        })

    })

    it('e-2-e smoke test', () => {

        //Visiting the url and asserting the url
        cy.visit(`${baseUrl}`);
        cy.url().should('include', 'demo')

        //Get MacBook link
        cy.get('.product-thumb').should('have.length', 4)
        cy.get('.product-thumb').contains(`${productName}`).click();

        //Validate the product Name is MackBook
        cy.get('h1').should('be.visible').and('have.text', `${productName}`);

        //Validate the price
        cy.get('.price-new').should('be.visible').and('have.text', '$602.00')

        //Validate the "Description" tab
        cy.get('ul.nav.nav-tabs li').eq(0).should('be.visible')

        //Validate the text under the Description tab
        cy.get('div[id="tab-description"] p').eq(0).should('be.visible').and('contain.text', 'Intel Core 2 Duo processor')

        //Write a review
        //Click on the review tab
        cy.get('ul.nav.nav-tabs li').eq(2).click()

        //Write the name and review, give 5 star rating, click Continue
        cy.get('#input-author').type(`${reviewName}`);
        cy.get('#input-text').type(`${reviewText}`);
        cy.get('[value="5"]').click();
        cy.get('[type="submit"]').contains('Continue').click();
        
        //Validate the success message
        cy.get('#alert').contains('Thank you for your review. It has been submitted to the webmaster for approval.').should('be.visible');

        //Click on Add to Cart and validate the success message
        cy.get('#button-cart').click().then( async () => {
            cy.get('#alert').contains('Success: You have added').should('be.visible')
            //Click on the cart icon
            await cy.get('.dropdown.d-grid button').eq(0).as('CartIcon').scrollIntoView({duration : 3000})
            cy.get('@CartIcon').click()
        });

        //Validate the cart icon pop-up details such as the amount, price, view cart icon, checkout icon
        cy.get('.dropdown-menu.dropdown-menu-end.p-2.show').should('be.visible')
        .and('contain', 'x 1')
        .and('contain', '602.00')
        .and('contain', 'View Cart')
        .and('contain', 'Checkout')

        cy.contains('a', 'Checkout').click();

        //Login to account
        cy.get('form[id="form-register"] p a strong').click()
        
        //call login function from command.js
        cy.login(validEmail, ValidPassword);

        let totalSum = 0;
        let expectedSum = 0;

        //Validate the checkout page values
        cy.get('table[class="table table-bordered table-hover"] tfoot tr td').each(($el) => {

            if($el.text().includes('Sub-Total') || $el.text().includes('Eco Tax') || $el.text().includes('VAT')){
                //Get the sibling element dollar value
                let dollarValue = parseFloat($el.next().text().replace(/[$,]/g, '').trim())
                totalSum += dollarValue
                cy.log("totalsum", totalSum);
            }

            if($el.text() == 'Total'){
                let TotalValue = parseFloat($el.next().text().replace(/[$,]/g, '').trim())
                expectedSum = TotalValue;
                cy.log("expectedsum", expectedSum);
            }

        }).then(() => {
            expect(totalSum).to.be.eq(expectedSum);
        })

        
        


    })

})

//==================================================
// Common Assertion Chains You'll See in Cypress
//==================================================

// expect(value).to.equal(...)
// expect(value).to.not.equal(...)
// expect(value).to.be.true
// expect(value).to.be.false
// expect(value).to.be.null
// expect(value).to.be.undefined
// expect(value).to.exist
// expect(value).to.contain(...)
// expect(value).to.include(...)
// expect(value).to.match(...)
// expect(value).to.have.length(...)
// expect(value).to.have.property(...)
// expect(value).to.deep.equal(...)
// expect(value).to.be.greaterThan(...)
// expect(value).to.be.lessThan(...)
// expect(value).to.be.within(...)
// expect(value).to.be.closeTo(...)
