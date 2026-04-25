import {test, expect} from '@playwright/test';

class AddCandidatePage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.emailInput = page.locator('.oxd-input-group:has(label:has-text("Email")) input');
        this.vacancyDropdown = page.getByText('-- Select --');
        this.uploadCV= page.getByText('Browse');
        this.saveButton = page.getByRole('button', { name: 'Save' }); 
        this.successMessage = page.getByText('Successfully Saved');
    }

    async fillCandidateDetails(firstName, lastName, email) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    }

    async selectVacancy(vacancy) {
    await this.vacancyDropdown.click();
    await this.page.getByRole('option', { name: vacancy }).click();
    }

    async uploadResume() {
    const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser'),
        await this.uploadCV.click(),
    ])
    await fileChooser.setFiles('helpers/CVtest.txt');
    }

    async clickSaveButton() {
    await this.saveButton.click();
    }

    async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
    }
} 

module.exports = { AddCandidatePage };
