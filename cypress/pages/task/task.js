import Page from "../page";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Page {
    locator = {
        statusTaskComponent: '#root-container > div.mt-2.border-bottom.border-gray-850.pb > div > div > div > div > div > div.row.align-items-center.flex-wrap.border-top.border-gray-850.mt-3.pt-3 > div:nth-child(1) > div > div > span',
        btnStartWorking: '#root-container > div.container-xl > div > div > div.mt-4 > div > div > div > div > div > div > button',
        btnCreateDeliverable: '#root-container > div.container-xl > div > div > div.mt-4 > div > div > div > div > div > div > button:contains("Create Deliverable")',
        inputDeliverableLink: ':nth-child(1) > .col-md-12 > .form-group > .form-control',
        inputDeliverableTitle: ':nth-child(3) > .col-md-12 > .form-group > .form-control',
        inputDeliverableDescription: '.p-1 > .form-control',
        btnCreateDeliverable: '.d-none.d-flex > .ps-3 > .btn',
    }
    waitTaskChangeStatusToOpen() {
        cy.wait(75000);
        cy.reload();
    }

    createDeliverableLink(){
        const link = faker.internet.url();
    }

    createDeliverable() {
        this.waitTaskChangeStatusToOpen();
        cy.get(this.locator.btnStartWorking).wait(5000).click({ force: true }).click({ force: true });
        cy.log('Start Working button pressed');
        cy.get(this.locator.btnCreateDeliverable).wait(1000).click({ force: true });

        cy.get(this.locator.inputRepoLink).type(this.createDeliverableLink(), { force: true });
        cy.get(this.locator.inputDeliverableTitle).type(this.createTaskTitle(), { force: true });
        cy.get(this.locator.inputDeliverableDescription).type(this.createTaskDescription(), { force: true });
        cy.get(this.locator.btnCreateDeliverable).wait(1000).click({ force: true });
        cy.wait(100000);
    }
}