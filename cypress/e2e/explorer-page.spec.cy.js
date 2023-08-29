import Page from "../pages/page";
const page = new Page();

describe("connect wallet spec", () => {
  before(() => {
    page.setupEnviroment();
  });

  it.only("should connect wallet with success", () => {
    //page.connectWallet();
  });
})