import React, { useState, useEffect } from 'react';
import HistoryHeader from '../components/transactions/HistoryHeader';
import { TransactionsDataTable } from '../components/transactions/TransactionsDataTable';
import { HistoryTableSkeleton } from '../components/transactions/skeletons/HistoryTableSkeleton';

// --- MOCK DATA (In a real app, this comes from a paginated API endpoint) ---
const mockTransactions = [
  { id: 'TXN729', type: 'Purchase', asset: 'The Macallan 2005 Cask #42', amount: '+900.00 SPIR', valueCHF: '10,000.00', date: '2025-08-01', status: 'Completed', txHash: '0x1a2b...' },
  { id: 'TXN728', type: 'Purchase', asset: 'Glen Fiddich 1992 Cask #88', amount: '+1,250.75 SPIR', valueCHF: '5,000.00', date: '2025-07-15', status: 'Completed', txHash: '0x2b3c...' },
  { id: 'TXN650', type: 'Reward', asset: 'Platform Yield', amount: '+55.40 SPIR', valueCHF: '355.40', date: '2025-07-01', status: 'Completed', txHash: '0x3c4d...' },
  { id: 'TXN512', type: 'Purchase', asset: 'Glen Fiddich 1992 Cask #88', amount: '+250.00 SPIR', valueCHF: '1,250.00', date: '2025-06-20', status: 'Failed', txHash: '0x4d5e...' },
  { id: 'TXN499', type: 'Purchase', asset: 'The Macallan 2005 Cask #42', amount: '+100.00 SPIR', valueCHF: '1,100.00', date: '2025-06-18', status: 'Pending', txHash: '0x5e6f...' },
  // Add more mock data to test pagination
];

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const TransactionHistoryPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setIsLoading(true);
    setTimeout(() => {
      setData(mockTransactions);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 font-sans" style={gradientBackground}>
      <div className="max-w-7xl mx-auto">
        <HistoryHeader />
        <main className="mt-8">
          {isLoading ? <HistoryTableSkeleton /> : <TransactionsDataTable data={data} />}
        </main>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;