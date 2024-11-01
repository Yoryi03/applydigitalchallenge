import { faker, Faker } from "@faker-js/faker";
class loginRegisterPage {
    elements = {
        loginEmail: () => cy.get('[data-qa="login-email"]'),
        loginPasswordl:() => cy.get('[data-qa="login-password"]'),
        loginBtn:  () => cy.get('[data-qa="login-button"]'),
        sigupName: () => cy.get('[data-qa="signup-name"]'),
        sigupEmail:() => cy.get('[data-qa="signup-email"]'),
        sigupBtn:  () => cy.get('[data-qa="signup-button"]'),
        genderRadioBtn: () => cy.get('#id_gender1'),
        sigupPassword: () => cy.get('[data-qa="password"]'),
        sigupDays: () => cy.selectRandomDays('[data-qa="days"]'),
        sigupMonth: () => cy.get('[data-qa="months"]'),
        sigupYears: () => cy.selectRandomYears('[data-qa="years"]'),
        sigupFirstName: () => cy.get('[data-qa="first_name"]'),
        sigupLastName: () => cy.get('[data-qa="last_name"]'),  
        sigupCompany: () => cy.get('[data-qa="company"]'),
        sigupAddress: () => cy.get('[data-qa="address"]'),   
        sigupCountry: () => cy.selectRandomOption('[data-qa="country"]'),
        sigupState: () => cy.get('[data-qa="state"]'), 
        sigupCity: () => cy.get('[data-qa="city"]'),
        sigupZipCode: () => cy.get('[data-qa="zipcode"]'),
        sigupMobileNumber: () => cy.get('[data-qa="mobile_number"]'),
        sigupCreateAcountBtn: () => cy.get('[data-qa="create-account"]'),
        loginForm: () => cy.get('.login-form > form > p'),

        
    };
    
    typeloginEmail(username) {
        this.elements.loginEmail().type(username);
    }
    typeloginPassword(password) {
        this.elements.loginPasswordl().type(password);
    }
    clickloginBtn(){
        this.elements.loginBtn().click();
    }
    typeSigupName() {
        this.elements.sigupName().type(faker.name.firstName());
    }
    typeSigupEmail() {
        this.elements.sigupEmail().type(faker.internet.email());
    }
    clickSigupBtn(){
        this.elements.sigupBtn().click();
    }
    clickGenderBtn(){
        this.elements.genderRadioBtn().click();
    }
    typeSigupPassword() {
        this.elements.sigupPassword().type(faker.internet.password());
    }
    typesSigupDays() {
        this.elements.sigupDays();
    }
    typesSigupMoth(){
        this.elements.sigupMonth().select(faker.date.month());
    }
    typesSigupYears() {
        this.elements.sigupYears();
    }
    typeSigupFName() {
        this.elements.sigupFirstName().type(faker.name.firstName());
    }
    typeSigupLName() {
        this.elements.sigupLastName().type(faker.name.lastName());
    }
    typesigupCompany() {
        this.elements.sigupCompany().type(faker.company.name());
    }
    typesigupAddress() {
        this.elements.sigupAddress().type(faker.location.streetAddress());
    }
    typesigupCountry() {
        this.elements.sigupCountry();
    }
    typesigupState() {
        this.elements.sigupState().type(faker.location.state());
    }
    typesigupCity() {
        this.elements.sigupCity().type(faker.location.city());
    }
    typesigupZipCode() {
        this.elements.sigupZipCode().type(faker.location.zipCode());
    }
    typsigupMobileNumber() {
        this.elements.sigupMobileNumber().type(faker.phone.number());
    }
    clickSigupCreateAcountBtn(){
        this.elements.sigupCreateAcountBtn().click();
    }
    textloginForm(){
        this.elements.loginForm().should("contains.text","Your email or password is incorrect!");
    }
      
}

module.exports =  new loginRegisterPage();