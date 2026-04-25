import {test, expect} from '@playwright/test';

class AddEmployeePage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput =  page.locator('.oxd-input-group:has(label:has-text("Employee Id")) input');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.successMessage = page.getByText('Successfully Saved');
    this.errorMessage = page.getByText('Employee ID already exists');
  }

    async fillEmployeeDetails(firstName, lastName, employeeId) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.employeeIdInput.fill(employeeId);
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible();
    }

    async verifyDuplicateEmployeeIdMessage() {
        await expect(this.errorMessage).toBeVisible();
    }
}

module.exports = { AddEmployeePage };