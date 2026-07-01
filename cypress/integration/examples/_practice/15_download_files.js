/// <reference types="cypress-downloadfile"/>

//Learn how to download a file and store it
describe('Download Suite', () => {

    beforeEach(() => {

    })

    it('Download File Test 1', () => {

        cy.downloadFile('http://codenboxautomationlab.com/wp-content/uploads/2023/02/DemoData.csv', 'MyDownloads', 'testData.csv');

    })

})
