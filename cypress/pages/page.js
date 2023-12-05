const { faker } = require('@faker-js/faker');
export default class Page {

    locator = {
        btnAcceptCookies: "#rcc-confirm-button",
        btn: "button",
        btnCreate: "#multiAction > div > div.react-select__value-container.react-select__value-container--has-value.css-hlgwow > div > span.text-truncate.text-uppercase",
        profileIcon: "#__next > div > div.nav-container > div > div > div.d-flex.flex-row.align-items-center.gap-3 > div:nth-child(2) > div > div",
        btnCreateTask: '.react-select__menu-list .react-select__option',
        inputMearketPlaceSelect: "#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div > div.select-network-dropdown.w-max-none > div > div",
        beproMarketSelect: ".react-select__option",
        btnNext: '#root-container > div.d-none.d-md-flex.flex-column > div.container-xl.d-flex.flex-column.justify-content-end > div > div > div.d-none.d-md-flex.row.my-4 > div.col-6.pe-2 > button',
        inputTaskTitle: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.row.justify-content-center > div > div > input',
        InputTaskDescription: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div:nth-child(4) > div > textarea',
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        tagTesting: '.react-select__menu .react-select__option:contains("Testing")',
        inputTotalAmmount: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div.mt-4 > div > div:nth-child(4) > div.row.justify-content-between > div.col-md-4.col-12.mt-1 > div > div.input-group.border-radius-4 > input',
    };

    connectWallet() {
        cy.get(this.locator.btn).contains("Connect Wallet").click();
        cy.acceptMetamaskAccess().wait(3000);
        cy.get(this.locator.btn).contains("Connect Wallet").click();
        cy.confirmMetamaskDataSignatureRequest();
    }

    CreateMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }

    CreateTaskTitle() {
        const task = faker.lorem.words(5);
        return task.toString();
    }

    CreateTaskDescription() {
        const description = faker.lorem.paragraphs(2, '<br/>\n');
        return description.toString();
    }

    createTaskValues() {
        const value = faker.number.int({ max: 1000 })
        return value;
    }
    createTask() {
        cy.get(this.locator.btnAcceptCookies).click();
        cy.get(this.locator.btnCreate).contains("Create").click();
        cy.get(this.locator.btnCreateTask).contains("Task").click();
        cy.get(this.locator.inputMearketPlaceSelect).click();
        // Clica no item com texto "bepro" dentro do dropdown
        cy.contains(this.locator.beproMarketSelect, 'bepro').click();
        cy.get(this.locator.btnNext).click();

        const title = this.CreateTaskTitle();
        cy.get(this.locator.inputTaskTitle).type(title, { force: true });
        const description = this.CreateTaskDescription();
        cy.get(this.locator.InputTaskDescription).type(description, { force: true });
        cy.get(this.locator.inputTags).click();
        cy.get(this.locator.tagTesting).click();

        cy.get(this.locator.btn).contains('Code').click({ force: true });
        cy.get(this.locator.btnNext).click();
        cy.wait(1000);
        const value = this.createTaskValues();
        cy.get(this.locator.inputTotalAmmount).type(value);
        cy.get(this.locator.btnNext).click();
        cy.get(this.locator.btn).contains('Approve').click({ force: true });
        cy.confirmMetamaskPermissionToSpend(value);
        cy.get(this.locator.btn).contains('Create Task').click({ force: true });
        cy.confirmMetamaskTransaction();

    }



}
