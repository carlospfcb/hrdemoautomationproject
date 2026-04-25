class PageManager {
  constructor(page) {
    this.page = page;
    this.loginPage = null; 
    this.homePage = null;
    this.employeeListPage = null;
    this.addEmployeePage = null;
    this.candidateListPage = null;
    this.addCandidatePage = null;
    this.leaveListPage = null;
    this.assignLeavePage = null;
  }

    getLoginPage() {
    if (!this.loginPage) {
        const { LoginPage } = require("../pageobjects/LoginPage");
        this.loginPage = new LoginPage(this.page);
        }
    return this.loginPage;
    }

    getHomepage() {
     if (!this.homePage) {
        const { Homepage } = require("../pageobjects/HomePage");
        this.homePage = new Homepage(this.page);
        }
    return this.homePage;
    }

    getEmployeeListPage() {
     if (!this.employeeListPage) {
        const { EmployeeListPage } = require("../pageobjects/EmployeeListPage");
        this.employeeListPage = new EmployeeListPage(this.page);
        }
    return this.employeeListPage;
    }
    
    getAddEmployeePage() {
     if (!this.addEmployeePage) {
        const { AddEmployeePage } = require("../pageobjects/AddEmployeePage");
        this.addEmployeePage = new AddEmployeePage(this.page);
        }
     return this.addEmployeePage;
    }

    getCandidateListPage() {
      if (!this.candidateListPage) {
         const { CandidateListPage } = require("../pageobjects/CandidateListPage");
         this.candidateListPage = new CandidateListPage(this.page);
         } 
      return this.candidateListPage;
     } 

     getAddCandidatePage() {
      if (!this.addCandidatePage) {
         const { AddCandidatePage } = require("../pageobjects/AddCandidatePage");
         this.addCandidatePage = new AddCandidatePage(this.page);
         }
      return this.addCandidatePage;
     }

     getLeaveListPage() {
      if (!this.leaveListPage) {
         const { LeaveListPage } = require("../pageobjects/LeaveListPage");
         this.leaveListPage = new LeaveListPage(this.page);
      }
      return this.leaveListPage;
      }

     getAssignLeavePage() {
      if (!this.assignLeavePage) {
         const { AssignLeavePage } = require("../pageobjects/AssignLeavePage");
         this.assignLeavePage = new AssignLeavePage(this.page);
         }  
      return this.assignLeavePage;
     }

}
module.exports = { PageManager };