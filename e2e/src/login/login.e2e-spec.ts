import { LoginPage } from './login.po';
// import { NewTransactionPage } from '../new-transaction/new-transaction.po';
import { browser } from 'protractor';
describe('protractor-E2E - Login page', () => {
    let page: LoginPage;
    // let dashboardPage: NewTransactionPage
    const wrongCredentias = {
        email: 'wrongname',
        password: 'wrongpasswd'
    };
    const correctCredentias = {
        email: 'eve.holt@reqres.in',
        password: 'test89890'
    };
    const wrongPhoneAndAmount = {
        phone: '',
        transferAmount: ''
    };

    beforeEach(() => {
        page = new LoginPage();
    });

    it('when user trying to login with wrong credentials he should stay on “login” page and see error message', () => {
        page.navigateTo();
        page.fillCredentials(wrongCredentias);
        expect(page.getPageTitleText()).toEqual('LOG IN');
        expect(page.getErrorMessage()).toEqual('Email must be a valid email address');
    });

    it('when login is successful — he should redirect to dashboard page', () => {
        page.navigateTo();
        page.fillCredentials(correctCredentias);
    });


});