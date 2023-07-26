
class LoginPage {

    logInLink() {
        return cy.get('.ico-login');
    }

    formFields() {
        return cy.get('.form-fields');
    }

    emailField() {
        return cy.get('#Email');
    }

    passwordField() {
        return cy.get('#Password');
    }

    loginButton() {
        return cy.get('.button-1.login-button');
    }

    myAccountLink() {
        return cy.get('.ico-account');
    }

    customerInfoSection() {
        return cy.get('.customer-info-page');
    }

    firstNameTextBox() {
        return cy.get('#FirstName');
    }

    lastNameTextBox() {
        return cy.get('#LastName');
    }

    companyNameTextBox() {
        return cy.get('#Company');
    }

    saveInfoButton() {
        return cy.get('#save-info-button');
    }
}
export const loginPage = new LoginPage();
