import {test, expect} from '@playwright/test';

class CandidateListPage {
  constructor(page) {
    this.page = page;
    this.addCandidateButton = page.getByRole('button', { name: ' Add ' });
  }
  async clickAddCandidateButton(){
    await this.addCandidateButton.click();
  };
} 
module.exports = { CandidateListPage };