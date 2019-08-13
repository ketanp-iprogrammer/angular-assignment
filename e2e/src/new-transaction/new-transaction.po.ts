import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class NewTransactionPage {
    private credentias = {
        phone: '6666666',
        transfer_amount: '6000',
        reference: 'CUS201909082',
        address: 'abc ',
        customer_name: "Rahul",
        customer_number: 456666
    };

    navigateTo() {
        return browser.get('/dashboard');
    }

    navigateDefault() {
        return browser.get('/');
    }

    logout() {
        setTimeout(() => {
            element(by.css('.nav-link')).click();
        }, 2000);
    }

    navigateTotran() {
        return browser.get('/dashboard/dashboard-listing');
    }

    fillCredentials() {
        setTimeout(() => {
            element(by.css('[name="phone1"]')).sendKeys(this.credentias.phone);
            element(by.css('[name="transfer_amount1"]')).sendKeys(this.credentias.transfer_amount);
            element(by.css('[name="reference"]')).sendKeys(this.credentias.phone);
            element(by.css('[name="customer_number"]')).sendKeys(this.credentias.transfer_amount);
            element(by.css('[name="address"]')).sendKeys(this.credentias.phone);
            element(by.css('[name="customer_name"]')).sendKeys(this.credentias.transfer_amount);
        }, 2000);
    }

    getPhoneErrorMessage() {
        setTimeout(() => {
            return element(by.css('.invalid-login')).getText();
        }, 2000);
    }
    getTransferAmountErrorMessage() {
        setTimeout(() => {
            return element(by.css('.invalid-login')).getText();
        }, 2000);
    }


}