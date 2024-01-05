import MarketplacePage from "./marketplace";

export default class GovernancePage extends MarketplacePage {

    setDisputeTime(disputeTime = 60) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputDisputeTime, disputeTime);
    }

    setPercentageForDispute(percentageForDispute = 3) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputPercentageForDispute, percentageForDispute);
    }

    setDraftTime(draftTime = 60) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputDisputeTime, draftTime);
    }

    setCuratorAmount(curatorAmount = 10000) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputDisputeTime, curatorAmount);
    }

    setMergerFee(mergerFee = 0.05) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputDisputeTime, mergerFee);
    }

    setProposalCreatorFee(proposalCreatorFee = 2) {
        this.setMarketplaceConfig(this.elementText.tabGovernance, this.managementPageLocator.inputDisputeTime, proposalCreatorFee);
    }

}