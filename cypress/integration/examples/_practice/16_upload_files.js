
/*
/// <reference types="cypress-downloadfile"/>
/// <reference types = "cypress"/>
*/

//Learn how to upload a file and store it
describe('Upload Suite', () => {

    beforeEach(() => {

    })

    it('Upload File Test 1', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');

        //selectFile("path_to_file_to_upload") method to upload a file
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json');

        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');

    })

})