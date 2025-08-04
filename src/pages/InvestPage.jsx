import React, { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

// Import all the new components
import InvestmentForm from '../components/invest/InvestmentForm';
import TransactionSummary from '../components/invest/TransactionSummary';
import KycNotice from '../components/invest/KycNotice';

// --- MOCK DATA (In a real app, this comes from an API or contract) ---
const mockAssetData = {
  name: 'Glen Fiddich 1992 Cask #88',
  tokenPrice: 250.00, // Price per token in CHF
};

// This would be a real hook fetching user status
const useUserStatus = () => ({ kycStatus: 'Approved', isLoading: false });

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const InvestPage = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { kycStatus, isLoading: isKycLoading } = useUserStatus();
  
  const [investmentAmount, setInvestmentAmount] = useState(1000); // Default investment amount
  const [tokenAmount, setTokenAmount] = useState(0);

  // Recalculate token amount whenever the investment amount changes
  useEffect(() => {
    const tokens = investmentAmount / mockAssetData.tokenPrice;
    setTokenAmount(tokens);
  }, [investmentAmount]);

  const handleInvestment = () => {
    // In a real app, this function would:
    // 1. Create a transaction object
    // 2. Prompt the user to sign it with their wallet
    // 3. Send the transaction to your smart contract
    alert(`Submitting investment of ${investmentAmount} CHF for ${tokenAmount.toFixed(4)} tokens.`);
  };

  // --- Main Render Logic ---
  const renderContent = () => {
    if (!isConnected) {
      return (
        <div className="text-center">
            <h2 className="text-2xl font-bold text-white">Connect Your Wallet</h2>
            <p className="text-gray-400 mt-2 mb-6">Please connect your wallet to begin the investment process.</p>
            <button onClick={() => open()} className="bg-brand-gold text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90">
              Connect Wallet
            </button>
        </div>
      );
    }

    if (isKycLoading) {
        return <p className="text-white text-center">Loading user status...</p>
    }

    if (kycStatus !== 'Approved') {
        return <KycNotice status={kycStatus} />;
    }

    return (
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <InvestmentForm
          assetName={mockAssetData.name}
          investmentAmount={investmentAmount}
          setInvestmentAmount={setInvestmentAmount}
          tokenAmount={tokenAmount}
        />
        <TransactionSummary
          investmentAmount={investmentAmount}
          tokenAmount={tokenAmount}
          tokenPrice={mockAssetData.tokenPrice}
        />
        <button onClick={handleInvestment} className="w-full bg-brand-gold text-white font-bold py-4 px-8 rounded-md text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
          Confirm Investment
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans" style={gradientBackground}>
      {renderContent()}
    </div>
  );
};

export default InvestPage;