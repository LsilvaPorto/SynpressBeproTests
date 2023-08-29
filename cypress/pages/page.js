export default class Page {
    getTitle() {
        return cy.title();
    }

    importPrivateKey() {
        cy.importMetamaskAccount(Cypress.env('PRIVATE_KEY'));
    }
    connectWallet() {
        cy.get("button").contains("Connect Wallet").wait(4000).click();
        cy.wait(6000);
        cy.acceptMetamaskAccess();
        cy.wait(25000);
        cy.confirmMetamaskDataSignatureRequest();
    }
    setupEnviroment() {
        cy.visit('/')
        this.importPrivateKey();
        cy.addMetamaskNetwork({
            // networkName: "Mumbai",
            // rpcUrl: "https://rpc-mumbai.maticvigil.com",
            // chainId: "80001",
            // symbol: "MATIC",
            // blockExplorer: "https://mumbai.polygonscan.com/",
            // isTestnet: true,
            networkName: "Afrodite",
            rpcUrl: "https://eth-afrodite.taikai.network:8080",
            chainId: "1501",
            symbol: "ETH",
            blockExplorer: "https://blockscout.moonriver.moonbeam.network",
            isTestnet: true,
        })
        this.connectWallet();
    }
}
