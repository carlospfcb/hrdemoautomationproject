import {test, expect} from '@playwright/test';
import { todo } from 'node:test';

class AssignLeavePage {
    constructor(page) {
       this.page = page;

        this.assignLeaveLink = page.getByRole('link', { name: 'Assign Leave' });
        this.employeeNameInput = page.getByRole('textbox', { name: 'Type for hints...' });
        this.leaveTypeDropdown = page.getByText('-- Select --');
        this.fromDateInput = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first();
        this.toDateInput = page.getByRole('textbox', { name: 'yyyy-dd-mm' }).last();
        this.duration = page.getByText('Full Day');
        this.commentInput = page.locator('textarea');
        this.okButton = page.getByRole('button', { name: 'Ok' });
        this.assignButton = page.getByRole('button', { name: 'Assign' });
        this.successMessage = page.getByText('Successfully Saved');
    } 
    async AssignLeave() {
        await this.AssignLeavePage.click();
    }
    async fillLeaveDetails(employeeName, leaveType, comment) {
        await this.employeeNameInput.fill(employeeName);
        await this.page.getByRole('option', { name: employeeName }).click();
        await this.leaveTypeDropdown.click();
        await this.page.getByRole('option', { name: leaveType }).click();
        await this.commentInput.fill(comment);
    }

    async FillDuration(fromDate, duration) {
        await this.fromDateInput.fill(fromDate);
        await this.toDateInput.click();
        // await this.toDateInput.fill(toDate);
        await this.duration.waitFor({ state: 'visible' });
        await this.duration.click();
        await this.page.getByRole('option', { name: duration }).click();
    }
    
    async clickAssignButton() {
        await this.assignButton.click();
    }

    async clickOkButton() {
        await this.okButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible();
    }
}
module.exports = { AssignLeavePage };
