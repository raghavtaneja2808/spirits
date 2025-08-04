import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';

// Import all the new components
import PortfolioHeader from '../components/portfolio/PortfolioHeader';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import HoldingsList from '../components/portfolio/HoldingsList';
import RewardsPanel from '../components/portfolio/RewardsPanel';
import { PortfolioSkeleton } from '../components/portfolio/skeletons/PortfolioSkeleton';
import { Button } from '@/components/ui/button';

// --- MOCK DATA (In a real app, this comes from an API call) ---
const mockPortfolioData = {
  stats: {
    totalValueCHF: 18780.50,
    totalTokens: 2150.75,
    projectedYield: 7.5, // in percent
    claimableRewardsCHF: 355.40,
  },
  holdings: [
    { id: 'glen-1992-88', name: 'Glen Fiddich 1992 Cask #88', image: '/b-img1.jpg', tokensOwned: 1250.75, currentValue: 6253.75, costBasis: 5000 },
    { id: 'macallan-2005-42', name: 'The Macallan 2005 Cask #42', image: '/b-img2.jpg', tokensOwned: 900.00, currentValue: 12526.75, costBasis: 10000 },
  ]
};

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const PortfolioPage = () => {
  const { address, isConnected } = useAccount();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isConnected) {
      setIsLoading(true);
      // Simulate fetching portfolio data
      setTimeout(() => {
        setData(mockPortfolioData);
        setIsLoading(false);
      }, 1500);
    }
  }, [isConnected]);
  
  // --- Render Logic ---
  const renderContent = () => {
    if (isLoading) {
      return <PortfolioSkeleton />;
    }

    if (!data || data.holdings.length === 0) {
      return (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-white">Your Portfolio is Empty</h2>
          <p className="text-gray-400 mt-2 mb-6">Start your investment journey to see your holdings here.</p>
          <Link to="/invest">
            <Button className="bg-brand-gold text-white hover:bg-opacity-90">Explore Investments</Button>
          </Link>
        </div>
      );
    }

    return (
      <>
        <PortfolioStats stats={data.stats} />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Your Holdings</h2>
            <HoldingsList holdings={data.holdings} />
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Rewards</h2>
            <RewardsPanel rewards={data.stats.claimableRewardsCHF} />
          </div>
        </div>
      </>
    );
  };
  
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans" style={gradientBackground}>
      <div className="max-w-7xl mx-auto">
        <PortfolioHeader address={address} />
        <main className="mt-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default PortfolioPage;