export default class Locators {

    commonPageLocator = {
        btnConnectWallet: "[data-testid='connect-wallet-button']",
        btnCreate: "[data-testid='create-btn']",
        profileIcon: "[data-testid='avatar-or-identicon']",
        btnSettings: "[data-testid='Settings']",
        btnWalletProfileMenu: "[data-testid='Wallet']",
        btnVotingPowerProfileMenu: "[data-testid='Voting Power']",
        btnPaymentsProfileMenu: "[data-testid='Payments']",
        btnTasksProfileMenu: "[data-testid='Tasks']",
        btnDeliverablesProfileMenu: "[data-testid='Deliverables']",
        btnProposalsProfileMenu: "[data-testid='Proposals']",
        btnCustomMarketplaceProfileMenu: "[data-testid='Custom Marketplace']",
        btnDisconnectWallet: "[data-testid='disconnect-wallet-btn']",
        btnLaunchInOpenMarketplace: "[data-testid='Launch in Open Marketplace']",
        btnGetExpertHelp: "[data-testid='Get Expert Help']",
        btnCreateYourMarketplace: "[data-testid='Create Your Marketplace']",
        btnContinueCreation: "[data-testid='Continue']",
        btnCancelCreation: "[data-testid='Cancel']",
        btnNotifications: "[data-testid='notifications-btn']",
        btn: 'button',
        btnAcceptCookies: "#rcc-confirm-button",
        btnApproveLock: "[data-testid='approve-btn']",
        textareaDescriptionCreateTaskDeliverableOrMarketplace: "[data-testid='description-textarea']",
        classOptionDropdown:'.react-select__option',
        //rever esses de baixo
        inputMarketPlaceSelect: "#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div > div.select-network-dropdown.w-max-none > div > div",
        beproMarketSelect: ".react-select__option",
        inputTags: '#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div.form-group.mt-4.mb-0 > div.react-select-container.css-b62m3t-container > div > div.react-select__value-container.react-select__value-container--is-multi.css-hlgwow > div.react-select__input-container.css-19bb58m',     
    };

    taskPageLocator = {
        //tasks
        linkCreateFisrtTask: "[data-testid='first-task-link']",
        inputSelectNetwork:"#react-select-9-input",
        listItemMaticumNetwork: '#react-select-9-listbox',
        inputSelectMarketplace:"#react-select-10-input",
        listItemBeproMarketplace:"#react-select-10-option-0",
        btnNextCreateTask: "[data-testid='create-task-next-button']",
        btnBackCreateTask: "[data-testid='create-task-back-button']",
        inputTitleCreateTaskOrDeliverable: "[data-testid='title-input']",
        checkboxKycCreateTask: "[data-testid='checkbox-kyc']",
        btnCodeCreateTask: "[data-testid='Code']",
        btnDesignCreateTask: "[data-testid='Design']",
        btnOtherCreateTask: "[data-testid='Other']",
        inputOriginLinkCreateTaskOrDeliverable: "[data-testid='origin-link-input']",
        btnSelfFundingCreateTask: "[data-testid='self-fund-btn']",
        btnSeekFundingCreateTask: "[data-testid='seek-funding-btn']",
        textTotalBalance: "[data-testid='total-balance']",
        switchSetFundersReward: "[data-testid='form-check-reward-funders']",
        inputFundersReward:"[data-testid='funders-reward-input']",
        inputSetReward: "[data-testid='reward-input']",
        inputServiceFees: "[data-testid='service-fee-input']",
        inputTotalAmmount: "[data-testid='total-amount-input']",
        btnApproveCreateTask: "[data-testid='create-task-approve-button']",
        btnCreateTask: "[data-testid='create-task-button']",
        btnTaskOptions: "[data-testid='task-options']",
        btnTaskCancel: "[data-testid='cancel-btn']",
        btnTaskUpdateAmount: "[data-testid='update-amount-btn']",
        btnTaskUpdateAmountApprove: "[data-testid='update-amount-modal-approve-btn']",
        btnTaskUpdateAmountConfirm: "[data-testid='update-amount-modal-confirm-btn']",
        btnTaskEdit: "[data-testid='edit-bounty-btn']",
        reactInputDropdownEditTags: '.react-select__input-container',
        textTaskStatus: "[data-testid='task-status']",
        textTaskValue: "span.text-white.caption-large.font-weight-normal",
        textareaTaskComments: "[data-testid='comments-textarea']",
        btnTaskComment: "[data-testid='comments-btn']",
        btnTaskStartWorking: "[data-testid='start-working-btn']",
        btnTaskCreateDeliverable: "[data-testid='deliverable-btn']",
        imgPreviewLinkDeliverable: "[data-testid='image-preview']",
        btnMarkAsReady: '[data-testid="Mark as ready"]',
        btnCancelCreateDeliverable: '[data-testid="cancel"]',
        btnReviewCreateDeliverable: '[data-testid="review"]',
        btnConfirmCreateDeliverable: '[data-testid="create-deliverable-btn"]',
        btnArrowBackFromDeliverable: '[data-testid="deliverable-back"]',
        btnCreateProposal: '[data-testid="proposal-btn"]',
        btnModalProposalCancel: '[data-testid="modal-proposal-cancel-btn"]',
        btnModalCreateProposal: '[data-testid="modal-proposal-create-btn"]',
        btnViewProposal: '[data-testid="actions.view-proposal"]',
        btnAcceptProposal: '[data-testid="proposal-accept-btn"]',
        btnRefuseProposal: '[data-testid="refuse-btn"]',
        btnCancelProposalModal: '[data-testid="modal-proposal-cancel-btn"]',
        btnConfirmDistribution: '[data-testid="modal-proposal-merge-btn"]',
        btnDisputeProposal: '[data-testid="dispute-btn"]',
        btnCancelUpdateTask: '[data-testid="update-amount-modal-cancel-btn"]',
        btnConfirmUpdateTask: '[data-testid="update-amount-modal-confirm-btn"]',
        textStatusProposal: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div > div:nth-child(1) > div.row.mb-2.proposal-progress-bar.align-items-center > div:nth-child(1) > h4',
        dropdownProposal: '.react-select__placeholder',
        placeholderProposal: 'Select...',
        dropdownOptionProposal: '.react-select__option',
        componentProposalstatus: '#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div',
    }


