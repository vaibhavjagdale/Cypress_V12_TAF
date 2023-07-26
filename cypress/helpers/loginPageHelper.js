
import { loginPage } from '../pageObjects/loginPage';

class LoginPageHelper {

    clickLogInLink() {
        loginPage.logInLink().click();
    }

    enterEmail(email) {
        loginPage.emailField().clear().type(email);
    }

    enterPassword(password) {
        loginPage.passwordField().clear().type(password);
    }

    clickLoginButton() {
        loginPage.loginButton().click();
    }

    clickSaveInfoButton() {
        loginPage.saveInfoButton().click();
    }

}
export const loginPageHelper = new LoginPageHelper();
