export default class Page {
    getTitle() {
        return cy.title();
    }

    connectWallet() {
        cy.get("button").contains("Connect Wallet").click();
        cy.acceptMetamaskAccess();
        cy.wait(250000);
        cy.confirmMetamaskDataSignatureRequest();
    }
}
