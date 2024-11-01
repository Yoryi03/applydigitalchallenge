class cartPage {
    elements = {
        Checkout: () => cy.get('.col-sm-6 > .btn'),
        loginRegister: () => cy.get('.modal-body > :nth-child(2) > a > u'),
        carEnty: ()=> cy.get('.text-center > b'),
        navLogout: () => cy.get(':nth-child(4) > a'),

    };

    clickCheckout() {
        this.elements.Checkout().click();
    }
    clickLoginRegister() {
        this.elements.loginRegister().click();
    }
    carEntyText() {
        this.elements.carEnty().should("have.text","Cart is empty!");
    }
    clicknavLogout() {
        this.elements.navLogout().click();
    }


      
}

module.exports =  new cartPage();