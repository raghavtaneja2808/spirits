// src/pages/Dashboard.jsx

import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

const Dashboard = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  // If the user is not connected, show a message and a connect button
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold text-white">Investor Dashboard</h1>
        <p className="text-gray-400 mt-2">Please connect your wallet to view your assets.</p>
        <button
          onClick={() => open()}
          className="mt-6 bg-brand-gold text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Connect Wallet
        </button>
      </div>
    );
  }

  // If the user IS connected, show the dashboard
  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-landing-serif font-bold text-white">Dashboard</h1>
          {/* This button shows the connected wallet address */}
          <button
            onClick={() => open()}
            className="bg-gray-800 border border-gray-700 text-white font-mono py-2 px-4 rounded-md text-sm"
          >
            {`${address.slice(0, 6)}...${address.slice(-4)}`}
          </button>
        </header>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* We will add stat cards here */}
          <div className="rounded-lg bg-[#061325] border border-gray-800 p-6">
            <h3 className="text-gray-400 text-sm font-bold uppercase">KYC Status</h3>
            <p className="text-2xl font-bold text-green-400 mt-2">Approved</p>
          </div>
          <div className="rounded-lg bg-[#061325] border border-gray-800 p-6">
            <h3 className="text-gray-400 text-sm font-bold uppercase">Tokens Owned</h3>
            <p className="text-2xl font-bold text-brand-gold mt-2">1,250.75 SPIR</p>
          </div>
          <div className="rounded-lg bg-[#061325] border border-gray-800 p-6">
            <h3 className="text-gray-400 text-sm font-bold uppercase">Current Value (CHF)</h3>
            <p className="text-2xl font-bold text-brand-gold mt-2">6,253.75</p>
          </div>
        </div>
        {/* We can add a transaction history table below this grid later */}
      </div>
    </div>
  );
};

export default Dashboard;