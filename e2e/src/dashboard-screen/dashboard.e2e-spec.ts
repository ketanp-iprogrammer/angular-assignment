import { DashboardPage} from '../dashboard-screen/dashboard.po';
import { browser, protractor, element, by } from 'protractor';
describe('protractor E2E - Dashboard Listing Page', () => {
    let page: DashboardPage;
    beforeEach(() => {
        page = new DashboardPage();
    });

    it('when user goes to dashboard listing page, it will show the options available', () => {
        page.navigateTotran();
    });
});