import Page from "../page";
const { faker } = require('@faker-js/faker');

export default class MarketplacePage extends Page {
    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }
    createMarketplace() {
        cy.openMenuToCreate(this.elementText.textCreateMarketplace);
        cy.wait(2000);
        cy.reload();
        // cy.contains(this.marketplacePageLocator.elementAfterNANInMarketplace).wait(3000);
        // cy.contains(this.elementText.btnMax).click().wait(3000);
        // cy.get(this.marketplacePageLocator.marketplaceValueToApprove).invoke('text').then(($value) => {
        //     cy.wait(4000)
        //     cy.contains(this.elementText.btnApprove).click();
        //     cy.confirmMetamaskPermissionToSpend(parseFloat($value.replace(',', '')));
        // });

        // cy.contains(this.elementText.btnLock).click({ force: true });
        // cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(1) > div.collapse.show > div > div.row.mx-0.mb-4 > div.col.bg-dark-gray.border-radius-8.p-3.mr-3 > div.d-flex.justify-content-center.mt-4.pt-3 > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none > span').click();

        // cy.confirmMetamaskTransaction();
        cy.contains(this.elementText.btnNextStep).click();

        cy.fixture('Bepro-ico.svg').then(fileContent => {
            cy.get('#logoIcon').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-ico.svg',
                mimeType: 'image/svg+xml'
            });
        });

        cy.fixture('Bepro-logo.svg').then(fileContent => {
            cy.get('#fullLogo').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Bepro-logo.svg',
                mimeType: 'image/svg+xml'
            });
        });

        cy.get('#display-name').type(this.createMarketplaceName());
        cy.createDescription().then((description) => {
            cy.get('#description').type(description);
        });
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(2) > div.collapse.show > div.d-flex.flex-row.justify-content-center > button').click();

        //dispute time
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(1) > div > div > input').clear().type(60);
        //draft time
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(3) > div > div > input').clear().type(60);
        //curator ammount
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(4) > div > div > input').clear().type(1000);
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.d-flex.flex-row.justify-content-center > button').click();
        //dropdown still not working
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(4) > div.collapse.show > div.row.pt-2 > div:nth-child(3) > div > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m').click().contains('BEPRO').click();
        cy.get('#root-container > div > div > div > div > div > div > div > div:nth-child(4) > div.collapse.show > div.row.pt-2 > div:nth-child(4) > div > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m').click().contains('BEPRO').click();

        cy.contains('Create Marketplace').click();
        cy.confirmMetamaskTransaction();
        cy.wait(15000)
        cy.confirmMetamaskTransaction();
        cy.wait(15000)
        cy.confirmMetamaskTransaction();
        cy.wait(15000)


        cy.wait(100000);


    }
}