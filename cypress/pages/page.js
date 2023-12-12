import 'cypress-wait-until';
const { faker } = require('@faker-js/faker');
export default class Page {

    locator = {
        btnAcceptCookies: "#rcc-confirm-button",
        btnConnect: 'span > .d-none',
        btn: "button",
        btnCreate: '.gap-3 > .read-only-wrapper > .multi-action-button > #multiAction > .react-select__control',
        profileIcon: "#__next > div > div.nav-container > div > div > div.d-flex.flex-row.align-items-center.gap-3 > div:nth-child(2) > div > div",
        btnCreateTask: '.react-select__menu-list .react-select__option',
        btnApprove: ':nth-child(2) > .justify-content-end > .row.justify-content-center > .col-xs-12 > .d-none > .pe-2 > .btn',
        inputMearketPlaceSelect: "#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div > div.select-network-dropdown.w-max-none > div > div",
        beproMarketSelect: ".react-select__option",
        btnNext: '#root-container > div.d-none.d-md-flex.flex-column > div.container-xl.d-flex.flex-column.justify-content-end > div > div > div.d-none.d-md-flex.row.my-4 > div.col-6.pe-2 > button',
        inputTaskTitle: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.row.justify-content-center > div > div > input',
        InputTaskDescription: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div:nth-child(4) > div > textarea',
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        tagTesting: '.react-select__menu .react-select__option:contains("Testing")',
        inputTotalAmmount: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div.mt-4 > div > div:nth-child(4) > div.row.justify-content-between > div.col-md-4.col-12.mt-1 > div > div.input-group.border-radius-4 > input',


    };

    btnText = {
        btnCode: 'Code',
        btnDesign: 'Design',
        btnOther: 'Other',
        btnCreateTask: 'Create Task',
        btnApprove: 'Approve',
        btnConnectWallet: 'Connect Wallet',
        btnBepro: 'bepro',
        btnTask: 'Task',
    }

    value = null;

    connectWallet() {
        cy.get(this.locator.btnConnect).click();
        cy.acceptMetamaskAccess();
        cy.get(this.locator.btnConnect).click();
        cy.confirmMetamaskDataSignatureRequest();
    }

    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }

    createTaskTitle() {
        const task = faker.lorem.words(5);
        return task.toString();
    }

    createTaskDescription() {
        const description = faker.lorem.paragraphs(2, '<br/>\n');
        return description.toString();
    }

    createTaskValue() {
        const value = faker.number.int({ max: 1000 })
        return value;
    }

    selectMarketplace() {
        // Clica no item com texto "bepro" dentro do dropdown
        cy.contains(this.locator.beproMarketSelect, this.btnText.btnBepro).click();
        cy.get(this.locator.btnNext).click();
    }

    fillTaskTitle() {
        const title = this.createTaskTitle();
        cy.get(this.locator.inputTaskTitle).type(title, { force: true });
    }

    fillTaskDescription() {
        const description = this.createTaskDescription();
        cy.get(this.locator.InputTaskDescription).type(description, { force: true });
    }

    insertTag() {
        cy.get(this.locator.inputTags).click();
        cy.get(this.locator.tagTesting).click();

    }

    fillTaskValue() {
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get('div.text-truncate span.text-gray')
                .contains('Total Balance:')
                .parent('div.text-truncate')
                .invoke('text')
                .then((text) => {
                    const match = text.match(/Total Balance: ([\d,]+\.\d+) TUSD/);

                    // Verifique se houve uma correspondência e se o valor é maior que zero
                    if (match) {
                        const balance = parseFloat(match[1].replace(',', '.')); // Substitui vírgula por ponto
                        return balance > 0;
                    }

                    // Se não houver correspondência, continue esperando
                    return false;
                });
        }, { timeout: 10000, interval: 500 })
            .then(() => {
                // Agora que a condição foi atendida, você pode realizar ações adicionais
                const value = this.createTaskValue();
                cy.get(this.locator.inputTotalAmmount).type(value);
                this.value = value;
            });
    }

    createTask() {
        cy.get(this.locator.btnCreate).click();
        cy.get(this.locator.btnCreateTask).contains(this.btnText.btnTask).click();
        cy.get(this.locator.inputMearketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.get(this.locator.btn).contains(this.btnText.btnCode).click({ force: true });
        cy.get(this.locator.btnNext).click();
        this.fillTaskValue();

        cy.get(this.locator.btnNext).wait(2500).click().wait(500);
        cy.get(this.locator.btnApprove).wait(2000).click({ force: true });
        cy.confirmMetamaskPermissionToSpend(this.value);

        cy.get(this.locator.btn).contains(this.btnText.btnCreateTask, { timeout: 120000 }).wait(1500).click({ force: true });        
        cy.confirmMetamaskTransaction();

    }


}
