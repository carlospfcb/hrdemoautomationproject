import {test, expect} from '@playwright/test';
class EmployeeListPage {
  constructor(page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole('button', { name: ' Add ' });
    this.employeeIdInput = page.locator('.oxd-input-group:has(label:has-text("Employee Id")) input');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async insertEmployeeId(employeeId){
    await this.employeeIdInput.fill(employeeId);
  }

  async clickSearchButton(){
    await this.searchButton.click();
  }

  async clickAddEmployeeButton(){
    await this.addEmployeeButton.click();
  }

  async verifyEmployeeInSearchResults(employeeId) {
    await expect(this.page.getByText(String(employeeId))).toBeVisible();
  }

}

module.exports = { EmployeeListPage };