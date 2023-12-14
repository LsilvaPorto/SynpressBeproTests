
import MarketplacePage from "../pages/marketplace/marketplace";
const marketplacePage = new MarketplacePage();
const locator = marketplacePage.commonPageLocator;
const marketplaceLocator = marketplacePage.marketplacePageLocator;
describe("create Marketplace spec", () => {
    before(() => {
        cy.visit('', { timeout: 60000 }).then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.importMetamaskAccount('0xdecf33d7ea475d531fe02069bbb56abba8757e9ff9e830c9d62f2bc149dd08ec');
        cy.switchMetamaskAccount(3);
        cy.connectWalletFirstTime();
    });

    it("should create a Marketplace successfully", () => {
        marketplacePage.createMarketplace();
        // cy.get(marketplaceLocator.componentMarketplace, { timeout: 300000 }).should('be.visible');
    });

    it("should close a Marketplace successfully", () => {

    });
});