import ExplorePage from "../pages/explore/explore";
const explorePage = new ExplorePage();
const locator = explorePage.locator;

describe("connect wallet spec", () => {
  before(() => {
    cy.visit('/');
    explorePage.connectWallet();
  });

  // afterEach(() => {
  //   cy.clearLocalStorage();
  //   cy.visit('/');
  // })

  it("should connect wallet with success", () => {
    cy.get(locator.profileIcon).should('be.visible');
  });
  
  it.only("should create a task with success", () => {
    explorePage.createTask();
  });


})