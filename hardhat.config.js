require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

const TEST_PRIVATE_KEY = vars.get("TEST_PRIVATE_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    omstead: {
      url: `https://evm.omstead.io/`,
      chainId: 7888,
      accounts: [TEST_PRIVATE_KEY]
    },
  }
};
