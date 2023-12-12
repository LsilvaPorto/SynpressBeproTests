import Page from "../page";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Page {
    locator = {
        statusTaskComponent: '#root-container > div.mt-2.border-bottom.border-gray-850.pb > div > div > div > div > div > div.row.align-items-center.flex-wrap.border-top.border-gray-850.mt-3.pt-3 > div:nth-child(1) > div',
        statusDeliverableComponent: '#root-container > div.mt-3.pb-2.border-bottom.border-gray-850 > div > div > div > div > div:nth-child(2) > div.row.d-flex.flex-wrap.justify-content-between > div.col.d-flex.flex-wrap.align-items-center.mt-3 > div.my-2 > div',
        btn: 'button',
        btnStartWorking: '#root-container > div.container-xl > div > div > div.mt-4 > div > div > div > div > div > button',
        inputDeliverableLink: ':nth-child(1) > .col-md-12 > .form-group > .form-control',
        inputDeliverableTitle: ':nth-child(3) > .col-md-12 > .form-group > .form-control',
        inputDeliverableDescription: '.p-1 > .form-control',
        btnToFinishDeliverableCreation: '.d-none.d-flex > .ps-3 > .btn',
        btnMarkAsReady: '#make-ready-for-review-modal > div > div.row.mx-0.modal-footer > div > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none:contains("Mark as ready")',
        imgPreviewLinkDeliverable: 'img[src="https://afrodite.bepro.network/images/meta-thumbnail.jpeg"].border-radius-8',

    }
    link = 'https://afrodite.bepro.network';
    waitTaskChangeStatusToOpen() {
        cy.wait(30000);
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.locator.statusTaskComponent)
                .invoke('text')
                .then((text) => {
                    cy.reload().then(() => {
                        console.log(text);
                        return text === 'open';
                    });

                });
        }, { timeout: 120000, interval: 5000 }).then(() => {
            console.log('Task status changed to open');
            cy.wait(1000);
        })
    }

    createDeliverable() {
        this.waitTaskChangeStatusToOpen();
        // Encontre o botão pelo seu texto
        cy.get(this.locator.btn).invoke('text').then(($buttonText) => {
            cy.log($buttonText);
            if ($buttonText.includes('Start Working')) {
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
        cy.get(this.locator.btnToFinishDeliverableCreation).wait(1000).click();
        cy.confirmMetamaskTransaction({ timeout: 60000 });
        cy.get(this.locator.btnMarkAsReady).wait(1000).click();
        cy.confirmMetamaskTransaction({ timeout: 60000}).then(() => {
            cy.get('#root-container > div.mt-3.pb-2.border-bottom.border-gray-850 > div > div > div > div > div:nth-child(1) > div > div.me-2.cursor-pointer').click({ force: true });
        });
    }

    createProposal() {
        cy.get(this.locator.btn).contains('Create Proposal').click({ force: true });
        // cy.get('div.react-select__placeholder[placeholder="Select..."]').click({ force: true });react-select__placeholder
        cy.contains('.react-select__placeholder', 'Select...').click({ force: true });
        cy.get('.react-select__option:contains("code")').first().click({ force: true });
        cy.get('#new-proposal-modal > div > div.row.mx-0.modal-footer > div > button.btn.btn-primary.text-white.d-flex.align-items-center.justify-content-center.text-uppercase.shadow-none > span').click({ force: true });
        cy.confirmMetamaskTransaction();
        cy.get(this.locator.btn).contains('View Proposal').click({ force: true }).wait(1000);
        
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get('#root-container > div.container-xl > div > div > div.mt-3.row.justify-content-between > div:nth-child(2) > div')
            .invoke('text')
            .then((text) => {
                cy.reload().then(() => {
                    console.log(text);
                    return text.includes('Accept');
                });
                
            });
        }, { timeout: 120000, interval: 5000 }).then(() => {
            console.log('Task status changed to open');
            cy.wait(1000);
        })
        cy.get(this.locator.btn).contains('Accept').click({ force: true });
    }
}