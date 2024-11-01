// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Custom command to generate random number from 1 to 20 this is use on the quantity of the product
Cypress.Commands.add('typeRandomNumber', (selector, min = 1, max = 20) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(selector).type(randomNumber.toString());
  });

  //Custom command to generate random number from 1 to 12 for the cartfield MM
Cypress.Commands.add('typeRandomMM', (selector, min = 1, max = 12) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(selector).type(randomNumber.toString());
  });  
  
  //Custom command to Select random number from 1 to 29 for the drogdownDays on the sigup form
Cypress.Commands.add('selectRandomDays', (selector, min = 1, max = 29) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(selector).select(randomNumber.toString());
  });
 
  //Custom command to select random year from 1985 to 2021 for the drogdownyYear on the sigup form
Cypress.Commands.add('selectRandomYears', (selector, min = 1985, max = 2021) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(selector).select(randomNumber.toString());
  });

  //Custom command to generate random number from 2025 to 2035 for the cartfield YYYY
Cypress.Commands.add('typeRandomCartYears', (selector, min = 2025, max = 2035) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get(selector).type(randomNumber.toString());
  });  

  //Custom command to select random option from the Country field on the sigup form
  Cypress.Commands.add('selectRandomOption', (selector) => {
    cy.get(selector)
      .find('option')
      .then((options) => {
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomValue = options[randomIndex].value;
        cy.get(selector).select(randomValue);
      });
  });  