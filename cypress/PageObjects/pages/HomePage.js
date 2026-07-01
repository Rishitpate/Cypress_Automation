import BasePage from "../BasePage.js";

export default class HomePage extends BasePage {

   //Define all the web element selectors
   static productThumb = ".product-thumb"

   //Display all products
   static displayAllProducts(){
        return cy.get(this.productThumb);
   }

   //Filter the product list to find the specific product
   static filterProductList(productName){
       return cy.get(this.productThumb).contains(`${productName}`)
   }

   

}