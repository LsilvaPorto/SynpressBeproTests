import MarketplacePage from "../pages/marketplace/marketplace-page";
import TaskPage from "../pages/task/task-page";
import Locators from "../pages/locators";
import ProfilePage from "../pages/profile/profile-page";
const locators = new Locators();
const marketplacePage = new MarketplacePage();
const taskPage = new TaskPage();
const profilePage = new ProfilePage();

describe("Do regression tests in the app spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locators.commonPageLocator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
       
    });

    afterEach(() => {
        // cy.visit('');
    });

    it("should create and finish a task successfully", () => {
        taskPage.createTask();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.visible');
        taskPage.createDeliverable();
        cy.contains('Marked deliverable as ready.').should('be.visible');
        taskPage.createProposal();
        taskPage.acceptProposal();
        cy.contains(locators.elementText.textAccepted).should('be.visible');
    });

    it("should change task's description successfully", () => {
        taskPage.createTask();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.visible');
        taskPage.changeTaskDescription();
    });

    it("should Cancel task successfully", () => {
        taskPage.createTask();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.visible');
        taskPage.cancelTask();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.eq', 'canceled');
    });

    it("should create a Funding Request task without Reward successfully", () => {
        taskPage.createFundingRequest();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.visible').invoke('text').should('be.eq', 'funding');
    });

    it("should create a Funding Request task with Reward task successfully", () => {
        taskPage.createFundingRequestWithReward();
        cy.get(locators.taskPageLocator.textTaskStatus).should('be.visible').invoke('text').should('be.eq', 'funding');
    });

    it.only("should create new Marketplace successfully", () => {
        cy.switchAccountAndConnect(3);
        marketplacePage.createMarketplace();
        cy.get(locators.marketplacePageLocator.btnCreateOne).should('be.visible');

    });

    it.only("should close new Marketplace successfully", () => {
        // cy.switchAccountAndConnect(3);
        marketplacePage.closeMarketplace();
        cy.contains(locators.elementText.textConfirmationMarketplaceClosed).should('be.visible');
    });

    // it("should lock token value successfully", () => {
    //     profilePage.lockVotes();
    // });

    // it("should unlock token value successfully", () => {

    // });

    // it("should change task's tag and value successfully", () => {

    // });

    // it("should change Governor options successfully", () => {

    // });

    // it("should change registry options successfully", () => {

    // });


});