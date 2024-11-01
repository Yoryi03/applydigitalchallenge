class checkouPage {
    elements = {
        placeOrder: () => cy.get(':nth-child(7) > .btn'),
        loginRegister: () => cy.get('.modal-body > :nth-child(2) > a > u'),

    };

    clickPlaceOrder() {
        this.elements.placeOrder().click();
    }
    clickLoginRegister() {
        this.elements.loginRegister().click();
    }
      
}

module.exports =  new checkouPage();