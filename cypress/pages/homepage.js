class homePage {
    elements = {
        navProducts: () => cy.get('.shop-menu > .nav > :nth-child(2) > a'),
        navCart: () => cy.get('.shop-menu > .nav > :nth-child(3) > a'),
    };
    
        
    

    clickNavProducts() {
        this.elements.navProducts().click();
      }
    clickNavCart() {
        this.elements.navCart().click();
      }
}

module.exports =  new homePage();