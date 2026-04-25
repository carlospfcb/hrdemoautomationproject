import {test, expect} from '@playwright/test';
import { PageManager } from '../managers/PageManager';
import { validCredentials, assignLeaveInfo } from '../helpers/testingData';

test.describe('Assign Leave Tests', () => {
    let pageManager;
    let loginPage;
    let homePage;
    let leaveListPage;
    let assignLeavePage;

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        loginPage = pageManager.getLoginPage();
        await loginPage.gotoLoginPage();
        homePage = pageManager.getHomepage();
        leaveListPage = pageManager.getLeaveListPage();
        assignLeavePage = pageManager.getAssignLeavePage();

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
    });

    test('Assign Leave', async () => {
        await test.step("When the user navigates to the Leave List Page", async () => {
            await homePage.navigateToLeavePage();
        });
        await test.step("When the user clicks on the Assign Leave button", async () => {
            await leaveListPage.AssignLeave();
        });
        await test.step("When the user fills in the leave details", async () => {
            await assignLeavePage.fillLeaveDetails(
                assignLeaveInfo.employeeName,
                assignLeaveInfo.leaveType,
                assignLeaveInfo.comment
            );
        });
        await test.step("When the user fills in the duration details", async () => {
            await assignLeavePage.FillDuration(
                assignLeaveInfo.fromDate,
                // assignLeaveInfo.toDate,
                assignLeaveInfo.duration
            );
        });
        await test.step("When the user clicks the Assign button", async () => {
            await assignLeavePage.clickAssignButton();
        });
        await test.step("When the user confirms the leave assignment", async () => {
            await assignLeavePage.clickOkButton();
        });
        await test.step("Then a success message should be displayed", async () => {
            await assignLeavePage.verifySuccessMessage();
        });
    });  
});