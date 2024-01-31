import Locators from "../locators";

export default class GovernancePage extends Locators {


    setGovernorSettings(tab, configToChange, valueToChange, saveButton){
        cy.get(this.managementPageLocator.inputPrimaryColor).should('be.visible');
        cy.get(tab).click();
        cy.get(configToChange).wait(500).clear().type(valueToChange);
        cy.contains(this.commonPageLocator.btn, saveButton).should('be.enabled').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();
        cy.contains(this.elementText.toastySuccess).should('be.visible');
        cy.reload();
    }

    setDisputeTime(disputeTime = 60) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputDisputeTime, disputeTime, this.elementText.btnSaveChanges);
    }

    setPercentageForDispute(percentageForDispute = 3) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputPercentageForDispute, percentageForDispute, this.elementText.btnSaveChanges);
    }

    setDraftTime(draftTime = 60) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputDraftTime, draftTime, this.elementText.btnSaveChanges);
    }

    setCuratorAmount(curatorAmount = 10000) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputCuratorAmount, curatorAmount, this.elementText.btnSaveChanges);
    }

    setMergerFee(mergerFee = 0.05) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputMergerFee, mergerFee, this.elementText.btnSaveChanges);
    }

    setProposalCreatorFee(proposalCreatorFee = 2) {
        this.setGovernorSettings(this.managementPageLocator.tabGovernance, this.managementPageLocator.inputProposalCreatorFee, proposalCreatorFee, this.elementText.btnSaveChanges);
    }

}