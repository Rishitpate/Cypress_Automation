//How to read and write to a file (file could be a json file, txt file, pdf file, even image)

/// <reference types = "cypress"/>

//Learn how to upload a file and store it
describe('Read/Write Test Suite', () => {

    beforeEach(() => {

    })

    it('Write to a txt file', () => {

        //Create a text file and write in it
        //writeFile ('path/to/message.txt', 'Hello World')
        cy.writeFile('sampleFile.txt', 'Hello World!\n' );
        cy.writeFile('sampleFile.txt', 'this is my sample file', {flag : 'a+'} );

        //Create json file in fixture and write
        cy.writeFile('cypress/fixtures/example.json', {

            name: 'Rishit',
            email: 'babycarrot@gmail.com',
            password: 'Trucker1'

        })

    })

    it('Read a txt file', () => {

        //Read the file
        cy.readFile('sampleFile.txt').should('exist').and('include', 'Hello');  

        //Read the json file, first load the fixture file
        cy.fixture('example.json').then((profile) => {

            expect(profile.name).to.contain('Rishit');
            expect(profile.email).to.contain('baby');
            expect(profile.password).to.contain('Trucker1');

        })

    })

    it('Login Test', () => {

        cy.visit('https://login.salesforce.com/?locale=ca');

        cy.fixture('example').then((profile) => {

            cy.get('#username').type(profile.email, {delay : 20});
            cy.get('#password').type(profile.password, {delay : 20});

        })

    })



})
