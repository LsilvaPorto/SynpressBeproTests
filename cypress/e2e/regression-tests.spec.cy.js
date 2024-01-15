import MarketplacePage from "../pages/marketplace/marketplace-page";
import TaskPage from "../pages/task/task-page";
import Locators from "../pages/locators";
import ProfilePage from "../pages/profile/profile-page";
const locators = new Locators();
const marketplacePage = new MarketplacePage();
const taskPage = new TaskPage();
const taskLocator = taskPage.taskPageLocator;
const profilePage = new ProfilePage();

describe("Do regression tests in the app spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locators.commonPageLocator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
        cy.get(locators.commonPageLocator.profileIcon).should('be.visible');
    });

    afterEach(() => {
        cy.visit('');
    });

    it.skip("should create and finish a task successfully", () => {
        taskPage.createTask();
        cy.get(taskLocator.componentTaskStatus).should('be.visible');
        // cy.get(':nth-child(1) > .p-3').click({ force: true });
        taskPage.createDeliverable();
        cy.contains('Marked deliverable as ready.').should('be.visible');
        taskPage.createProposal();
        taskPage.acceptProposal();
        cy.contains(taskPage.elementText.textAccepted).should('be.visible');
    });

    it("should change task's description successfully", () => {
        taskPage.createTask();
        taskPage.changeTaskDescription();
    });

    it("should Cancel task successfully", () => {
        taskPage.createTask();
        // cy.get(':nth-child(1) > .p-3').click({ force: true });
        taskPage.cancelTask();
        cy.contains('canceled').should('be.visible');
    });

    it("should create a Funding Request task without Reward successfully", () => {
        taskPage.createFundingRequest();
        cy.get(taskLocator.componentTaskStatus).should('be.visible').invoke('text').should('be.eq', 'funding');
    });

    it("should create a Funding Request task with Reward task successfully", () => {
        taskPage.createFundingRequestWithReward();
        cy.get(taskLocator.componentTaskStatus).should('be.visible').invoke('text').should('be.eq', 'funding');
    });

    it.skip("should create new Marketplace successfully", () => {
        cy.switchAccountAndConnect(3);
        marketplacePage.createMarketplace();
        cy.contains(marketplacePage.elementText.btnCreateOne).should('be.visible');

    });

    it.skip("should close new Marketplace successfully", () => {
        marketplacePage.closeMarketplace();
        cy.contains(marketplacePage.elementText.textConfirmationMarketplaceClosed).should('be.visible');
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