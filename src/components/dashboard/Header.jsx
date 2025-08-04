import React from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = ({ address }) => {
  const { open } = useWeb3Modal();
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h1 className="text-4xl font-landing-serif font-bold text-white">Dashboard</h1>
      <Button variant="outline" className="bg-black bg-opacity-20 border-gray-700 text-white font-mono text-sm hover:bg-gray-700 backdrop-blur-sm" onClick={() => open()}>
          <Avatar className="h-5 w-5 mr-2 border-2 border-brand-gold">
            <AvatarFallback className="bg-transparent text-xs">A</AvatarFallback> {/* Placeholder */}
          </Avatar>
          {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '...'}
      </Button>
    </header>
  );
};
export default Header;