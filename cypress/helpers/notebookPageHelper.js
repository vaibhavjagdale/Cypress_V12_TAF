
import { noteBookPage } from '../pageObjects/notebookPage';

class NotebookPageHelper {

    applyDisplayPerPageFilter(perPageNumber) {
        noteBookPage.nootbookSection().scrollIntoView().should('be.visible');
        cy.get('select[id=products-pagesize]').select(perPageNumber.toString(), { force: true }).should('have.value', perPageNumber.toString());
        cy.get('.item-grid').find('.product-item').should('have.length', perPageNumber);  
    }
}
export const notebookPageHelper = new NotebookPageHelper();
