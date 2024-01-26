import Locators from "../locators";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Locators {
    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }

    uploadLogoIco() {
        cy.fixture('Bepro-ico.svg').then(fileContent => {
            cy.get(this.marketplacePageLocator.logoIcon).attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-ico.svg',
                mimeType: 'image/svg+xml'
            });
        });
    }

    uploadFullLogo() {
        cy.fixture('Bepro-logo.svg').then(fileContent => {
            cy.get(this.marketplacePageLocator.fullLogo).attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-logo.svg',
                mimeType: 'image/svg+xml'
            });
        });
    }
    createMarketplace() {
        cy.openMenuToCreate(this.commonPageLocator.btnCreateYourMarketplace);
        cy.waitForResources();
        // cy.get(this.marketplacePageLocator.dropdownNetwork).click();
        // cy.get(this.marketplacePageLocator.dropdownNetworkOptions).click({ force: true });
        cy.get(this.marketplacePageLocator.btnSelectNetworkNextStep).click();

        cy.contains(this.elementText.btnMax).click();
        cy.get(this.commonPageLocator.btnApproveLock).should('be.enabled').click();
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();
        cy.get(this.marketplacePageLocator.btnLockTBepro).click();
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.get(this.marketplacePageLocator.btnLockTBeproNextStep).click();

        this.uploadLogoIco();
        this.uploadFullLogo();
        cy.get(this.marketplacePageLocator.inputMarketplaceName).type(this.createMarketplaceName());
        cy.createDescription().then((description) => {
            cy.get(this.commonPageLocator.textareaDescriptionCreateTaskDeliverableOrMarketplace).type(description);
        });
        cy.get(this.marketplacePageLocator.btnMarketplaceInformationNextStep).click();

        cy.get(this.marketplacePageLocator.inputDisputeTime).clear().type(60);
        cy.get(this.marketplacePageLocator.inputDraftTime).clear().type(60);
        cy.get(this.marketplacePageLocator.inputCuratorAmount).clear().type(1000);
        cy.get(this.marketplacePageLocator.btnMarketplaceSettingsNextStep).click();
        //dropdown 
        cy.get(this.marketplacePageLocator.dropdownTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.beproTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.dropdownRewardTokens).click();
        cy.get(this.marketplacePageLocator.beproRewardTokens).click();

        cy.get(this.marketplacePageLocator.btnCreateMarketplace).click();
        cy.waitForResources();

        //all confirmation to create network 
        cy.confirmMetamaskDataSignatureRequest();
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing draft time)');
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing disputable time)');
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing dispute percentage)');
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Registering Marketplace');
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

    }

    openProfilePage(element) {
        cy.get(this.commonPageLocator.profileIcon).click().wait(500);
        cy.contains(element).click().wait(1000);
    }

    closeMarketplace() {
        cy.openProfilePage(this.commonPageLocator.btnCustomMarketplaceProfileMenu);
        cy.get(this.managementPageLocator.tabGovernance).click();
        cy.get(this.managementPageLocator.btnCloseMarketplace).click();
        cy.confirmMetamaskTransaction();
        cy.waitForResources();
        cy.confirmMetamaskDataSignatureRequest();
    }

    waitFordataToLoad(locator) {
        cy.get(locator)
            .invoke('val')
            .then((value) => {
                const valorNumerico = parseFloat(value);
                if (valorNumerico > 0) {
                    cy.wait(100);
                } else {
                    cy.wait(2000);
                    this.waitFordataToLoad(locator);
                }
            })
    }

    setMarketplaceConfig(tab, configToChange, valueToChange) {
        // const locatorToWait = configToChange;
        cy.get(tab).click({ force: true });
        // this.waitFordataToLoad(locatorToWait);
        cy.waitForResources();
        cy.get(configToChange).clear().type(valueToChange);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();
    }

}