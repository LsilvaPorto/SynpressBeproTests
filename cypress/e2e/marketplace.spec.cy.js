import MarketplacePage from "../pages/marketplace/marketplace";
const marketplacePage = new MarketplacePage();
const locator = marketplacePage.commonPageLocator;
describe("create Marketplace spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.importMetamaskAccount('0x441c5d1f5cf15d140b55067b880d53bd80f942f25d2055b1670f31d080db3f29');
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