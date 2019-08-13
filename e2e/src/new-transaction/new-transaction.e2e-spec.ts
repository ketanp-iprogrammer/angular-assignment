import { NewTransactionPage } from './new-transaction.po';
import { browser, protractor, element, by } from 'protractor';
describe('protractor E2E - New Transaction Page', () => {
    let page: NewTransactionPage;
    const wrongCredentias = {
        reference: 'CUS20190903166',
        customer_number: 203224,
        customer_name: 'Ketan',
        address: 'abc testing',
        phone: '45435435',
        transfer_amount: '4555',
        transfer_currency: 'INR',
        beneficiary_bank: 'HDFC',
        beneficiary_accno: '3456666',
        payment_details: 'dsdsadsad'
    };

    beforeEach(() => {
        page = new NewTransactionPage();
    });

    it('when user goes to new transaction form, it should fills  the fields', () => {
        page.navigateTotran();
        page.fillCredentials();
    });

    it('when user click on logout button- redirects him to login page', () => {
        page.navigateDefault();
        page.logout();
    });
});