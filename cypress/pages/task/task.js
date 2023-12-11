import Page from "../page";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Page {
    locator = {
        statusTaskComponent: '#root-container > div.mt-2.border-bottom.border-gray-850.pb > div > div > div > div > div > div.row.align-items-center.flex-wrap.border-top.border-gray-850.mt-3.pt-3 > div:nth-child(1) > div > div > span',
        btn: 'button',
        btnStartWorking: '#root-container > div.container-xl > div > div > div.mt-4 > div > div > div > div > div > button',
        btnCreateDeliverable: '#root-container > div.container-xl > div > div > div.mt-4 > div > div > div > div > div > div > button:contains("Create Deliverable")',
        inputDeliverableLink: ':nth-child(1) > .col-md-12 > .form-group > .form-control',
        inputDeliverableTitle: ':nth-child(3) > .col-md-12 > .form-group > .form-control',
        inputDeliverableDescription: '.p-1 > .form-control',
        btnCreateDeliverable: '.d-none.d-flex > .ps-3 > .btn',
        btnMarkAsReady: '#make-ready-for-review-modal > div > div.row.mx-0.modal-footer > div > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none:contains("Mark as ready")',
        imgPreviewLinkDeliverable: 'img[src="https://afrodite.bepro.network/images/meta-thumbnail.jpeg"].border-radius-8',

    }
    link = 'https://afrodite.bepro.network';
    waitTaskChangeStatusToOpen() {
        cy.wait(75000);
        cy.reload();
    }

    createDeliverable() {
        //this.waitTaskChangeStatusToOpen();
        // Encontre o botão pelo seu texto
        cy.get(this.locator.btnStartWorking).invoke('text').then(($buttonText) => {
            if ($buttonText === 'Start Working') {
                // O botão "Start Working" está presente, clique nele
                cy.get(this.locator.btnStartWorking).click({ force: true });

                // Agora, clique no botão "Create Deliverable"
                cy.get(this.locator.btn).contains('Create Deliverable').wait(1000).click({ force: true });
            } else {
                // O botão "Start Working" não está presente, clique diretamente no botão "Create Deliverable"
                cy.log('Start Working button not present, clicking Create Deliverable directly');
                cy.get(this.locator.btn).contains('Create Deliverable').wait(1000).click({ force: true });
            }
        });

        cy.get(this.locator.inputDeliverableLink).type(this.link, { force: true });
        cy.get(this.locator.imgPreviewLinkDeliverable);
        cy.get(this.locator.inputDeliverableTitle).type(this.createTaskTitle(), { force: true });
        cy.get(this.locator.inputDeliverableDescription).type(this.createTaskDescription(), { force: true });
        cy.get(this.locator.btnCreateDeliverable).wait(1000).click();
        cy.confirmMetamaskTransaction({ timeout: 60000 });
        cy.get(this.locator.btnMarkAsReady).wait(1000).click();
        cy.confirmMetamaskTransaction();
    }
}