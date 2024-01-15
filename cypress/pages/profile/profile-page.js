import Locators from "../locators";
const { faker } = require('@faker-js/faker');

export default class ProfilePage extends Locators {

    selectMarketplaceAndNetwork(MarketplaceName, networkName) {
        cy.contains('input', 'Select Marketplace').click();
    }

    lockVotes(votes = 2) {
        cy.openProfilePage(this.elementText.btnVotingPower);

    }

    unlockVotes(votes) {
        cy.openProfilePage(this.elementText.btnVotingPower)
    }

}