    marketplacePageLocator = {
        dropdownNetwork: '#root-container > div > div > div > div > div > div > div > div:nth-child(1) > div.collapse.show > div.row.pt-2 > div > div > div > div > div.react-select__value-container.react-select__value-container--has-value.css-hlgwow > div',
        dropdownNetworkOptions: '#react-select-5-option-0 > div > span.text-overflow-ellipsis',
        btnSelectNetworkNextStep: '[data-testid="Select Network-next-step-btn"]',
        btnLockTBepro: "[data-testid='lock-btn']",
        btnLockTBeproNextStep: "[data-testid='Lock TBEPRO-next-step-btn']",
        logoIcon: "[data-testid='logoIcon']",
        fullLogo: "[data-testid='fullLogo']",
        inputMarketplaceName: "[data-testid='diplay-name-input']",
        btnMarketplaceInformationNextStep: "[data-testid='Marketplace information-next-step-btn']",
        inputDisputeTime: "[data-testid='Dispute time']",
        inputDraftTime: "[data-testid='Draft time']",
        inputCuratorAmount: "[data-testid='Curator Amount']",
        btnMarketplaceSettingsNextStep: "[data-testid='Marketplace Settings-next-step-btn']",
        btnCreateMarketplace: "[data-testid='Governance Token-next-step-btn']",
        btnCreateOne: "[data-testid='create-one-btn']",
        dropdownTransactionalTokens: '#root-container > div > div > div > div > div > div > div > div:nth-child(5) > div.collapse.show > div.row.pt-2 > div:nth-child(3) > div > div > div.react-select__indicators.css-1wy0on6',
        beproTransactionalTokens: "[data-testid='select-item-TBEPRO']",
        dropdownRewardTokens: '#root-container > div > div > div > div > div > div > div > div:nth-child(5) > div.collapse.show > div.row.pt-2 > div:nth-child(4) > div > div > div.react-select__indicators.css-1wy0on6',
        beproRewardTokens: "[data-testid='select-item-TBEPRO']",
    }

