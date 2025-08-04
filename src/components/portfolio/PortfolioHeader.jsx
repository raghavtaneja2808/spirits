import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { Button } from "@/components/ui/button";

const PortfolioHeader = ({ address }) => {
  const { open } = useWeb3Modal();
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h1 className="text-4xl font-landing-serif font-bold text-white">My Portfolio</h1>
      <Button variant="outline" className="bg-black bg-opacity-20 border-gray-700 text-white font-mono text-sm hover:bg-gray-700 backdrop-blur-sm" onClick={() => open()}>
        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '...'}
      </Button>
    </header>
  );
};
export default PortfolioHeader;