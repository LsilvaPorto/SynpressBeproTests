import MarketplacePage from "./marketplace";

export default class RegistryPage extends MarketplacePage {

    setCancelFee(cancelFee = 2) {
        this.setMarketplaceConfig(this.commonPageLocator.span, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, cancelFee);
    }

    setCloseFee(closeFee = 10) {
        this.setMarketplaceConfig(this.commonPageLocator.span, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, closeFee);
    }

    setMarketplaceCreationFee(marketplaceCreationFee = 2) {
        this.setMarketplaceConfig(this.commonPageLocator.span, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, marketplaceCreationFee);
    }

    setMarketplaceCreationAmount(marketplaceCreationAmount = 10000) {
        this.setMarketplaceConfig(this.commonPageLocator.span, this.elementText.tabRegistry, this.managementPageLocator.inputCancelFee, marketplaceCreationAmount);
    }

}