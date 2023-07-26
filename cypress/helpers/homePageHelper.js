
import { homePage } from '../pageObjects/homePage';

class HomePageHelper {

    clickComputersLink() {
        homePage.computersLink().click();
    }

    clickNotebooksLink() {
        homePage.computersLink().click();
        cy.get('.page-title h1:contains(Computers)').scrollIntoView().should('be.visible');
        homePage.notebooksLink().click();
    }

    clickMenuToggleButton() {
        homePage.menuToggleButton().click();
    }
}
export const homePageHelper = new HomePageHelper();
