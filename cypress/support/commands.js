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
import Page from "../pages/page";
const { faker } = require('@faker-js/faker');
const page = new Page();

Cypress.Commands.add('connectWalletFirstTime', () => {
    cy.contains(page.elementText.btnConnectWallet).should('be.enabled').click();
    cy.acceptMetamaskAccess();
    cy.contains(page.elementText.btnConnectWallet).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('connectWallet', () => {
    cy.contains(page.elementText.btnConnectWallet).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('openMenuToCreate', (element) => {
    cy.contains(page.elementText.btnCreate).click();
    cy.contains(element).click();
    cy.contains(page.elementText.btnContinue).click();
});


Cypress.Commands.add('createDescription', () => {
    const description = faker.lorem.paragraphs(2, '<br/>\n');
    return description.toString();
});