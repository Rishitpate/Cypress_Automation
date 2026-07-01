import BasePage from "../BasePage.js";

export default class LoginPage extends BasePage {

    //Method defined in commands.js to log in to account
    static logInToAccount(email, password){
        cy.login(email, password);
    }
    
}