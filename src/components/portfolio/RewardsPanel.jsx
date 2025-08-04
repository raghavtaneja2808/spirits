import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RewardsPanel = ({ rewards }) => {
  const hasRewards = rewards > 0;
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm sticky top-8">
      <CardHeader>
        <CardTitle>Claimable Rewards</CardTitle>
        <CardDescription className="text-gray-400">Rewards from yield are now available to be claimed.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-brand-gold mb-4">
          CHF {rewards.toLocaleString('de-CH')}
        </p>
        <Button size="lg" className="w-full bg-brand-gold text-white hover:bg-opacity-90" disabled={!hasRewards}>
          {hasRewards ? 'Claim Now' : 'No Rewards to Claim'}
        </Button>
      </CardContent>
    </Card>
  );
};
export default RewardsPanel;