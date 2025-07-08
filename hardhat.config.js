require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.TEST_API_KEY,
      accounts: [process.env.TEST_PRIVATE_KEY]
    },
  }
};