import {test, expect} from '@playwright/test';
import { PageManager } from '../managers/PageManager';
import { validCredentials, candidateInfo } from '../helpers/testingData';

test.describe('Candiate Tests', () => {
    let pageManager;
    let loginPage;
    let homePage;
    let candidateListPage;
    let addCandidatePage;

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);
        loginPage = pageManager.getLoginPage();
        await loginPage.gotoLoginPage();
        homePage = pageManager.getHomepage();
        candidateListPage = pageManager.getCandidateListPage();
        addCandidatePage = pageManager.getAddCandidatePage();

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
    test('Add New Candidate', async () => {
        //Navigate to Candidate List Page
        await test.step("When the user navigates to the Candidate List Page", async () => { 
            await homePage.navigateToRecruitmentPage();
        });
        //Click on Add Candidate button
        await test.step("When the user clicks on the Add Candidate button", async () => {
            await candidateListPage.clickAddCandidateButton();
        });
        //Fill in the candidate details and save
        await test.step("When the user fills in the candidate details", async () => {
            await addCandidatePage.fillCandidateDetails(candidateInfo.firstName, candidateInfo.lastName, candidateInfo.email);
        });
        await test.step("When the user selects a vacancy", async () => {
            await addCandidatePage.selectVacancy(candidateInfo.vacancy);
        });
        await test.step("When the user uploads a resume", async () => {
            await addCandidatePage.uploadResume();
        });
        await test.step("When the user clicks the Save button then the candidate", async () => {
            await addCandidatePage.clickSaveButton();
        }); 
        await test.step("Then the candidate should be saved successfully", async () => {
            await addCandidatePage.verifySuccessMessage();
        });
    });  

    });