import Page from "../pages/page";
const page = new Page();
const locator = page.locator;

describe("connect wallet spec", () => {
  before(() => {
    cy.visit('/');
    page.connectWallet();
  });

  // afterEach(() => {
  //   cy.clearLocalStorage();
  //   cy.visit('/');
  // })

  it("should connect wallet with success", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });
  
  it.only("should create a task with success", () => {
    page.createTask();
  });


})