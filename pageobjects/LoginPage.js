import {test, expect} from '@playwright/test';
import { urls } from '../helpers/testingData';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidLoginMessage = page.getByText('Invalid credentials');
    }

    async gotoLoginPage(){
        await this.page.goto(urls.loginpage);
    }
    async typeValidCredentials (username, password) {
        await this.username.waitFor({ state: 'visible' });
        await this.password.waitFor({ state: 'visible' });
        await this.username.fill(username);
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async verifyUserIsInHomePage() {
        await expect(this.page).toHaveURL(urls.homepage);
    }

    async typeInvalidCredentials (invalidUsername, invalidPassword) {
        await this.username.waitFor({ state: 'visible' });
        await this.password.waitFor({ state: 'visible' });
        await this.username.fill(invalidUsername);
        await this.password.fill(invalidPassword);
    }
    async verifyInvalidLoginMessage() {
        await expect(this.invalidLoginMessage).toBeVisible();
    }
}

module.exports = { LoginPage };
