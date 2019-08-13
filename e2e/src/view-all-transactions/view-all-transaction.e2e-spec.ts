import { ViewAllPage} from '../view-all-transactions/view-all-transaction.po';
import { browser, protractor, element, by } from 'protractor';
describe('protractor E2E - View All Listing Page', () => {
    let page: ViewAllPage;
    beforeEach(() => {
        page = new ViewAllPage();
    });

    it('when user goes to view all listing page, it will show the data', () => {
        page.navigateTotran();
        // page.fillCredentials();
    });

});