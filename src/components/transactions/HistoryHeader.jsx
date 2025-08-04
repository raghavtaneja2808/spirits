import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const HistoryHeader = () => {
  const handleExport = () => {
    // In a real app, this would trigger a CSV download
    alert('Exporting data...');
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-4xl font-landing-serif font-bold text-white">Transaction History</h1>
        <p className="mt-1 text-gray-400">A complete record of all your platform activity.</p>
      </div>
      <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800 text-white" onClick={handleExport}>
        <Download className="mr-2 h-4 w-4" />
        Export as CSV
      </Button>
    </header>
  );
};
export default HistoryHeader;