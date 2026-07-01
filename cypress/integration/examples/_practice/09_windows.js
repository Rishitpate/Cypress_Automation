
//How to work with multiple windows
//Since cypress doesn't allow to open new windows like window.getHandles() in selenium, we need to find a workaround

//One option is to open the new tab within the same window by manipulating the element itself
//Usually links which open new tabs have a href attribute and target attribute, by removing target attribute we can open in the same window

describe('Handling Tabs', () => {

    beforeEach(() => {
        cy.visit('https://codenboxautomationlab.com/practice/');
    })

    it('Opening tab in same window removing target attribute', () => {

        cy.get('#opentab').invoke('removeAttr', 'target').click();
        
        //Since the domain changed, we need to tell cypress about the new origin
        cy.origin("https://www.youtube.com/@CodenboxAutomationLab", () => {
            cy.get('span').contains('Codenbox AutomationLab').should('be.visible');
        });

       

    })

})