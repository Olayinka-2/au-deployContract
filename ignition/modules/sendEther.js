const ethers = require('ethers');
require('dotenv').config();

async function sendEtherToFaucet() {
  const url = process.env.TEST_API_KEY;
  const privateKey = process.env.TEST_PRIVATE_KEY;

  const provider = new ethers.providers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(privateKey, provider);

  const faucetAddress = "0xE65A4f2d7c0c739d2fa888bE1e3bdf720310449d";

  const tx = await wallet.sendTransaction({
    to: faucetAddress,
    value: ethers.utils.parseEther("0.04")
  });

  await tx.wait();

  console.log("Sent successfully");
}

sendEtherToFaucet()
  .then(() => process.exit(0))
  .catch(error => {
    console.log("Error sending ether: ", error);
    process.exit(1);
  })