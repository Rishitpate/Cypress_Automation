describe('Learning Aliases', () => {

    it('Alias Example 1', () => {
        cy.visit('https://codenboxautomationlab.com/wp-login.php');
        
        //Storing the username webelement in the alias "username" using .as() 
        cy.get('#user_login').as('username');

        //Accessing the alias variable
        cy.get('@username').clear().type('Invalid username', {delay: 20 });

        cy.get('#user_pass').as('password');
        cy.get('@password').clear().type('123456', {delay : 20});

    })

})