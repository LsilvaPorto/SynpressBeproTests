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
        cy.openMenuToCreate(this.elementText.textCreateMarketplace);
        cy.contains('span', 'Max');
        //bug in application mades me need to reload the page to the tokens appears
        cy.reload();

        //wait page to be ready for interaction
        cy.contains(this.marketplacePageLocator.elementAfterNANInMarketplace).wait(4000);
        cy.contains(this.elementText.btnMax).click().wait(4000);
        cy.contains(this.elementText.btnApprove).click();
        cy.confirmMetamaskPermissionToSpend()

        //btn lockBepro
        cy.get(this.marketplacePageLocator.btnLockTBepro).click();
        cy.confirmMetamaskTransaction();

        cy.contains(this.elementText.btnNextStep).click();
        this.uploadLogoIco();
        this.uploadFullLogo();
        cy.get(this.marketplacePageLocator.inputMarketplaceName).type(this.createMarketplaceName());
        cy.createDescription().then((description) => {
            cy.get(this.marketplacePageLocator.inputMarketplaceDescription).type(description);
        });


        cy.get(this.marketplacePageLocator.btnNextStep2).click();

        cy.get(this.marketplacePageLocator.inputDisputeTime).clear().type(60);
        cy.get(this.marketplacePageLocator.inputDraftTime).clear().type(60);
        cy.get(this.marketplacePageLocator.inputCuratorAmount).clear().type(1000);
        cy.get(this.marketplacePageLocator.btnNextStep3).click();
        //dropdown 
        cy.get(this.marketplacePageLocator.dropdownTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.beproTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.dropdownRewardTokens).click();
        cy.get(this.marketplacePageLocator.beproRewardTokens).click();
        cy.contains(this.elementText.btnCreateMarketplace).click();

        //all confirmation to create network 
        cy.confirmMetamaskDataSignatureRequest();
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing draft time)');
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing disputable time)');
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Deploying Marketplace (Changing dispute percentage)');
        cy.confirmMetamaskPermissionToSpend();

        cy.contains('Registering Marketplace');
        cy.confirmMetamaskPermissionToSpend();
    
    }

    openProfilePage(element) {
        cy.get(this.commonPageLocator.profileIcon).click().wait(500);
        cy.contains(element).click().wait(1000);
    }

    closeMarketplace() {
        cy.openProfilePage(this.elementText.btnCustomMarketplace);
        cy.contains(this.elementText.tabGovernance).click().wait(1000);
        cy.contains(this.elementText.btnCloseMarketplace).click().wait(2000);
        cy.confirmMetamaskTransactionAndWaitForMining();
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

    setMarketplaceConfig(elTab, tab, configToChange, valueToChange) {
        const locatorToWait = configToChange;
        cy.contains(elTab, tab).click({ force: true });
        this.waitFordataToLoad(locatorToWait);
        cy.get(configToChange).clear().type(valueToChange).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
    }

}