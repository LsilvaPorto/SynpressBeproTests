import Locators from "../locators";
const { faker } = require('@faker-js/faker');
export default class TaskPage extends Locators {
    link = 'https://afrodite.bepro.network';

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
        cy.get(this.taskPageLocator.btnNextCreateTask).click();
    }

    fillTaskTitle() {
        const title = this.createTaskTitle();
        cy.get(this.taskPageLocator.inputTitleCreateTaskOrDeliverable).type(title, { force: true });
    }

    fillTaskDescription() {
        const description = this.createTaskDescription();
        cy.get(this.commonPageLocator.textareaDescriptionCreateTaskDeliverableOrMarketplace).type(description, { force: true });
    }

    insertTag() {
        cy.get(this.commonPageLocator.inputTags).click();
        cy.get(this.commonPageLocator.tagTesting).click();

    }

    fillTaskValue() {
        cy.waitForResources();
        const value = this.createTaskValue();
        cy.get(this.commonPageLocator.inputTotalAmmount).type(value);
        cy.waitForResources();
    }

    fillTaskFirstPage() {
        cy.openMenuToCreate(this.commonPageLocator.btnLaunchInOpenMarketplace);
        cy.get(this.commonPageLocator.inputMarketPlaceSelect).click();

        this.selectMarketplace();
        this.fillTaskTitle();
        this.fillTaskDescription();
        this.insertTag();

        cy.get(this.taskPageLocator.btnDesignCreateTask).click({ force: true });
        cy.get(this.taskPageLocator.btnNextCreateTask).click();
    }

    createTask() {
        this.fillTaskFirstPage();
        this.fillTaskValue();
        cy.get(this.taskPageLocator.btnNextCreateTask).click();
        cy.get(this.taskPageLocator.btnApproveCreateTask).should('be.enabled').should('not.have.class', 'spinner-border').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();
        cy.get(this.taskPageLocator.btnCreateTask).should('be.enabled').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
    }

    createFundingRequest() {
        this.fillTaskFirstPage();
        cy.get(this.taskPageLocator.btnSeekFundingCreateTask).click({ force: true })
        const value = this.createTaskValue();
        cy.get(this.taskPageLocator.inputTotalAmmount).type(value);
        cy.waitForResources();

        cy.get(this.taskPageLocator.btnNextCreateTask).click();
        cy.get(this.taskPageLocator.btnCreateTask).should('be.enabled').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();

    }

    createFundingRequestWithReward() {
        this.fillTaskFirstPage();
        cy.get(this.taskPageLocator.btnSeekFundingCreateTask).click({ force: true })
        cy.waitForResources();
        const value = this.createTaskValue();
        cy.get(this.taskPageLocator.inputTotalAmmount).type(value);
        cy.get(this.taskPageLocator.switchSetFundersReward).click();
        cy.waitForResources();
        cy.get(this.taskPageLocator.inputFundersReward).type(this.value);

        cy.get(this.taskPageLocator.btnNextCreateTask).click();

        cy.get(this.taskPageLocator.btnApproveCreateTask).click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskPermissionToSpend();

        cy.get(this.taskPageLocator.btnCreateTask).should('be.enabled').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();

    }

    changeTaskDescription() {
        cy.get(this.taskPageLocator.btnTaskEdit).click({ force: true });
        cy.get(this.commonPageLocator.textareaDescriptionCreateTaskDeliverableOrMarketplace)
            .clear()
            .type('Description automaticaly changed for testing purposes');
        cy.contains(this.commonPageLocator.btn, 'Save Changes').click({ force: true });
        cy.contains('Success').should('be.visible');
    }
    cancelTask() {
        cy.get(this.taskPageLocator.btnTaskOptions).should('be.visible').click({ force: true });
        cy.get(this.taskPageLocator.btnTaskCancel).should('be.visible').click();
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
    }

    waitTaskChangeStatusToOpen() {
        cy.waitUntil(() => {
            // Use cy.get dentro do loop para obter o elemento atualizado
            return cy.get(this.taskPageLocator.textTaskStatus)
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
                cy.contains(this.elementText.btnCreateDeliverable).should('be.enabled').click({ force: true });
            } else {
                // O botão "Start Working" não está presente, clique diretamente no botão "Create Deliverable"
                cy.log('Start Working button not present, clicking Create Deliverable directly');
                cy.contains(this.elementText.btnCreateDeliverable).should('be.enabled').click({ force: true });
            }
        });

        cy.get(this.taskPageLocator.inputOriginLinkCreateTaskOrDeliverable).type(this.link, { force: true });
        cy.get(this.taskPageLocator.imgPreviewLinkDeliverable).should('be.visible');
        cy.get(this.taskPageLocator.inputTitleCreateTaskOrDeliverable).type(this.createTaskTitle(), { force: true });
        cy.get(this.commonPageLocator.textareaDescriptionCreateTaskDeliverableOrMarketplace).type(this.createTaskDescription(), { force: true });
        cy.get(this.taskPageLocator.btnConfirmCreateDeliverable).should('be.enabled').click();
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.get(this.taskPageLocator.btnMarkAsReady).wait(1000).click();
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
        cy.get(this.taskPageLocator.btnArrowBackFromDeliverable).click({ force: true });
    }

    createProposal() {
        cy.get(this.taskPageLocator.btnCreateProposal).click({ force: true });
        cy.contains(this.taskPageLocator.dropdownProposal, this.taskPageLocator.placeholderProposal).click({ force: true });
        cy.get(this.taskPageLocator.dropdownOptionProposal).first().click({ force: true });
        cy.get(this.taskPageLocator.btnModalCreateProposal).click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();

    }

    acceptProposal() {
        cy.get(this.taskPageLocator.btnViewProposal).eq(0).click({ force: true });

        cy.waitUntil(() => {
            cy.waitForResources();
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
            cy.get(this.taskPageLocator.btnAcceptProposal).eq(0).should('be.enabled').click({ force: true });
        })
        cy.get(this.taskPageLocator.btnConfirmDistribution).should('be.enabled').should('be.visible').click({ force: true });
        cy.waitForResources();
        cy.confirmMetamaskTransactionAndWaitForMining();
    }
}