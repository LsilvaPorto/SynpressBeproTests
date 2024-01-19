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
import { playwright } from '@synthetixio/synpress/commands/playwright';
const { faker } = require('@faker-js/faker');
const locators = new Locators();

Cypress.Commands.add('connectWalletFirstTime', () => {

    cy.importMetamaskAccount(Cypress.env('PRIVATE_KEY_CREATE_NETWORK'));
    cy.switchMetamaskAccount(2);
    cy.contains(locators.elementText.btnConnectWallet).should('be.enabled').click();
    cy.contains(locators.elementText.btnConnectMetamask).should('be.enabled').click();
    cy.acceptMetamaskAccess({
        allAccounts: true,
        confirmDataSignatureRequest: true,
    });
});

Cypress.Commands.add('connectWallet', () => {
    cy.contains(locators.elementText.btnConnectWallet).should('be.enabled').click();
    cy.contains(locators.elementText.btnConnectMetamask).should('be.enabled').click();
    cy.confirmMetamaskDataSignatureRequest();
});

Cypress.Commands.add('openMenuToCreate', (element) => {
    cy.get('#__next > div > div.nav-container > div > div > div.d-flex.align-items-center.nav-gap > div.d-none.d-md-flex > ul > li:nth-child(3) > a').click();
    cy.get('#root-container > div > div > div > div.row.mb-4 > div > div.row.mb-5 > div > div.row.gy-3.gx-3 > div:nth-child(1) > div > button').should('be.visible');
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

Cypress.Commands.add('switchAccountAndConnect', (account) => {
    cy.get(locators.commonPageLocator.profileIcon).click();
    cy.contains('span', 'Disconnect').click();
    cy.switchMetamaskAccount(account);
    cy.connectWallet();
});

Cypress.Commands.add('waitMetamaskPopUp', () => {
    playwright.isMetamaskNotificationWindowActive().then((isActive) => {
        if (isActive) {
         cy.log('window is active');
        } else {
          cy.log('window is not active');
        }
      });
    // cy.waitUntil(() => {
    //     try {
    //         cy.switchToMetamaskNotification()
    //             .then((status) => {
    //                 return status;
    //             });
    //     } catch (error) {
    //         return false;
    //     }
    // }, { timeout: 60000, interval: 1000 }).then(() => {
    //     cy.log('window is active');
    // })
});
