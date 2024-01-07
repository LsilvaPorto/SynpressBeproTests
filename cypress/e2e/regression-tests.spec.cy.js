import TaskPage from "../pages/task/task";
const taskPage = new TaskPage();
const locator = taskPage.commonPageLocator;
const taskLocator = taskPage.taskPageLocator;
describe("Do regression tests in the app spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
        cy.get(locator.profileIcon).should('be.visible');
    });

    it("should create a task successfully", () => {
        taskPage.createTask();
        cy.get(taskLocator.componentTaskStatus).should('be.visible');
        taskPage.createDeliverable();
        cy.contains(taskPage.elementText.btnMakeAReview).should('be.visible');
        taskPage.createProposal();
        taskPage.acceptProposal();
        cy.contains(taskPage.elementText.textAccepted).should('be.visible');
    });

    it("should change task's description successfully", () => {
        // taskPage.createTask();
        cy.get(':nth-child(1) > .p-3').click({ force: true });
        cy.contains('button', taskPage.elementText.btnEditTask).click({ force: true });
        cy.get('#root-container > div.container-xl > div > div > div.mb-1 > div > div.col-md-8 > div > div.bg-gray-900.p-3.rounded.border.border-gray-800 > div > textarea')
            .clear()
            .type('Description automaticaly changed for testing purposes');
        cy.contains('button', 'Save Changes').click({ force: true });
        cy.contains('Success').should('be.visible');
    });

    it("should Cancel task successfully", () => {
        cy.get(':nth-child(1) > .p-3').click({ force: true });
        cy.contains('Options').click({ force: true });
        cy.contains('button', 'Cancel task').click();
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.contains('Canceled').should('be.visible');
    });

    it("should change task's tag and value successfully", () => {

    });

    it("should create a Funding Request task with Reward successfully", () => {

    });

    it("should create a Funding Request task without Reward task successfully", () => {

    });

    it("should change Governor options successfully", () => {

    });

    it("should change registry options successfully", () => {

    });

    it("should create new network successfully", () => {

    });

});