import BasePage from "../BasePage.js";

export default class CheckoutPage extends BasePage {
    
    static proceedToLogin(){
        return cy.get('form[id="form-register"] p a strong')
    }

    static validateCheckoutValues(){ {
        //Implementation for validating checkout values can be added here
        let totalSum = 0;
        let expectedSum = 0;

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
    }
    
}
}