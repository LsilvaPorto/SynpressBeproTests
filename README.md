# Bepro Tests using Synpres 
# .env
PRIVATE_KEY='privateKey'

NETWORK_NAME='Mumbai'

CHAIN_ID=80001

RPC_URL='https://polygon-mumbai-bor.publicnode.com'	

SYMBOL="MATIC"

IS_TESTNET=true

CYPRESS_REMOTE_DEBUGGING_PORT=9222

PRIVATE_KEY_CREATE_NETWORK='privateKey'

# Lib config
## Only in Appollodorus (I don't know why, but in afrodite we don't need this step)
- go to `node_modules/@synthetixio/synpress/commands/metamask.js`
- comment line 814 (`{ waitForEvent: 'close' },`)

## How to run

- Change your PC language to english (because of metamask validations) 
- `npm i`
- `npm test`
