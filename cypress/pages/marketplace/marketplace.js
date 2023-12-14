import Page from "../page";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Page {
    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }
    createMarketplace() {
        cy.openMenuToCreate(this.elementText.textCreateMarketplace);
        cy.wait(2000);
        cy.reload();
        cy.contains(this.marketplacePageLocator.elementAfterNANInMarketplace).wait(2000);
        cy.contains(this.elementText.btnMax).click();
        cy.get(this.marketplacePageLocator.marketplaceValueToApprove).invoke('text').then(($value) => {
            cy.contains(this.elementText.btnApprove).click();
            cy.confirmMetamaskPermissionToSpend(parseFloat($value.replace(',', '')));
        });

        cy.contains(this.elementText.btnLock).click();
        cy.confirmMetamaskTransaction();
        cy.contains(this.elementText.btnNextStep).click();
        cy.fixture('Bebro-ico.svg').then((fileContent) => {
            cy.contains(this.elementText.btnUploadLogoIcon).selectFile(fileContent);
        });
        cy.fixture('Bebro-logo.svg').then((fileContent) => {
            cy.contains(this.elementText.btnUploadFullLogo).selectFile(fileContent);
        });

        cy.contains(this.elementText.placeholderMarketplaceName).type(this.createMarketplaceName());
        cy.contains(this.elementText.placeholderMarketplaceDescription).type(cy.createDescription());
        cy.contains(this.elementText.btnNextStep).click();

        

        cy.wait(100000);


    }
}