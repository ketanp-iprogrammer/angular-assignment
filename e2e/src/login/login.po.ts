import { browser, by, element } from 'protractor';

export class LoginPage {
    private credentias = {
        email: 'eve.holt@reqres.in',
        password: 'test89890'
    };

    navigateTo() {
        return browser.get('/');
    }

    fillCredentials(credentias: any = this.credentias) {
        element(by.css('[name="email"]')).sendKeys(credentias.email);
        element(by.css('[name="password"]')).sendKeys(credentias.password);
        element(by.css('.login100-form-btn')).click();
    }


    getPageTitleText() {
        return element(by.css('app-login span')).getText();
    }

    getErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
    navigateToDash() {
        return browser.get('/dashboard/new-transaction');
    }
    getPhoneErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
    getTransferAmountErrorMessage() {
        return element(by.css('.invalid-login')).getText();
    }
}