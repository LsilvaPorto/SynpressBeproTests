import GovernancePage from "../pages/marketplace/governance";
import RegistryPage from "../pages/marketplace/registry";
import PermissionPage from "../pages/marketplace/permission";
const governancePage = new GovernancePage();
const registryPage = new RegistryPage();
const permissionPage = new PermissionPage();
const locator = governancePage.commonPageLocator;

describe("Manage a Marketpplace spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
    });
    after(() => {
        governancePage.setDisputeTime();
        registryPage.setCancelFee();
        
    });

    it("should change disputeTime successfully", () => {
        governancePage.openMarketplacePage();
        governancePage.setDisputeTime(122);
        cy.get(governancePage.managementPageLocator.toastySuccess).should('exist');
    });

    it("should change cancelFee successfully", () => {
        registryPage.openMarketplacePage();
        registryPage.setCancelFee(3);
        cy.wait(50000);
    });

    it("should change task visibility successfully", () => {
        permissionPage.openMarketplacePage();
        permissionPage.setBannedDomain("youtube");
    });

});