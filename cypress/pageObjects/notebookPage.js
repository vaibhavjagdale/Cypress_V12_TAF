
class NoteBookPage {

    nootbookSection() {
        return cy.get('.page-title h1:contains(Notebooks)');
    }
}
export const noteBookPage = new NoteBookPage();