    managementPageLocator = {
        //profile page
        btnChangeProfileHandle:"[data-testid='user-edit-icon-btn']",
        checkboxNotification: "[data-testid='switch']",
        inputEmail: "[data-testid='email-input']",
        btnSaveEmail: "[data-testid='notification-save-btn']",
        inputSearchBarWalletTokens: "[data-testid='wallet-search-input']",
        tabLock: "[data-testid='Lock']",
        tabUnlock: "[data-testid='Unlock']",
        inputSelectMarketplace: "[data-testid='marketplace-filter'] input",
        inputSelectNetwork:"[data-testid='chain-filter'] input",
        inputBeproAmountToLock: "[data-testid='TBEPRO Amount']",
        btnGetVotes: "[data-testid='get-votes-btn']",
        inputBeproVotesAmountToUnlock: "[data-testid='TBEPRO Votes Amount']",
        btnGetVotesUnlock: "[data-testid='get-votes-btn']",
        modalConfirmGetVotes: "[data-testid='modal-oracle-confirm-btn']",
        inputDelegateVotesAmount: "[data-testid='votes-amount-input']",
        inputDelegateVotesAddress: "[data-testid='delegate-address-input']",
        btnDelegateVotes: "[data-testid='Delegate']",
        btnTakeBackVotes: "[data-testid='take-back-btn']",
        tabLogoAndColors: "[data-testid='Logo & Colors']",
        tabGovernance: "[data-testid='Governance']",
        tabRegistry: "[data-testid='Registry']",
        tabManagement: "[data-testid='Management']",
        tabPermissions: "[data-testid='Permissions']",
        logoIcon: "[data-testid='logoIcon']",
        fullLogo: "[data-testid='fullLogo']",
        btnSaveChanges: "[data-testid='save-changes-btn']",
        inputPrimaryColor:"[data-testid='primary']",
        inputDisputeTime: "[data-testid='Dispute time']",
        inputPercentageForDispute: "[data-testid='Percentage for dispute']",
        inputDraftTime: "[data-testid='Draft time']",
        inputCuratorAmount: "[data-testid='Curator Amount']",
        inputCancelableTime: "[data-testid='Cancelable Time']",
        inputOracleExchangeRate: "[data-testid='oracle-exchange-rate']",
        inputMergerFee: "[data-testid='Merger Fee']",
        inputProposalCreatorFee: "[data-testid='Proposal Creator Fee']",
        btnSaveChangesGovernor: "[data-testid='submit-btn']",
        btnCloseMarketplace: "[data-testid='close-network-btn']",
        inputCancelFee: "[data-testid='cancel-fee-input']",
        inputCloseFee: "[data-testid='close-fee-input']",
        inputMarketplaceCreationFee: "[data-testid='creation-fee-input']",
        inputMarketplaceCreationAmount: "[data-testid='creation-fee-amount-input']",
        btnHideTask: "[data-testid='hide-btn']",
        btnTaskLink: "[data-testid='arrow-up-right-gray-btn']",
        inputSearchTask: "[data-testid='search-input']",
        inputBannedDomains: "[data-testid='banned-word-input']",
        btnAddBannedDomains: "[data-testid='permission-add-btn']",
        inputTaskCreationAllowList: "[data-testid='open-task-input']",
        btnAddTaskCreationAllowList: "[data-testid='open-task-btn']",
        inputCloseTaskAllowList: "[data-testid='close-task-input']",
        btnAddCloseTaskAllowList: "[data-testid='close-task-btn']",
        toastySuccess: '#__next > div > div.toast-container > div > div.toast-header.border-bottom-0.bg-transparent.px-3 > strong:contains("Success")',
    
    }

    elementText = {
        btnBepro: 'bepro',
        btnStartWorking: 'Start Working',
        btnCreateDeliverable: 'Create Deliverable',
        btnViewProposal: 'View Proposal',
        btnAcceptProposal: 'Accept',
        textAccepted: 'Accepted',
        btnMax: 'Max',
        btnLock: 'Lock TBEPRO',
        btnNextStep: 'Next Step',
        btnUploadLogoIcon: 'logo icon',
        btnUploadFullLogo: 'upload full logo',
        placeholderMarketplaceName: 'Marketplace name',
        placeholderMarketplaceDescription: 'Type a description...',
        btnVotingPower: 'Voting Power',
        btnCloseMarketplace: 'Close marketplace',
        btnSaveChanges: 'Save Changes',
        textConfirmationMarketplaceClosed: "You don't have a custom marketplace created",
        btnAdd: 'Add',
        toastySuccess: 'Success',
        btnConnectMetamask: 'Metamask',
    }

    curatorsPageLocator = {
        inputSearchBar: '[data-testid="search-input"]',
        btnCuratorsList: '[data-testid="Curators List"]',
        btnReadyToPropose: '[data-testid="Ready to Propose"]',
        btnReadyToDispute: '[data-testid="Ready to Dispute"]',
        btnReacyToClose: '[data-testid="Ready to Close"]',
    }
    
    leaderboardPageLocator = {
        inputSearchbar: '[data-testid="search-input"]',
    }

    explorePageLocator = {
        btnExplore: '[data-testid="explore"]',
        btnTechnology: '[data-testid="category-button-code"]',
        btnCreative: '[data-testid="category-button-design"]',
        btnMarketing: '[data-testid="category-button-marketing"]',
        btnWriting: '[data-testid="category-button-writing"]',
    }

}
