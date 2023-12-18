import MarketplacePage from "./marketplace";

export default class RegistryPage extends MarketplacePage {
    element = 'span';
    setMarketplaceConfig(element, tab, configToChange, valueToChange){
        const locatorToWait = configToChange;
        cy.contains(element, tab).click();
        this.waitFordataToLoad(locatorToWait);
        cy.get(configToChange).clear().type(valueToChange).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        
    }
    setCancelFee(cancelFee = 2) {
        this.setMarketplaceConfig(this.element,this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, cancelFee);
    }

    setCloseFee(closeFee = 10) {
        this.setMarketplaceConfig(this.element, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, closeFee);
    }

    setMarketplaceCreationFee(marketplaceCreationFee = 2) {
        this.setMarketplaceConfig(this.element, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, marketplaceCreationFee);
    }

    setMarketplaceCreationAmount(marketplaceCreationAmount = 10000) {
        this.setMarketplaceConfig(this.element, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, marketplaceCreationAmount);
    }

}