// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import Locators from "../pages/locators";
const { faker } = require('@faker-js/faker');
const locators = new Locators();

Cypress.Commands.add('connectWalletFirstTime', () => {
    cy.importMetamaskAccount(Cypress.env('PRIVATE_KEY_CREATE_NETWORK'));
    cy.contains(locators.elementText.btnConnectWallet).should('be.enabled').click();
    cy.acceptMetamaskAccess({
        allAccounts: true
    });
    cy.switchMetamaskAccount(2);
    cy.contains(locators.elementText.btnConnectWallet).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('connectWallet', () => {
    cy.contains(page.elementText.btnConnectWallet).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('openMenuToCreate', (element) => {
    cy.contains(locators.elementText.btnCreate).click();
    cy.contains(element).click();
    cy.contains(locators.elementText.btnContinue).click();
});


Cypress.Commands.add('createDescription', () => {
    const description = faker.lorem.paragraphs(2, '<br/>\n');
    return description.toString();
});


Cypress.Commands.add('openProfilePage', (element) => {
    cy.get(locators.commonPageLocator.profileIcon).click().wait(500);
    cy.contains(element).click().wait(1000);
});

Cypress.Commands.add('SwitchAccountAndConnect', (account) => {
    cy.get(locators.commonPageLocator.profileIcon).click();
    cy.contains('span', 'Disconnect').click();
    cy.switchMetamaskAccount(account);
    cy.contains(locators.elementText.btnConnectWallet).should('be.enabled').click();
    cy.connectWallet();
});
