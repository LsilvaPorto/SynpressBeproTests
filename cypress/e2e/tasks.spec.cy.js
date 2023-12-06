import Page from "../pages/page";
import TaskPage from "../pages/task/task";
const page = new Page();
const locator = page.locator;
const taskPage = new TaskPage();
const taskLocator = taskPage.locator;

describe("connect wallet spec", () => {
  before(() => {
    cy.visit('/');
    page.connectWallet();
  });

  it("should connect wallet with success", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });
  
  it("should create a task with success", () => {
    page.createTask();
    cy.get(taskLocator.statusTaskComponent, { timeout: 300000 }).should('be.visible');
  });

  it("should create a Delivery with success", () => {
    taskPage.createDeliverable();
  });

})