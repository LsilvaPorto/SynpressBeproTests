import Page from "../pages/page";
import TaskPage from "../pages/task/task";
const page = new Page();
const taskPage = new TaskPage();
const locator = page.commonPageLocator;
const taskLocator = page.taskPageLocator;

describe("create Task elements spec", () => {
  before(() => {
    cy.visit('/').then(() => {
      cy.get(locator.btnAcceptCookies).click();
    })
    page.connectWallet();
  });

  it("should connect wallet successfully", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });

  it("should create a task successfully", () => {
    taskPage.createTask();
    cy.get(taskLocator.componentTaskStatus, { timeout: 300000 }).should('be.visible');
  });

  it("should create a Delivery successfully", () => {
    taskPage.createDeliverable();
    cy.get(taskLocator.btn, { timeout: 300000 }).contains('Make a Review').should('be.visible');

  });
  it("should create a Proposal successfully", () => {
    // cy.get('#infinite-scroll > div:nth-child(1) > div > div > div.d-none.d-xl-flex').click({ force: true })
    taskPage.createProposal();
    taskPage.acceptProposal();
    cy.get(taskLocator.textStatusProposal, { timeout: 300000 }).contains('Accepted').should('be.visible');
  });

})