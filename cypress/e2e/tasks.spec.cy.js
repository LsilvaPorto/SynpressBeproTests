import Page from "../pages/page";
import TaskPage from "../pages/task/task";
const page = new Page();
const locator = page.locator;
const taskPage = new TaskPage();
const taskLocator = taskPage.locator;

describe("connect wallet spec", () => {
  before(() => {
    cy.visit('/').then(() => {
      cy.get(locator.btnAcceptCookies).click();
    })
    page.connectWallet();
  });

  it("should connect wallet with success", () => {
    cy.get(locator.profileIcon).should('be.visible'); 
  });

  it("should create a task with success", () => {
    page.createTask();
    cy.get(taskLocator.statusTaskComponent, { timeout: 300000 }).should('be.visible');
  });

  it.only("should create a Delivery with success", () => {
    // cy.get('#infinite-scroll > div:nth-child(20) > div > div > div.d-none.d-xl-flex').click({ force: true })
    taskPage.createDeliverable();
    cy.get(taskLocator.statusTaskComponent, { timeout: 300000 }).should('be.visible');
    
  });

})