import React, { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';

import Header from '../components/dashboard/Header';
import StatCard from '../components/dashboard/StatCard';
import PortfolioChart from '../components/dashboard/PortfolioChart';
import ActionsPanel from '../components/dashboard/ActionsPanel';
import TransactionTable from '../components/dashboard/TransactionTable';
import { DashboardSkeleton } from '../components/dashboard/skeletons/DashboardSkeleton';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Wallet, CheckCircle } from 'lucide-react';

// --- MOCK DATA ---
const mockInvestorData = {
  kycStatus: 'Approved',
  stats: {
    portfolioValueCHF: 6253.75,
    tokenBalance: 1250.75,
    kycProgress: 100,
  },
  chartData: [
    { name: 'Jan', value: 3200 }, { name: 'Feb', value: 3100 },
    { name: 'Mar', value: 4500 }, { name: 'Apr', value: 4200 },
    { name: 'May', value: 5100 }, { name: 'Jun', value: 5300 },
    { name: 'Jul', value: 6253.75 },
  ],
  transactions: [
    { id: 'TXN728', type: 'Purchase', amount: '+1,000.00 SPIR', valueCHF: '5,000.00', date: '2025-07-15', status: 'Completed' },
    { id: 'TXN729', type: 'Purchase', amount: '+250.75 SPIR', valueCHF: '1,253.75', date: '2025-08-01', status: 'Completed' },
  ],
};

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const DashboardPage = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isConnected) {
      setIsLoading(true);
      setTimeout(() => {
        setData(mockInvestorData);
        setIsLoading(false);
      }, 1500);
    }
  }, [isConnected]);

  if (!isConnected) {
    // ... Disconnected state remains the same ...
  }
  
  if (isLoading) {
      return (
          <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans" style={gradientBackground}>
              <div className="max-w-7xl mx-auto">
                <Header address={address} />
                <DashboardSkeleton />
              </div>
          </div>
      );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans" style={gradientBackground}>
      <div className="max-w-7xl mx-auto">
        <Header address={address} />
        
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-2 sm:w-[400px] bg-black bg-opacity-20 border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <StatCard
                title="Portfolio Value (CHF)"
                value={data.stats.portfolioValueCHF.toLocaleString('de-CH')}
                icon={<DollarSign className="h-4 w-4 text-gray-400" />}
              />
              <StatCard
                title="Tokens Owned (SPIR)"
                value={data.stats.tokenBalance.toLocaleString()}
                icon={<Wallet className="h-4 w-4 text-gray-400" />}
              />
              <StatCard
                title="KYC Status"
                value={data.kycStatus}
                icon={<CheckCircle className="h-4 w-4 text-gray-400" />}
              />
            </div>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
                <div className="lg:col-span-4">
                    <PortfolioChart data={data.chartData} />
                </div>
                <div className="lg:col-span-3">
                    <ActionsPanel />
                </div>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="mt-6">
            <TransactionTable transactions={data.transactions} />
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default DashboardPage;