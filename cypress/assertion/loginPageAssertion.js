
import { loginPage } from '../pageObjects/loginPage';

class LoginPageAssertion {


    verifyNotification(successMessage) {
        cy.get('.bar-notification').find('p').should('be.visible').should('have.text', successMessage);
        cy.get('.bar-notification').find('.close').should('be.visible').click();
    }

    verifyUserLoggedIn(userdata, successMessage) {

        loginPage.myAccountLink().should('be.visible').click();
        loginPage.customerInfoSection().scrollIntoView().should('be.visible');
        loginPage.firstNameTextBox().should('be.visible').should('have.attr', 'value', userdata.firstName);
        loginPage.lastNameTextBox().should('be.visible').should('have.attr', 'value', userdata.lastName);
        loginPage.companyNameTextBox().should('be.visible').should('have.attr', 'value', userdata.company);
        loginPage.saveInfoButton().should('be.visible').click();
        this.verifyNotification(successMessage);
    }
}
export const loginPageAssertion = new LoginPageAssertion();
