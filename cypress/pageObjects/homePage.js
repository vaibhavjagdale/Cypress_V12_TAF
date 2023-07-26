
class HomePage {

    computersLink() {
        return cy.get('.mobile a[href="/computers"]');
    }

    notebooksLink() {
        return cy.get('.title [href="/notebooks"]');
    }

    menuToggleButton() {
        return cy.get('div.menu-toggle');
    }
}
export const homePage = new HomePage();
