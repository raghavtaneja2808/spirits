import React from 'react';
import StatCard from './StatCard';

const StatGrid = ({ stats, isLoading }) => {
  const formatCHF = (num) => `CHF ${num?.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <StatCard
        title="Portfolio Value"
        value={formatCHF(stats?.portfolioValueCHF)}
        isLoading={isLoading}
      />
      <StatCard
        title="Tokens Owned"
        value={`${stats?.tokenBalance?.toLocaleString() || '...'} SPIR`}
        isLoading={isLoading}
      />
    </div>
  );
};

export default StatGrid;