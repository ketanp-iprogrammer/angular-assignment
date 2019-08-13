import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class ViewAllPage {
    navigateTotran() {
        setTimeout(() => {
            return browser.get('/dashboard/view-all-transaction');
        }, 2000);

    }
}