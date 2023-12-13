import 'cypress-wait-until';
export default class Page {

    commonPageLocator = {
        btnAcceptCookies: "#rcc-confirm-button",
        btnCreate: '.gap-3 > .read-only-wrapper > .multi-action-button > #multiAction > .react-select__control',
        profileIcon: "#__next > div > div.nav-container > div > div > div.d-flex.flex-row.align-items-center.gap-3 > div:nth-child(2) > div > div",
        spanCreateTask: 'span:contains("Launch in Open Marketplace")',
        btnApprove: ':nth-child(2) > .justify-content-end > .row.justify-content-center > .col-xs-12 > .d-none > .pe-2 > .btn',
        inputMarketPlaceSelect: "#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div > div.select-network-dropdown.w-max-none > div > div",
        beproMarketSelect: ".react-select__option",
        btnNext: '#root-container > div.d-none.d-md-flex.flex-column > div.container-xl.d-flex.flex-column.justify-content-end > div > div > div.d-none.d-md-flex.row.my-4 > div.col-6.pe-2 > button',
        inputTaskTitle: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.row.justify-content-center > div > div > input',
        InputTaskDescription: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div:nth-child(4) > div > textarea',
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        tagTesting: '.react-select__menu .react-select__option:contains("Testing")',
        inputTotalAmmount: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div.mt-4 > div > div:nth-child(4) > div.row.justify-content-between > div.col-md-4.col-12.mt-1 > div > div.input-group.border-radius-4 > input',
    };

    taskPageLocator = {
        componentTaskStatus: '#root-container > div.mt-2.border-bottom.border-gray-850.pb > div > div > div > div > div > div.row.align-items-center.flex-wrap.border-top.border-gray-850.mt-3.pt-3 > div:nth-child(1) > div',
        statusDeliverableComponent: '#root-container > div.mt-3.pb-2.border-bottom.border-gray-850 > div > div > div > div > div:nth-child(2) > div.row.d-flex.flex-wrap.justify-content-between > div.col.d-flex.flex-wrap.align-items-center.mt-3 > div.my-2 > div',
        inputDeliverableLink: ':nth-child(1) > .col-md-12 > .form-group > .form-control',
        inputDeliverableTitle: ':nth-child(3) > .col-md-12 > .form-group > .form-control',
        inputDeliverableDescription: '.p-1 > .form-control',
        imgPreviewLinkDeliverable: 'img[src="https://afrodite.bepro.network/images/meta-thumbnail.jpeg"].border-radius-8',
        btnFinishProposalCreation: '#new-proposal-modal > div > div.row.mx-0.modal-footer > div > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none',
        btnArrowBackFromDeliverable: '#root-container > div.mt-3.pb-2.border-bottom.border-gray-850 > div > div > div > div > div:nth-child(1) > div > div.me-2.cursor-pointer',
        textStatusProposal: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div > div:nth-child(1) > div.row.mb-2.proposal-progress-bar.align-items-center > div:nth-child(1) > h4',
        dropdownProposal: '.react-select__placeholder',
        dropdownOptionProposal: '.react-select__option:contains("code")',
        componentProposalstatus: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div',
        btn: 'button',
    }

    btnText = {
        btnCode: 'Code',
        btnDesign: 'Design',
        btnOther: 'Other',
        createTask: 'Create Task',
        btnApprove: 'Approve',
        btnConnectWallet: 'Connect Wallet',
        btnBepro: 'bepro',
        btnTask: 'Task',
    }

    connectWallet() {
        cy.contains('Connect Wallet').click();
        cy.acceptMetamaskAccess();
        cy.contains('Connect Wallet').click();
        cy.confirmMetamaskDataSignatureRequest();
    }
}
