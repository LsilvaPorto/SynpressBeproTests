import Page from "../page";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Page {
    link = 'https://afrodite.bepro.network';
    value = null;

    createMarketplaceName() {
        const mp = faker.company.name();
        return mp.toString();
    }

    createTaskTitle() {
        const task = faker.lorem.words(5);
        return task.toString();
    }

    createTaskDescription() {
        const description = faker.lorem.paragraphs(2, '<br/>\n');
        return description.toString();
    }

    createTaskValue() {
        const value = faker.number.int({ max: 1000 })
        return value;
    }

    selectMarketplace() {
        // Clica no item com texto "bepro" dentro do dropdown
        cy.contains(this.commonPageLocator.beproMarketSelect, this.btnText.btnBepro).click().wait(500);
        cy.get(this.commonPageLocator.btnNext).click().wait(500);
    }

    fillTaskTitle() {
        const title = this.createTaskTitle();
        cy.get(this.commonPageLocator.inputTaskTitle).type(title, { force: true });
    }

    fillTaskDescription() {
        const description = this.createTaskDescription();
        cy.get(this.commonPageLocator.InputTaskDescription).type(description, { force: true });
    }

    insertTag() {
        cy.get(this.commonPageLocator.inputTags).click();
        cy.get(this.commonPageLocator.tagTesting).click();

    }

    fillTaskValue() {
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get('div.text-truncate span.text-gray')
                .contains('Total Balance:')
                .parent('div.text-truncate')
                .invoke('text')
                .then((text) => {
                    const match = text.match(/Total Balance: ([\d,]+\.\d+)/);

                    // Verifique se houve uma correspondência e se o valor é maior que zero
                    if (match) {
                        const balance = parseFloat(match[1].replace(',', '.')); // Substitui vírgula por ponto
                        return balance > 0;
                    }

                    // Se não houver correspondência, continue esperando
                    return false;
                });
        }, { timeout: 20000, interval: 500 })
            .then(() => {
                // Agora que a condição foi atendida, você pode realizar ações adicionais
                const value = this.createTaskValue();
                cy.get(this.commonPageLocator.inputTotalAmmount).type(value);
                this.value = value;
            });
    }

    createTask() {
        cy.get(this.commonPageLocator.btn).contains('Create').click();
        cy.get(this.commonPageLocator.spanCreateTask).click();
        cy.get(this.commonPageLocator.btn).contains('Continue').click();
        cy.get(this.commonPageLocator.inputMarketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.get(this.commonPageLocator.btn).contains(this.btnText.btnCode).click({ force: true });
        cy.get(this.commonPageLocator.btnNext).click().wait(1000);
        this.fillTaskValue();

        cy.get(this.commonPageLocator.btnNext).wait(2000).click().wait(1000);
        cy.get(this.commonPageLocator.btnApprove).wait(1000).click({ force: true });
        cy.confirmMetamaskPermissionToSpend(this.value);

        cy.get(this.commonPageLocator.btn).contains(this.btnText.createTask, { timeout: 120000 }).wait(1000).click({ force: true });
        // cy.confirmMetamaskTransaction();
        cy.confirmMetamaskPermissionToSpend(0);

    }

    waitTaskChangeStatusToOpen() {
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.taskPageLocator.componentTaskStatus)
                .invoke('text')
                .then((text) => {
                    if (text === 'open') {
                        return true;
                    } else {
                        cy.reload().then(() => {
                            cy.log(text);
                            return text === 'open';
                        });

                    }

                });
        }, { timeout: 120000, interval: 10000 }).then(() => {
            cy.log('Task status changed to open');
            cy.wait(2000);
        })
    }

    createDeliverable() {
        this.waitTaskChangeStatusToOpen();
        // Encontre o botão pelo seu texto
        cy.get(this.taskPageLocator.btn).invoke('text').then(($buttonText) => {
            cy.log($buttonText);
            if ($buttonText.includes('Start Working')) {
                // O botão "Start Working" está presente, clique nele
                cy.get(this.taskPageLocator.btn).contains('Start Working').wait(500).click({ force: true }).wait(2000);

                // Agora, clique no botão "Create Deliverable"
                cy.get(this.taskPageLocator.btn).contains('Create Deliverable').wait(1000).click({ force: true }).wait(500);
            } else {
                // O botão "Start Working" não está presente, clique diretamente no botão "Create Deliverable"
                cy.log('Start Working button not present, clicking Create Deliverable directly');
                cy.get(this.taskPageLocator.btn).contains('Create Deliverable').wait(500).click({ force: true });
            }
        });

        cy.get(this.taskPageLocator.inputDeliverableLink).type(this.link, { force: true });
        cy.get(this.taskPageLocator.imgPreviewLinkDeliverable, { timeout: 60000 }).should('be.visible');
        cy.get(this.taskPageLocator.inputDeliverableTitle).type(this.createTaskTitle(), { force: true });
        cy.get(this.taskPageLocator.inputDeliverableDescription).type(this.createTaskDescription(), { force: true });
        cy.get(this.taskPageLocator.btn, { timeout: 60 }).contains('Create Deliverable').wait(1000).click();
        cy.confirmMetamaskTransaction();
        cy.get(this.taskPageLocator.btn).contains("Mark as ready").wait(1000).click();
        cy.confirmMetamaskTransaction()
        cy.get(this.taskPageLocator.btnArrowBackFromDeliverable, { timeout: 60000 }).wait(1000).click({ force: true });
    }

    createProposal() {
        cy.get(this.taskPageLocator.btn).contains('Create Proposal').click({ force: true });
        cy.contains(this.taskPageLocator.dropdownProposal, 'Select...').click({ force: true });
        cy.get(this.taskPageLocator.dropdownOptionProposal).first().click({ force: true });
        cy.get(this.taskPageLocator.btnFinishProposalCreation).click({ force: true });
        cy.confirmMetamaskTransaction();

    }

    acceptProposal() {
        cy.get(this.taskPageLocator.btn, { timeout: 60000 }).contains('View Proposal').click({ force: true }).wait(1000);

        cy.waitUntil(() => {
            cy.wait(3000);
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.taskPageLocator.componentProposalstatus)
                .invoke('text')
                .then((text) => {
                    if (text.includes('Accept')) {
                        return true;
                    } else {
                        cy.reload().then(() => {
                            return text.includes('Accept');
                        });
                    }
                });
        }, { timeout: 120000, interval: 10000 }).then(() => {
            cy.log('Task status changed to open');
            cy.wait(1000);
        })
        cy.get(this.taskPageLocator.btn).contains('Accept').wait(3000).click({ force: true });
        cy.get(this.taskPageLocator.btn).contains('Confirm Distribution', { timeout: 120000 }).click({ force: true });
        cy.confirmMetamaskTransaction();
    }
}