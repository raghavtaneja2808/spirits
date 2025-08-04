import React from 'react';

const KYCBadge = ({ status }) => {
  const styles = {
    Approved: 'bg-green-500/20 text-green-400 border-green-500/30',
    Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Rejected: 'bg-red-500/20 text-red-400 border-red-500/30',
  };
  return <span className={`px-3 py-1 text-sm font-bold rounded-full border ${styles[status] || 'bg-gray-700'}`}>{status}</span>;
};

const KYCCard = ({ status, isLoading }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse h-full rounded-lg bg-black bg-opacity-20 border border-gray-800 p-6 backdrop-blur-sm flex flex-col justify-between">
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        <div className="h-7 bg-gray-600 rounded-full w-1/2 mt-3"></div>
      </div>
    );
  }

  return (
    <div className="h-full rounded-lg bg-black bg-opacity-20 border border-gray-800 p-6 backdrop-blur-sm flex flex-col justify-between">
      <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider">KYC Status</h3>
      <div className="mt-2">
        <KYCBadge status={status || '...'} />
      </div>
    </div>
  );
};

export default KYCCard;