
import { loginPage } from '../pageObjects/loginPage';
import { loginPageHelper } from '../helpers/loginPageHelper';
import { loginPageAssertion } from '../assertion/loginPageAssertion';


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


Cypress.Commands.add('login', (userData) => {
  const successMessage = 'The customer info has been updated successfully.'

  cy.visit('');
  loginPageHelper.clickLogInLink();
  loginPage.formFields().scrollIntoView().wait(2000);
  loginPageHelper.enterEmail(userData.email);
  loginPageHelper.enterPassword(userData.password);
  loginPageHelper.clickLoginButton();
});