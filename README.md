# 🗳️ VoteChain – Privacy-Preserving Decentralized Voting DApp

VoteChain is a decentralized voting platform designed to ensure **secure, transparent, and fraud-resistant elections**. Built on blockchain technology and advanced AI, it combines smart contracts, privacy-preserving zero-knowledge proofs, and anomaly detection to deliver a scalable and trustworthy voting experience.

---

## 🌟 Features

- **Decentralized & Transparent Voting:**  
  Powered by Monad smart contracts (Solidity) to guarantee tamper-proof voting.

- **Privacy-Preserving Voter Verification:**  
  Utilizes **Semaphore Zero-Knowledge Proofs (ZKP)** to verify voters without revealing their identity.

- **Cost-Efficient Storage:**  
  Integrates **IPFS** to store candidate manifestos and election data off-chain, reducing on-chain gas fees.

- **Hybrid Anomaly Detection:**  
  Detects fraudulent or irregular voting patterns using **Random Forest, XGBoost, LightGBM, and Isolation Forest** models.

- **User-Friendly Interface:**  
  Built with **React.js, Tailwind, and shadCN UI** for an intuitive and responsive voting experience.

- **Scalable Backend:**  
  Flask API handles anomaly detection and serves as the bridge between the blockchain and machine learning models.

---

## 🚀 Live Demo

Check out the deployed application here: [VoteChain DApp](https://monadcollegevotechain.netlify.app)

---

## 🛠️ Tech Stack

- **Blockchain & Smart Contracts:** Solidity, Hardhat, Ethers.js  
- **Frontend:** React.js, Tailwind CSS, shadCN UI  
- **Backend & ML:** Python, Flask, scikit-learn, XGBoost, LightGBM  
- **Database & Storage:** MongoDB, IPFS  
- **Privacy:** Semaphore (Zero-Knowledge Proofs for voter verification)  

---

## 📝 Project Highlights

1. **Secure Voting:** Immutable vote storage on the blockchain ensures transparency.  
2. **Fraud Detection:** AI-driven hybrid anomaly detection identifies suspicious voting behavior in real-time.  
3. **Privacy First:** Zero-Knowledge Proofs guarantee voter anonymity.  
4. **Efficient & Scalable:** IPFS integration reduces gas costs and backend handles large-scale elections.  

---




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

