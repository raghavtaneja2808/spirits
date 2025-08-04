import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const InvestmentForm = ({ assetName, investmentAmount, setInvestmentAmount, tokenAmount }) => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Invest in {assetName}</CardTitle>
        <CardDescription className="text-gray-400">Specify your investment amount in CHF.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="amount-chf" className="text-lg">Amount (CHF)</Label>
          <div className="relative">
            <Input
              id="amount-chf"
              type="number"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="bg-gray-900/50 border-gray-700 h-14 text-2xl pr-16"
              min="100"
              step="50"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">CHF</span>
          </div>
        </div>
        
        <Slider
          value={[investmentAmount]}
          onValueChange={(value) => setInvestmentAmount(value[0])}
          max={10000}
          step={50}
          className="my-4"
        />

        <div className="grid gap-2">
          <Label htmlFor="tokens-to-receive">Tokens to Receive (SPIR)</Label>
          <Input id="tokens-to-receive" value={tokenAmount.toFixed(4)} readOnly className="bg-gray-900/80 border-gray-700 h-14 text-2xl text-brand-gold" />
        </div>
      </CardContent>
    </Card>
  );
};
export default InvestmentForm;