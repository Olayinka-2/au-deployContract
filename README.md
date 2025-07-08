# au-deployContract
# 💧 Faucet Smart Contract (Hardhat + Ethers.js)

This project is a simple Ethereum **Faucet** smart contract built with **Solidity**, deployed and tested using **Hardhat**, **Ethers.js**, and **dotenv** for environment configuration.

The Faucet allows users to withdraw a limited amount of ETH per transaction and can receive Ether deposits. Ideal for testing smart contract interactions on testnets like Sepolia.

---

## 🛠️ Features

- ✅ Written in **Solidity 0.8.4**
- ✅ Built with **Hardhat**
- ✅ Script to deploy the Faucet contract
- ✅ Script to send ETH to the contract after deployment
- ✅ Uses **dotenv** to manage sensitive keys and RPC URLs
- ✅ Easily extendable to build DApps or frontends

---

## 🧾 Prerequisites

- Node.js (v18 or newer recommended)
- npm
- Alchemy RPC URL for Sepolia
- A funded Sepolia testnet wallet (Metamask private key)

---

## 📁 Project Structure

au-deployContract/
├── contracts/
│ └── Faucet.sol # Faucet smart contract
├── scripts/
│ ├── deploy.js # Deploys the contract
│ └── sendEther.js # Sends ETH to the deployed contract
├── .env # Stores your private keys and RPC URL
├── hardhat.config.js # Hardhat network & compiler config
├── package.json
└── README.md # You're here

yaml
Copy
Edit

---

## 📦 Install Dependencies

```bash
npm install
🔐 Setup Environment Variables
Create a .env file in the root of your project:
