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
    cy.switchMetamaskAccount(2);
    cy.get(locators.commonPageLocator.btnConnectWallet).should('be.enabled').click();
    cy.contains(locators.elementText.btnConnectMetamask).should('be.enabled').click();
    cy.acceptMetamaskAccess({
        allAccounts: true,
        confirmDataSignatureRequest: true,
    });
});

Cypress.Commands.add('connectWallet', () => {
    cy.get(locators.commonPageLocator.btnConnectWallet).should('be.enabled').click();
    cy.contains(locators.elementText.btnConnectMetamask).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('openMenuToCreate', (element) => {
    cy.get(locators.explorePageLocator.btnExplore).click();
    cy.get(locators.commonPageLocator.btnCreate).should('be.visible').click();
    cy.get(element).click();
    cy.get(locators.commonPageLocator.btnContinueCreation).click();
});


Cypress.Commands.add('createDescription', () => {
    const description = faker.lorem.paragraphs(2, '<br/>\n');
    return description.toString();
});


Cypress.Commands.add('openProfilePage', (element) => {
    cy.get(locators.commonPageLocator.profileIcon).click().wait(500);
    cy.get(element).click().wait(1000);
});

Cypress.Commands.add('switchAccountAndConnect', (account) => {
    cy.get(locators.commonPageLocator.profileIcon).click();
    cy.get(locators.commonPageLocator.btnDisconnectWallet).click();
    cy.switchMetamaskAccount(account);
    cy.connectWallet();
});

