import MarketplacePage from "../pages/marketplace/marketplace";
const marketplacePage = new MarketplacePage();
const locator = marketplacePage.commonPageLocator;
describe("create Marketplace spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.importMetamaskAccount(Cypress.env('PRIVATE_KEY_CREATE_NETWORK'));
        cy.switchMetamaskAccount(3);
        cy.connectWalletFirstTime();
    });

    it("should create a Marketplace successfully", () => {
        marketplacePage.createMarketplace();
        cy.contains(marketplacePage.elementText.textConfirmationMarketplaceClosed).should('be.visible');
    });

    it("should close a Marketplace successfully", () => {
        marketplacePage.closeMarketplace();
        cy.contains(marketplacePage.elementText.textConfirmationMarketplaceClosed).should('be.visible');
    });
});