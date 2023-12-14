import Page from "../page";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Page {
    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }
    createMarketplace() {
        cy.openMenuToCreate(this.elementText.textCreateMarketplace);
    }
}