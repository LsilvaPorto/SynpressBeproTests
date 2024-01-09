import MarketplacePage from "./marketplace";
const { faker } = require('@faker-js/faker');

export default class PermissionPage extends MarketplacePage {
    setBannedDomain(domain){
        cy.contains(this.elementText.tabPermissions).click();
        cy.get(this.managementPageLocator.inputBannedDomains).type(domain);
        cy.contains(this.elementText.btnAdd).click()
        cy.get(this.managementPageLocator.toastySuccess).should('exist').wait(5000).reload();
        cy.contains(this.elementText.tabPermissions).click();
    }

}