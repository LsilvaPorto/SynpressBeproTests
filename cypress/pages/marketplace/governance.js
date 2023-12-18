import MarketplacePage from "./marketplace";
const { faker } = require('@faker-js/faker');

export default class GovernancePage extends MarketplacePage {

    setDisputeTime(disputeTime = 60) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get(this.managementPageLocator.inputDisputeTime).clear().type(disputeTime).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

    setPercentageForDispute(percentageForDispute = 3) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get(this.managementPageLocator.inputPercentageForDispute).clear().type(percentageForDispute).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

    setDraftTime(draftTime = 60) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get(this.managementPageLocator.inputDraftTime).clear().type(draftTime).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

    setCuratorAmount(curatorAmount = 10000) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get(this.managementPageLocator.inputCuratorAmount).clear().type(curatorAmount).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

    setMergerFee(mergerFee = 0.05) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get(this.managementPageLocator.inputMergerFee).clear().type(mergerFee).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

    setProposalCreatorFee(proposalCreatorFee = 2) {
        cy.contains(this.elementText.tabGovernance).click();
        this.waitFordataToLoad();
        cy.get().clear().type(proposalCreatorFee).wait(1000);
        cy.contains(this.elementText.btnSaveChanges).click();
        cy.confirmMetamaskPermissionToSpend();
        cy.reload();
        cy.contains(this.elementText.tabGovernance).click();
    }

}