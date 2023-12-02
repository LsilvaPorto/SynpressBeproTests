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
        InputTaskDetails: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div:nth-child(4) > div > textarea',
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        tagTesting: '.react-select__menu .react-select__option:contains("Testing")',
        inputTotalAmmount: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div.mt-4 > div > div:nth-child(4) > div.row.justify-content-between > div.col-md-4.col-12.mt-1 > div > div.input-group.border-radius-4 > input',
    };

    getTitle() {
        return cy.title();
    }

    connectWallet() {
        cy.get(this.locator.btn).contains("Connect Wallet").click();
        cy.acceptMetamaskAccess().wait(3000);
        cy.confirmMetamaskDataSignatureRequest();
    }

}
