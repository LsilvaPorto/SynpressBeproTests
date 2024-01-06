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

    it.only("should create a task successfully", () => {
        taskPage.createTask();
        cy.get(taskLocator.componentTaskStatus).should('be.visible');
        taskPage.createDeliverable();
        cy.contains(taskPage.elementText.btnMakeAReview).should('be.visible');
        taskPage.createProposal();
        taskPage.acceptProposal();
        cy.contains(taskPage.elementText.textAccepted).should('be.visible');
    });
    
    it("should change task's description successfully", () => {
        
    });
    
    it("should change task's tag and value successfully", () => {
        
    });
    
    it("should create a Funding Request task with Reward successfully", () => {
        
    });
    
    it("should create a Funding Request task without Reward task successfully", () => {
        
    });
    
    it("should close task successfully", () => {
        
    });
    
    it("should change Governor options successfully", () => {
        
    });
    
    it("should change registry options successfully", () => {
        
    });
    
    it("should create new network successfully", () => {
        
    });
    
});