
import userData from '../../fixtures/login.json'
import { loginPage } from '../../pageObjects/loginPage';
import { loginPageHelper } from '../../helpers/loginPageHelper';
import { loginPageAssertion } from '../../assertion/loginPageAssertion';

describe('Login', () => {

  before(() => {
    cy.visit('')
  });

  it('Check user login', () => {

    loginPageHelper.clickLogInLink();
    loginPage.formFields().scrollIntoView().wait(2000);
    loginPageHelper.enterEmail(userData.email);
    loginPageHelper.enterPassword(userData.password);
    loginPageHelper.clickLoginButton();
    loginPageAssertion.verifyUserLoggedIn(userData);
  });
});
