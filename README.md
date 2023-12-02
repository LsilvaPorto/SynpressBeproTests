# cypress/shared-state example

# .env
PRIVATE_KEY='privateKey'

NETWORK_NAME='Mumbai'

CHAIN_ID=80001

RPC_URL='https://polygon-mumbai-bor.publicnode.com'	

SYMBOL="MATIC"

IS_TESTNET=true

CYPRESS_REMOTE_DEBUGGING_PORT=9222

# Lib config
- go to `node_modules/@synthetixio/synpress/commands/metamask.js`
- comment line 814 (`{ waitForEvent: 'close' },`)

## How to run

- `npm i`
- `npm test`
