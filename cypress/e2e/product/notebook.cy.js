
import { notebookPageHelper } from '../../helpers/notebookPageHelper';
import { homePageHelper } from '../../helpers/homePageHelper';

describe('Notebook', () => {

  before(() => {
    cy.visit('');
  });

  it('Verify notebook filter', () => {

    const perPageNumber = 3;

    homePageHelper.clickMenuToggleButton();
    homePageHelper.clickNotebooksLink();
    notebookPageHelper.applyDisplayPerPageFilter(perPageNumber);
  });
});
