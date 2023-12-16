import Page from "../page";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Page {
    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }
    createMarketplace() {
        cy.openMenuToCreate(this.elementText.textCreateMarketplace);
        cy.reload();

        //wait page to be ready for interaction
        cy.contains(this.marketplacePageLocator.elementAfterNANInMarketplace).wait(3000);
        cy.contains(this.elementText.btnMax).click();


        cy.get(this.marketplacePageLocator.marketplaceValueToApprove).invoke('text').then(($value) => {
            cy.wait(4000);
            cy.contains(this.elementText.btnApprove).click();
            cy.confirmMetamaskPermissionToSpend();//parseFloat($value.replace(',', '')));
        });
        ;
        //btn lockBepro
        cy.get(this.marketplacePageLocator.btnLockTBepro).click({ timeout: 1200000 });
        cy.confirmMetamaskTransaction();

        cy.contains(this.elementText.btnNextStep, { timeout: 60000 }).click();


        cy.fixture('Bepro-ico.svg').then(fileContent => {
            cy.get(this.marketplacePageLocator.logoIcon).attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-ico.svg',
                mimeType: 'image/svg+xml'
            });
        });
        cy.fixture('Bepro-logo.svg').then(fileContent => {
            cy.get(this.marketplacePageLocator.fullLogo).attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-logo.svg',
                mimeType: 'image/svg+xml'
            });
        });
        cy.get(this.marketplacePageLocator.inputMarketplaceName).type(this.createMarketplaceName());
        cy.createDescription().then((description) => {
            cy.get(this.marketplacePageLocator.inputMarketplaceDescription).type(description);
        });


        cy.get(this.marketplacePageLocator.btnNextStep2).click();

        //dispute time
        cy.get(this.marketplacePageLocator.inputDisputeTime).clear().type(60);
        //draft time
        cy.get(this.marketplacePageLocator.inputDraftTime).clear().type(60);
        //curator ammount
        cy.get(this.marketplacePageLocator.inputCuratorAmount).clear().type(1000);
        cy.get(this.marketplacePageLocator.btnNextStep3).click();
        //dropdown working
        cy.get(this.marketplacePageLocator.dropdownTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.beproTransactionalTokens).click();
        cy.get(this.marketplacePageLocator.dropdownRewardTokens).click();
        cy.get(this.marketplacePageLocator.beproRewardTokens).click();

        cy.contains(this.elementText.btnCreateMarketplace).click();
        cy.confirmMetamaskDataSignatureRequest();
        
        //all confirmation to create network 
        cy.confirmMetamaskTransaction();
        cy.wait(30000);
        cy.confirmMetamaskTransaction();
        cy.wait(20000);
        cy.confirmMetamaskTransaction();
        cy.wait(20000);
        cy.confirmMetamaskTransaction();
        cy.wait(20000);
        cy.confirmMetamaskTransaction();

    }

    closeMarketplace() {
        cy.get(this.commonPageLocator.profileIcon).click();
        cy.contains('Governance').click();
        cy.contains('Close marketplace').click();
        cy.confirmMetamaskDataSignatureRequest();
        cy.confirmMetamaskTransaction();
    }

}