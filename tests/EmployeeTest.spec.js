import {test, expect} from '@playwright/test';
import { PageManager } from '../managers/PageManager';
import { validCredentials, employeeInfo } from '../helpers/testingData';
const { generateEmployeeId } = require('../helpers/dataGenerator');

test.describe('Employee Tests', () => {
    let pageManager;
    let loginPage;
    let homePage;
    let employeeListPage;
    let addEmployeePage;

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        loginPage = pageManager.getLoginPage();
        await loginPage.gotoLoginPage();
        homePage = pageManager.getHomepage();
        employeeListPage = pageManager.getEmployeeListPage();
        addEmployeePage = pageManager.getAddEmployeePage();

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

    test('Add NewEmployee', async () => {
        const uniqueEmployeeId = generateEmployeeId();
        //Navigate to Employee List Page
        await test.step("When the user navigates to the Employee List Page", async () => {
            await homePage.navigateToEmployeeListPage();
        });
        //Click on Add Employee button
        await test.step("When the user clicks on the Add Employee button", async () => {
            await employeeListPage.addEmployeeButton.click();
        }); 
        //Fill in the employee details and save
        await test.step("When the user fills in the employee details", async () => {
            await addEmployeePage.fillEmployeeDetails(employeeInfo.firstName, employeeInfo.lastName, uniqueEmployeeId);
        });
        await test.step("When the user clicks the Save button then the employee", async () => {
            await addEmployeePage.saveButton.click();
        });
        await test.step("Then the employee should be saved successfully", async () => {
            await addEmployeePage.verifySuccessMessage();
        });
    });

    test('Search Employee', async () => {
        await test.step("When the user navigates to the Employee List Page", async () => {
            await homePage.navigateToEmployeeListPage();
        });
        await test.step("When the user searches for an employee by ID", async () => {
            await employeeListPage.insertEmployeeId(employeeInfo.existingEmployeeId);
            await employeeListPage.clickSearchButton();
        });
        await test.step("Then the employee should be displayed in the search results", async () => {
          await employeeListPage.verifyEmployeeInSearchResults(employeeInfo.existingEmployeeId);
        });
    });

    test('Verify User cannot add employee with existing Employee ID', async () => {
        //Navigate to Employee List Page
        await test.step("When the user navigates to the Employee List Page", async () => {
            await homePage.navigateToEmployeeListPage();
        });
        //Click on Add Employee button
        await test.step("When the user clicks on the Add Employee button", async () => {
            await employeeListPage.addEmployeeButton.click();
        });
        //Fill in the employee details with an existing Employee ID and save
        await test.step("When the user fills in the employee details with an existing Employee ID", async () => {
            await addEmployeePage.fillEmployeeDetails(employeeInfo.firstName, employeeInfo.lastName, employeeInfo.existingEmployeeId);
        });
        await test.step("Then the user should see an error message indicating that the Employee ID already exists", async () => {
            await addEmployeePage.verifyDuplicateEmployeeIdMessage();
        });
    });
});