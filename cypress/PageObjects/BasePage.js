export default class BasePage {

    //All methods will be static

    //Log method
    static logInfo(message){
        cy.log(message);
    }

    //To pause execution for certain seconds
    static pauseTest(seconds){
        cy.wait(seconds * 1000);
    }


}