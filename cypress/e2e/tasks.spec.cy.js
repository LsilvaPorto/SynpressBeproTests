import Page from "../pages/page";
import TaskPage from "../pages/task/task";
const page = new Page();
const taskPage = new TaskPage();
const locator = page.commonPageLocator;
const taskLocator = page.taskPageLocator;

describe("create Task elements spec", () => {
  before(() => {
    cy.visit('', {timeout:60000}).then(() => {
      cy.get(locator.btnAcceptCookies).click();
    })
    cy.connectWallet();
  });

  it("should connect wallet successfully", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });

  it("should create a task successfully", () => {
    taskPage.createTask();
    cy.get(taskLocator.componentTaskStatus, { timeout: 300000 }).should('be.visible');
  });

  it("should create a Delivery successfully", () => {
    // cy.get('#infinite-scroll > div:nth-child(1) > div > div > div.d-none.d-xl-flex').click({ force: true })
    taskPage.createDeliverable();
    cy.contains(page.elementText.btnMakeAReview, { timeout: 300000 }).should('be.visible');

  });
  it("should create a Proposal successfully", () => {
    //cy.get('#infinite-scroll > div:nth-child(1) > div > div > div.d-none.d-xl-flex').click({ force: true })
    taskPage.createProposal();
    taskPage.acceptProposal();
    cy.contains(page.elementText.textAccepted, { timeout: 300000 }).should('be.visible');
  });

})