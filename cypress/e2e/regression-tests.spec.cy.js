describe("Do regression tests in the app spec", () => {
    before(() => {
        cy.visit('').then(() => {
            cy.get(locator.btnAcceptCookies).click();
        })
        cy.connectWalletFirstTime();
    });
    after(() => {
        governancePage.setDisputeTime();
        registryPage.setCancelFee();

    });

    it("should create a task successfully", () => {

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
