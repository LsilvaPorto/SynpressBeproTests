import Page from "../page";

export default class ExplorePage extends Page {
    createTask() {
        cy.get(this.locator.btnAcceptCookies).click();
        cy.get(this.locator.btnCreate).contains("Create").click();
        cy.get(this.locator.btnCreateTask).contains("Task").click();
        cy.get(this.locator.inputMearketPlaceSelect).click();
        // Clica no item com texto "bepro" dentro do dropdown
        cy.contains(this.locator.beproMarketSelect, 'bepro').click();
        cy.get(this.locator.btnNext).click();

        
        cy.get(this.locator.inputTaskTitle).type("Teste de criação de tarefa", { force: true });
        cy.fixture('taskDescription.txt').then((taskDescription) => {
            cy.get(this.locator.InputTaskDetails).type(taskDescription, { force: true });
        })
        cy.get(this.locator.inputTags).click();
        cy.get(this.locator.tagTesting).click();

        cy.get(this.locator.btn).contains('Code').click({ force: true });
        cy.get(this.locator.btnNext).click();
        cy.wait(1000);
        cy.get(this.locator.inputTotalAmmount).type(100);
        cy.get(this.locator.btnNext).click();
        cy.get(this.locator.btn).contains('Approve').click({ force: true });
        cy.confirmMetamaskPermissionToSpend();
        cy.get(this.locator.btn).contains('Create Task').click({ force: true });
        cy.confirmMetamaskTransaction();

    }

}