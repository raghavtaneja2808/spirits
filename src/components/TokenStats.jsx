import React from 'react';

const TokenStats = () => {
  // Placeholder data - you will replace this with real data from your backend or smart contract
  const stats = {
    investors: 216,
    tokensIssued: '1,250,000',
    valuationCHF: '6,250,000'
  };

  return (
    // Using a dark background consistent with the theme
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-landing-serif font-bold text-white">
          Live Platform Statistics
        </h2>
        <p className="mt-3 text-lg text-gray-400">
          Transparency and growth, updated in real-time.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Stat 1: Total Investors */}
          <div className="rounded-lg border border-gray-700 bg-black bg-opacity-20 p-8">
            <p className="text-5xl font-bold text-white">
              {stats.investors.toLocaleString()}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-400">
              Total Investors
            </p>
          </div>

          {/* Stat 2: Tokens Issued */}
          <div className="rounded-lg border border-gray-700 bg-black bg-opacity-20 p-8">
            <p className="text-5xl font-bold text-white">
              {stats.tokensIssued}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-400">
              Tokens Issued (SPIR)
            </p>
          </div>

          {/* Stat 3: Current Valuation */}
          <div className="rounded-lg border border-gray-700 bg-black bg-opacity-20 p-8">
            <p className="text-5xl font-bold text-white">
              {stats.valuationCHF}
            </p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-gray-400">
              Current Valuation (CHF)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TokenStats;