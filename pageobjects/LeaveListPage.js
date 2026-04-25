class LeaveListPage {
    constructor(page) {
        this.page = page;
        this.AssignLeavePage = page.getByRole('link', { name: 'Assign Leave' });
    }
    async AssignLeave() {
        await this.AssignLeavePage.click();
    }
}
module.exports = { LeaveListPage };
