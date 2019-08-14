import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { DashboardPage } from '../listing-page/dashboard.po';
import { NewTransactionPage } from '../new-transaction/new-transaction.po';
import { ViewAllPage } from '../view-all-transactions/view-all-transaction.po';

describe('protractor-E2E - Login page', () => {
    let page: LoginPage;
    let dashboardPage: DashboardPage;
    let newTransactionPage: NewTransactionPage;
    let viewAllTransaction: ViewAllPage
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
        page.fillCredentials(correctCredentias);
        page.navigateToDash();
    });

    it('when user goes to dashboard listing page, it will show the options available', () => {
        setTimeout(() => {
            dashboardPage.navigateTotran();
        }, 2000);

    });

    it('when user clicks on new transaction , it will show the new transaction screen', () => {
        setTimeout(() => {
            newTransactionPage.navigateTo();
            newTransactionPage.newTransactionClick();
        }, 2000);

    });

    it('when user clicks on view all transaction , it will show the view all transaction screen', () => {
        setTimeout(() => {
            viewAllTransaction.viewTransactionClick();
            viewAllTransaction.navigateTotran();
        }, 2000);

    });



});