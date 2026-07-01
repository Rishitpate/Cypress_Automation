// How to automate tables in Cypress

/// <reference types = "cypress"/>

describe('Table Suite', () => {

    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/');
    })

    //Find Appium course name
    it.skip('Find a random courseName present in the table using each', async () => {

        let found = false;

        await cy.get('table > tbody > tr > td').each(($row) => {

            const text = $row.text();

            if(text.includes('Appium')){
                found = true;
            }
        })

        expect(found).to.be.true;

    })

    //Find Appium course name
    it('Find a random courseName present in the table using contain', async () => {
        
       //Simpler way than above test to ensure table has right data
       cy.get('table > tbody > tr').contains('td', 'Appium').should('be.visible');

    })

    //Conditional Logic: If course name is "Webservices" then price is 30
    it('Find price based on course', () => {

        //Get the correct column using the same it block above, from there take the next sibling which would be the third column
        cy.get('table > tbody > tr').contains('td', 'WebServices').should('be.visible').next().should('have.text', '30');

    })

})