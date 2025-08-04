import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const InvestPanel = ({ tokenPrice, remainingTokens, totalTokens }) => {
  const fundedPercentage = ((totalTokens - remainingTokens) / totalTokens) * 100;
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-brand-gold">Invest in this Cask</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-400">Price Per Token</p>
          <p className="text-3xl font-bold">CHF {tokenPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">{remainingTokens.toLocaleString()} / {totalTokens.toLocaleString()} Tokens Remaining</p>
          <Progress value={fundedPercentage} className="h-2 bg-gray-800" />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full bg-brand-gold text-white hover:bg-opacity-90 font-bold">
          Invest Now
        </Button>
      </CardFooter>
    </Card>
  );
};
export default InvestPanel;