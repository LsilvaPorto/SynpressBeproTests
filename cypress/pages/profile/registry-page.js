import Locators from "../locators";

export default class RegistryPage extends Locators {

    setRegistrySettings(tab, configToChange, valueToChange, saveButton){
        cy.get(this.managementPageLocator.inputPrimaryColor).should('be.visible');
        cy.get(tab).click();
        cy.waitForResources();
        cy.get(configToChange).wait(500).clear().type(valueToChange);
        cy.contains(this.commonPageLocator.btn, saveButton).should('be.enabled').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();
        cy.get('.spinner-border').should('not.exist');
        cy.reload();
    }

    setCancelFee(cancelFee = 2) {
        this.setRegistrySettings(this.managementPageLocator.tabRegistry, this.managementPageLocator.inputCancelFee, cancelFee, this.elementText.btnSaveChanges);
    }

    setCloseFee(closeFee = 10) {
        this.setRegistrySettings(this.managementPageLocator.tabRegistry, this.managementPageLocator.inputCloseFee, closeFee, this.elementText.btnSaveChanges);
    }

    setMarketplaceCreationFee(marketplaceCreationFee = 2) {
        this.setRegistrySettings(this.managementPageLocator.tabRegistry, this.managementPageLocator.inputMarketplaceCreationFee, marketplaceCreationFee, this.elementText.btnSaveChanges);
    }

    setMarketplaceCreationAmount(marketplaceCreationAmount = 10000) {
        this.setRegistrySettings(this.managementPageLocator.tabRegistry, this.managementPageLocator.inputMarketplaceCreationAmount, marketplaceCreationAmount, this.elementText.btnSaveChanges);
    }

}