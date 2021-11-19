const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKey = 'fake key'
const providerOrUrl = 'infura url'

module.exports = {
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider({ privateKeys: [privateKey], providerOrUrl }),
      network_id: 3,
      gas: 5500000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
}
