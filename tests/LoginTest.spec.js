import {test, expect} from '@playwright/test';
import { PageManager } from '../managers/PageManager';
import { urls, validCredentials, invalidCredentials } from '../helpers/testingData';

test.describe('Login Tests', () => {
    let pageManager;
    let loginPage;

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        loginPage = pageManager.getLoginPage();
        await loginPage.gotoLoginPage();
    });

    test('Acess HR Admin with valid credentials', async ({ page }) => {

        //Type Valid credentials
        await test.step("When the user type valid credentials", async () => {
            await loginPage.typeValidCredentials(validCredentials.username, validCredentials.password);
        });

        //Click Login button 
        await test.step("When the user clicks the login button", async () => {
            await loginPage.clickLoginButton();
        });

        //Verify that the user is redirected to the homepage
        await test.step("Then the user should be redirected to the homepage", async () => {
            await loginPage.verifyUserIsInHomePage();
        });
;    });

    test('Acess HR Admin with invalid credentials', async ({ page }) => {
        //Type Invalid credentials
        await test.step("When the user type invalid credentials", async () => {
            await loginPage.typeInvalidCredentials(invalidCredentials.invalidUsername, invalidCredentials.invalidPassword);
        });

        //Click Login button
        await test.step("When the user clicks the login button", async () => {
            await loginPage.clickLoginButton();
        });

        //Verify that the user sees an error message
        await test.step("Then the user should see an error message", async () => {
            await loginPage.verifyInvalidLoginMessage();
        });
    });
});