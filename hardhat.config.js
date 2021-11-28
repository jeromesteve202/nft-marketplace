require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.TEST_NET_ID}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.MAIN_NET_ID}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}