class Homepage {
  constructor(page) {
    this.page = page;
    this.PIMOption = page.getByRole('link', { name: 'PIM' });
    this.leaveOption = page.getByRole('link', { name: 'Leave' });
    this.recruitmentOption = page.getByRole('link', { name: 'Recruitment' });
  }

  async navigateToEmployeeListPage() {
    await this.PIMOption.click();
  }
  async navigateToLeavePage() {
    await this.leaveOption.click();
  }
  async navigateToRecruitmentPage() { 
    await this.recruitmentOption.click(); 
    }
}

module.exports = { Homepage };