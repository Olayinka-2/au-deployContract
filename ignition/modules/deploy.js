const ethers = require("ethers");
require("dotenv").config();

async function Main() {

  const url = process.env.TEST_API_KEY;
  const artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.providers.JsonRpcProvider(url);
  const privateKey = process.env.TEST_PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey, provider);

  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  let faucet = await factory.deploy();

  console.log("Faucet Address: ", faucet.address);

  await faucet.deployed();
}

Main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });