import TaskPage from "../pages/task/task";
const taskPage = new TaskPage();
const locator = taskPage.commonPageLocator;
const taskLocator = taskPage.taskPageLocator;

describe("create Task elements spec", () => {
  before(() => {
    cy.visit('', {timeout:60000}).then(() => {
      cy.get(locator.btnAcceptCookies).click();
    })
    // cy.connectWallet();
    cy.connectWalletFirstTime();
  });

  it("should connect wallet successfully", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });

  it("should create a task successfully", () => {
    taskPage.createTask();
    cy.get(taskLocator.componentTaskStatus, { timeout: 300000 }).should('be.visible');
  });

  it("should create a Delivery successfully", () => {
    // cy.get('#infinite-scroll > div:nth-child(1) > div > div > div.row.align-items-center.mb-4').click({ force: true })
    taskPage.createDeliverable();
    cy.contains(taskPage.elementText.btnMakeAReview, { timeout: 300000 }).should('be.visible');

  });
  it("should create a Proposal successfully", () => {
    //cy.get('#infinite-scroll > div:nth-child(1) > div > div > div.d-none.d-xl-flex').click({ force: true })
    taskPage.createProposal();
    taskPage.acceptProposal();
    cy.contains(taskPage.elementText.textAccepted, { timeout: 300000 }).should('be.visible');
  });

})