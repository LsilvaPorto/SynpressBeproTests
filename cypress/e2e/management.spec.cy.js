import GovernancePage from "../pages/marketplace/governance";
const governancePage = new GovernancePage();
const locator = governancePage.commonPageLocator;
const governanceLocator = governancePage.marketplacePageLocator;
describe("create Marketplace spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
    });

    it("should create a Marketplace successfully", () => {
        governancePage.openMarketplacePage();
        governancePage.setDisputeTime(120);
    });
});