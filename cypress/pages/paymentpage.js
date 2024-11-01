import { faker, Faker } from "@faker-js/faker";
class paymentPage {
    elements = {
        cartName: () => cy.get('[data-qa="name-on-card"]'),
        cartNumber: () => cy.get('[data-qa="card-number"]'),
        cartCVC: () => cy.get('[data-qa="cvc"]'),
        cartMM: () => cy.typeRandomMM('[data-qa="expiry-month"]'),
        cartYear: () => cy.typeRandomCartYears('[data-qa="expiry-year"]'),
        payBtn: () => cy.get('[data-qa="pay-button"]'),



    };

    typeCartName() {
        this.elements.cartName().type(faker.person.fullName());
    }
    typeCartNumber() {
        this.elements.cartNumber().type(faker.finance.creditCardNumber());
    }
    typeCartCVC() {
        this.elements.cartCVC().type(faker.finance.creditCardCVV());
    }
    typeCartMM() {
        this.elements.cartMM();
    }
    typeCartYear() {
        this.elements.cartYear();
    }
    clickPayBtn(){
        this.elements.payBtn().click();
    }
      
}

module.exports =  new paymentPage();