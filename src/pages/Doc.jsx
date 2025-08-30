import React from "react";
import { motion } from "framer-motion";
import { FaVoteYea, FaFaucet, FaEthereum, FaCubes } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

export default function Doc() {
  return (
    <main className="px-6 py-12 max-w-5xl mx-auto text-white">
      <motion.h1
        className="text-4xl font-bold text-purple-400 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📘 Voting DApp Documentation
      </motion.h1>

      {/* Section 1: What is Decentralized Voting */}
      <motion.section
        className="mb-10 bg-[#1a1a24] p-6 rounded-xl shadow-md border border-purple-800"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2 text-purple-300 text-xl font-semibold">
          <FaVoteYea />
          What is Decentralized Voting?
        </div>
        <p className="text-gray-300">
          Decentralized voting leverages blockchain technology to conduct secure, transparent, and tamper-proof elections. Each vote is stored on-chain, meaning no single entity can manipulate or alter the results. Users can trust the process, as all transactions are publicly verifiable and resistant to fraud.
        </p>
      </motion.section>

      {/* Section 2: Why Monad Testnet */}
      <motion.section
        className="mb-10 bg-[#1a1a24] p-6 rounded-xl shadow-md border border-purple-800"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2 text-purple-300 text-xl font-semibold">
          <FaCubes />
          Why Monad Testnet?
        </div>
        <p className="text-gray-300">
          The Monad testnet is a developer-friendly environment for deploying and testing smart contracts on the Monad blockchain. It offers high throughput, low latency, and near-zero gas fees, making it ideal for experimenting with decentralized applications without spending real money. Perfect for public demos and scalable testing.
        </p>
      </motion.section>

      {/* Section 3: What is Gas & Faucet Info */}
      <motion.section
        className="mb-10 bg-[#1a1a24] p-6 rounded-xl shadow-md border border-purple-800"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2 text-purple-300 text-xl font-semibold">
          <FaEthereum />
          What is Gas Fee?
        </div>
        <p className="text-gray-300 mb-4">
          Every blockchain transaction requires a small gas fee. On Monad testnet, gas fees are extremely low thanks to its optimized design. Transactions are fast and cost almost nothing, while still compensating validators who secure the network.
        </p>
        <div className="flex items-center gap-3 mb-2 text-purple-300 text-lg font-semibold">
          <FaFaucet />
          Get Test MON from Faucet
        </div>
        <p className="text-gray-300">
          To interact with this DApp on Monad testnet, you'll need some test MON tokens.
          You can get them from the official faucet:
        </p>
        <ul className="list-disc list-inside text-purple-400 mt-2">
          <li>
            <a
              href="https://faucet.monad.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Official Monad Testnet Faucet
            </a>
          </li>
        </ul>
      </motion.section>

      {/* Section 4: Transparent, Secure, Public */}
      <motion.section
        className="mb-10 bg-[#1a1a24] p-6 rounded-xl shadow-md border border-purple-800"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-2 text-purple-300 text-xl font-semibold">
          <SiBlockchaindotcom />
          Transparent by Design
        </div>
        <p className="text-gray-300">
          All votes and elections are stored publicly on the Monad blockchain. Anyone can verify the results using a block explorer like{" "}
          <a
            href="https://explorer.monad.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-400 hover:text-white"
          >
            Monad Explorer
          </a>
          .
        </p>
      </motion.section>
    </main>
  );
}
