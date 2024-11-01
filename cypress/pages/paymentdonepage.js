class paymentDonePage {
    elements = {
        orderPlaceText: () => cy.get('[data-qa="order-placed"] > b'),
        continueBtn: () => cy.get('[data-qa="continue-button"]'),

    };

    orderPlaceT() {
        this.elements.orderPlaceText().should("have.text","Order Placed!");
    }
    clickContinueBtn() {
        this.elements.continueBtn().click();
    }
      
}

module.exports =  new paymentDonePage();