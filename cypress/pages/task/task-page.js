import Locators from "../locators";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Locators {
    link = 'https://afrodite.bepro.network';
    value = null;

    createTaskTitle() {
        const task = faker.lorem.words(5);
        return task.toString();
    }
    //this method will be replaced for cy.createDescription()
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
        cy.contains(this.commonPageLocator.beproMarketSelect, this.elementText.btnBepro).click();
        cy.get(this.commonPageLocator.btnNext).click();
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
        cy.openMenuToCreate(this.elementText.textCreateTask);
        cy.get(this.commonPageLocator.inputMarketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.contains(this.elementText.btnCode).click({ force: true });
        cy.get(this.commonPageLocator.btnNext).click();
        this.fillTaskValue();
        cy.wait(3000);

        cy.get(this.commonPageLocator.btnNext).click();
        // cy.get(this.commonPageLocator.btnApprove).should('be.enabled').should('not.have.class', 'spinner-border').scrollIntoView().click({ force: true }).wait(1000);
        cy.waitMetamaskPopUp();
        cy.confirmMetamaskPermissionToSpend();
        cy.contains(this.elementText.createTask).should('be.enabled').wait(1000).click({ force: true }).wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();
    }

    createFundingRequest() {
        cy.openMenuToCreate(this.elementText.textCreateTask);
        cy.get(this.commonPageLocator.inputMarketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.contains(this.elementText.btnCode).click({ force: true });
        cy.get(this.commonPageLocator.btnNext).click();
        cy.contains(this.commonPageLocator.btn, 'Seek Funding').click({ force: true })
        const value = this.createTaskValue();
        cy.get(this.commonPageLocator.inputTotalAmmount).type(value);
        this.value = value;
        cy.wait(3000);

        cy.get(this.commonPageLocator.btnNext).click();
        cy.contains(this.elementText.createTask).scrollIntoView().should('be.enabled').click({ force: true }).wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();

    }

    createFundingRequestWithReward() {
        cy.openMenuToCreate(this.elementText.textCreateTask);
        cy.get(this.commonPageLocator.inputMarketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.contains(this.elementText.btnCode).click({ force: true });
        cy.get(this.commonPageLocator.btnNext).click();
        cy.contains(this.commonPageLocator.btn, 'Seek Funding').click({ force: true })
        const value = this.createTaskValue();
        cy.get(this.commonPageLocator.inputTotalAmmount).type(value);
        this.value = value;
        cy.wait(3000);
        cy.get('#custom-switch').click({ force: true });
        //Set Funded Reward input
        cy.get('#root-container > div.d-none.d-md-flex.flex-column > div:nth-child(1) > div > div > div.d-none.d-md-flex.mx-2.flex-column.bg-gray-900.p-4.border-radius-4.border.border-gray-850 > div > div:nth-child(7) > div > div.col-md-4.col-12 > div > div.input-group.border-radius-4 > input').wait(3000).type(this.value);

        cy.get(this.commonPageLocator.btnNext).click();

        cy.get(this.commonPageLocator.btn).invoke('text').then(($buttonText) => {
            cy.log($buttonText);
            if (!$buttonText.includes(this.elementText.createTask)) {
                cy.get(this.commonPageLocator.btnApprove).click({ force: true }).wait(2000);
                cy.confirmMetamaskPermissionToSpend();
            }
            cy.contains(this.elementText.createTask).should('be.enabled').click({ force: true }).wait(2000);
            cy.confirmMetamaskTransactionAndWaitForMining();
        });

    }

    changeTaskDescription() {
        cy.contains('button', this.elementText.btnEditTask).click({ force: true });
        cy.get('#root-container > div.container-xl > div > div > div.mb-1 > div > div.col-md-8 > div > div.bg-gray-900.p-3.rounded.border.border-gray-800 > div > textarea')
            .clear()
            .type('Description automaticaly changed for testing purposes');
        cy.contains('button', 'Save Changes').click({ force: true });
        cy.contains('Success').should('be.visible');
    }
    cancelTask() {
        cy.contains('Options').click({ force: true });
        cy.contains('button', 'Cancel task').click().wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();
    }

    waitTaskChangeStatusToOpen() {
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.taskPageLocator.componentTaskStatus)
                .invoke('text')
                .then((text) => {
                    if (text === 'open' || text === 'ready') {
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
        })
    }

    createDeliverable() {
        this.waitTaskChangeStatusToOpen();
        // Encontre o botão pelo seu texto
        cy.get(this.commonPageLocator.btn).invoke('text').then(($buttonText) => {
            cy.log($buttonText);
            if ($buttonText.includes(this.elementText.btnStartWorking)) {
                // O botão "Start Working" está presente, clique nele
                cy.contains(this.elementText.btnStartWorking).should('be.enabled').click({ force: true });

                // Agora, clique no botão "Create Deliverable"
                cy.contains(this.elementText.btnCreateDeliverable).should('be.enabled').wait(5000).click({ force: true });
            } else {
                // O botão "Start Working" não está presente, clique diretamente no botão "Create Deliverable"
                cy.log('Start Working button not present, clicking Create Deliverable directly');
                cy.contains(this.elementText.btnCreateDeliverable).should('be.enabled').click({ force: true });
            }
        });

        cy.get(this.taskPageLocator.inputDeliverableLink).type(this.link, { force: true });
        cy.get(this.taskPageLocator.imgPreviewLinkDeliverable).should('be.visible');
        cy.get(this.taskPageLocator.inputDeliverableTitle).type(this.createTaskTitle(), { force: true });
        cy.get(this.taskPageLocator.inputDeliverableDescription).type(this.createTaskDescription(), { force: true });
        cy.contains(this.commonPageLocator.btn, this.elementText.btnCreateDeliverable).scrollIntoView().should('be.enabled').click().wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.get(this.elementText.btnMarkAsReady).contains('Mark as ready').wait(1000).click();
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.get(this.taskPageLocator.btnArrowBackFromDeliverable).click({ force: true });
    }

    createProposal() {
        cy.contains(this.elementText.btnCreateProposal).click({ force: true });
        cy.contains(this.taskPageLocator.dropdownProposal, this.taskPageLocator.placeholderProposal).click({ force: true });
        cy.get(this.taskPageLocator.dropdownOptionProposal).first().click({ force: true });
        cy.get(this.taskPageLocator.btnFinishProposalCreation).click({ force: true }).wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();

    }

    acceptProposal() {
        cy.contains(this.elementText.btnViewProposal).click({ force: true });

        cy.waitUntil(() => {
            cy.wait(3000);
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.taskPageLocator.componentProposalstatus)
                .invoke('text')
                .then((text) => {
                    if (text.includes(this.elementText.btnAcceptProposal)) {
                        return true;
                    } else {
                        cy.reload().then(() => {
                            return text.includes(this.elementText.btnAcceptProposal);
                        });
                    }
                });
        }, { timeout: 120000, interval: 10000 }).then(() => {
            cy.log('Task status changed to open');
            cy.contains(this.elementText.btnAcceptProposal).should('be.enabled').click({ force: true });
        })
        cy.contains(this.elementText.btnConfirmDistribution).should('be.enabled').click({ force: true }).wait(1000);
        cy.confirmMetamaskTransactionAndWaitForMining();
    }
}