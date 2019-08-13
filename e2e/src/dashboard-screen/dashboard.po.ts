import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class DashboardPage {
    navigateTotran() {
        return browser.get('/dashboard/dashboard-listing');
    }
}