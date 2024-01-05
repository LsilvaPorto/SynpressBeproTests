import Page from "../page";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Page {
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
        cy.confirmMetamaskPermissionToSpend().wait(35000);
        cy.confirmMetamaskPermissionToSpend().wait(35000);
        cy.confirmMetamaskPermissionToSpend().wait(35000);
        cy.confirmMetamaskPermissionToSpend().wait(35000);
        cy.confirmMetamaskPermissionToSpend().wait(1000);

    }

    openMarketplacePage() {
        cy.get(this.commonPageLocator.profileIcon).click().wait(500);
        cy.contains(this.elementText.btnCustomMarketplace).click().wait(1000);
    }

    closeMarketplace() {
        this.openMarketplacePage();
        cy.contains(this.elementText.tabGovernance).click().wait(1000);
        cy.contains(this.elementText.btnCloseMarketplace).click();
        cy.confirmMetamaskTransaction().wait(10000);
        cy.confirmMetamaskDataSignatureRequest();
        cy.reload();
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

    setMarketplaceConfig(tab, configToChange, valueToChange){
        const locatorToWait = configToChange;
        cy.contains(tab).click();
        this.waitFordataToLoad(locatorToWait);
        cy.get(configToChange).clear().type(valueToChange).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.get(this.managementPageLocator.toastySuccess).should('exist').reload();
        cy.contains(tab).click();
    }

}