/// <reference types = "cypress"/>

// let validEmail = "babycarrot@gmail.com";
// let ValidPassword = "Trucker1";

let invalidEmail = "babycrot@gail.com";
let inValidPassword = "Trucr1";

//Reading config level global variables from config.js
let validEmail = Cypress.config('defaultEmail');
let ValidPassword = Cypress.config('defaultPassword');
let baseUrl = Cypress.config('baseUrl');

//Reading env variables from config.js
let qa = Cypress.env('QA').practiceUrl;

describe('Login Suite', () => {

    beforeEach(() => {

        //clear cookies 
        cy.clearCookies();

        //clear local storage
        cy.clearLocalStorage();

        //visit the url
        cy.visit(`${baseUrl}/index.php?route=account/login&language=en-gb`);
    })

    it('Login with valid creds & display my Account', () => {

        //call login function from command.js
        cy.login(validEmail, ValidPassword);

        //Get the title of the successful login landing page
        cy.get('h1').should('have.text', 'My Account');

        //Click on Logout button
        cy.contains('.list-group-item','Logout').click({force : true});

        //Validate the logout message
        cy.get('h1').should('have.text', 'Account Logout');

        //Click on the continue button
        cy.contains('Continue').click();

    })

    it('Login with invalid creds & validate the warning message', () => {

        //call login function from command.js for invalid email and password
        cy.login(invalidEmail, inValidPassword);

        //Get the warning message
        //Cypress auto accepts the alert and assert the alert message
        cy.on('window:alert', (str) => {
            expect(str).to.equal(' Warning: No match for E-Mail Address and/or Password. ');
        })

    })

    it('Login with reading enviornment variable from config file', () => {

        //Accessing the value of the enviornment variable
        cy.visit(qa);

        cy.url().should('include', 'practice');

    })

})
