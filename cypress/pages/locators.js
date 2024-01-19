export default class Locators {

    commonPageLocator = {
        btn: 'button',
        btnAcceptCookies: "#rcc-confirm-button",
        profileIcon: "#__next > div > div.nav-container > div > div > div.d-flex.flex-row.align-items-center.gap-3 > div:nth-child(2) > div > div.cursor-pointer.popover-without-arrow.profile-menu",
        btnApprove: ':nth-child(2) > .justify-content-end > .row.justify-content-center > .col-xs-12 > .d-none > .pe-2 > .btn',
        inputMarketPlaceSelect: "#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div > div.select-network-dropdown.w-max-none > div > div",
        beproMarketSelect: ".react-select__option",
        btnNext: '#root-container > div.d-none.d-md-flex.flex-column > div.container-xl.d-flex.flex-column.justify-content-end > div > div > div.d-none.d-md-flex.row.my-4 > div.col-6.pe-2 > button',
        inputTaskTitle: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.row.justify-content-center > div > div > input',
        InputTaskDescription: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div:nth-child(4) > div > textarea',
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        tagTesting: '.react-select__menu .react-select__option:contains("Testing")',
        inputTotalAmmount: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div.mt-4 > div > div:nth-child(4) > div.row.justify-content-between > div.col-md-4.col-12.mt-1 > div > div.input-group.border-radius-4 > input',
        span: 'span',
        
    };

    taskPageLocator = {
        componentTaskStatus: '#root-container > div.mt-2.border-bottom.border-gray-850.pb > div > div > div > div > div > div.row.align-items-center.flex-wrap.border-top.border-gray-850.mt-3.pt-3 > div:nth-child(1) > div',
        inputDeliverableLink: ':nth-child(1) > .col-md-12 > .form-group > .form-control',
        inputDeliverableTitle: ':nth-child(3) > .col-md-12 > .form-group > .form-control',
        inputDeliverableDescription: '.p-1 > .form-control',
        imgPreviewLinkDeliverable: 'img[src="https://afrodite.bepro.network/images/meta-thumbnail.jpeg"].border-radius-8',
        btnFinishProposalCreation: '#new-proposal-modal > div > div.row.mx-0.modal-footer > div > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none',
        btnArrowBackFromDeliverable: '#root-container > div.mt-3.pb-2.border-bottom.border-gray-850 > div > div > div > div > div:nth-child(1) > div > div.me-2.cursor-pointer',
        textStatusProposal: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div > div:nth-child(1) > div.row.mb-2.proposal-progress-bar.align-items-center > div:nth-child(1) > h4',
        dropdownProposal: '.react-select__placeholder',
        placeholderProposal: 'Select...',
        dropdownOptionProposal: '.react-select__option:contains("code")',
        componentProposalstatus: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div',
    }

    marketplacePageLocator = {
        tBeproAvailable: '#root-container > div > div > div > div > div > div > div > div:nth-child(1) > div.collapse.show > div > div.row.mx-0.mb-4 > div:nth-child(1) > div > div > div.row.bg-dark-gray.border-radius-8.amount-input > div > div.d-flex.caption-small.justify-content-between.align-items-center.p-3.mt-1.mb-1 > div > span',
        marketplaceValueToApprove: '#root-container > div > div > div > div > div > div > div > div:nth-child(1) > div.collapse.show > div > div.row.mx-0.mb-4 > div.col.bg-dark-gray.border-radius-8.p-3.mr-3 > div.d-flex.justify-content-between.caption-large.mb-3.amount-input > div:nth-child(2) > span',
        btnLockTBepro: '#root-container > div > div > div > div > div > div > div > div:nth-child(1) > div.collapse.show > div > div.row.mx-0.mb-4 > div.col.bg-dark-gray.border-radius-8.p-3.mr-3 > div.d-flex.justify-content-center.mt-4.pt-3 > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none > span',
        logoIcon: '#logoIcon',
        fullLogo: '#fullLogo',
        inputMarketplaceName: '#display-name',
        inputMarketplaceDescription: '#description',
        btnNextStep2: '#root-container > div > div > div > div > div > div > div > div:nth-child(2) > div.collapse.show > div.d-flex.flex-row.justify-content-center > button',
        btnNextStep3: '#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.d-flex.flex-row.justify-content-center > button',
        inputDisputeTime: '#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(1) > div > div > input',
        inputDraftTime: '#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(3) > div > div > input',
        inputCuratorAmount: '#root-container > div > div > div > div > div > div > div > div:nth-child(3) > div.collapse.show > div.row.pt-2 > div:nth-child(2) > div.row.mt-2.gy-3 > div:nth-child(4) > div > div > input',
        dropdownTransactionalTokens: '#root-container > div > div > div > div > div > div > div > div:nth-child(4) > div.collapse.show > div.row.pt-2 > div:nth-child(3) > div > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        beproTransactionalTokens: '#react-select-3-option-1',
        dropdownRewardTokens: '#root-container > div > div > div > div > div > div > div > div:nth-child(4) > div.collapse.show > div.row.pt-2 > div:nth-child(4) > div > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',
        beproRewardTokens: '#react-select-4-option-0',
    }

    managementPageLocator = {
        inputDisputeTime: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(1) > div > div > input',
        inputPercentageForDispute: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(2) > div > div > input',
        inputDraftTime: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(3) > div > div > input',
        inputCuratorAmount: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(4) > div > div > input',
        inputMergerFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(7) > div > div > input',
        inputProposalCreatorFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div:nth-child(5) > div > div:nth-child(8) > div > div > input',
        inputCancelFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div.align-items-top.mb-5.gy-3.row > div:nth-child(1) > div > div > input',
        inputCloseFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div.align-items-top.mb-5.gy-3.row > div:nth-child(2) > div > div > input',
        inputMarketplaceCreationFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div.align-items-top.mb-5.gy-3.row > div:nth-child(3) > div > div > input',
        inputCloseFee: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div.align-items-top.mb-5.gy-3.row > div:nth-child(2) > div > div > input',
        inputMarketplaceCreationAmount: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div.read-only-wrapper > div > div.align-items-top.mb-5.gy-3.row > div:nth-child(4) > div > div > input',
        toastySuccess: '#__next > div > div.toast-container > div > div.toast-header.border-bottom-0.bg-transparent.px-3 > strong:contains("Success")',
        inputBannedDomains: '#root-container > div > div.col-12.col-xl-10.p-3.p-xl-5.profile-content.bg-gray-950 > div > div:nth-child(3) > div > div.d-flex.flex-column.my-4 > div.d-flex.align-items-center.flex-wrap.mb-4 > div.col-xl-5.col-md-6.col-12 > div > input',
    
    }

    elementText = {
        btnCode: 'Code',
        btnDesign: 'Design',
        btnOther: 'Other',
        createTask: 'Create Task',
        btnApprove: 'Approve',
        btnConnectWallet: 'Connect Wallet',
        btnBepro: 'bepro',
        btnTask: 'Task',
        btnCreate: 'Create',
        btnContinue: 'Continue',
        btnStartWorking: 'Start Working',
        btnCreateDeliverable: 'Create Deliverable',
        btnMarkAsReady: '#make-ready-for-review-modal > div > div.row.mx-0.modal-footer > div > div:nth-child(2) > div > button',
        btnMakeAReview: 'Make a Review',
        btnCreateProposal: 'Create Proposal',
        btnViewProposal: 'View Proposal',
        btnAcceptProposal: 'Accept',
        btnConfirmDistribution: 'Confirm Distribution',
        textAccepted: 'Accepted',
        textCreateMarketplace: 'Create Your Marketplace',
        textCreateTask: 'Launch in Open Marketplace',
        btnMax: 'Max',
        btnLock: 'Lock TBEPRO',
        btnNextStep: 'Next Step',
        btnUploadLogoIcon: 'logo icon',
        btnUploadFullLogo: 'upload full logo',
        placeholderMarketplaceName: 'Marketplace name',
        placeholderMarketplaceDescription: 'Type a description...',
        btnCreateMarketplace: 'Create Marketplace',
        btnCustomMarketplace: 'Custom Marketplace',
        btnVotingPower: 'Voting Power',
        tabGovernance: 'Governance',
        tabRegistry: 'Registry',
        tabManagement: 'Management',
        tabPermissions: 'Permissions',
        btnCloseMarketplace: 'Close marketplace',
        btnSaveChanges: 'Save Changes',
        textConfirmationMarketplaceClosed: "You don't have a custom marketplace created",
        btnCreateOne: 'Create one',
        btnAdd: 'Add',
        btnEditTask: 'Edit task',
        btnConnectMetamask: 'Metamask',
    }
}