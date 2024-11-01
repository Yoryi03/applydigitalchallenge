class accountCPage {
    elements = {
        continueBtn: () => cy.get('[data-qa="continue-button"]'),
        AccountCreateText: () => cy.get('b'),

    };

    clickContinue() {
        this.elements.continueBtn().click();
    }
    accountcreatep() {
        this.elements.AccountCreateText().should('have.text', 'Account Created!');
    }
      
}

module.exports =  new accountCPage();