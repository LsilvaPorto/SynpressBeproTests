import Page from "../pages/page";
const page = new Page();

describe("connect wallet spec", () => {
  before(() => {
    cy.visit('/');
  });

  it.only("should connect wallet with success", () => {
    page.connectWallet();
  });
})