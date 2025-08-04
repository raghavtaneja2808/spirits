import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SummaryRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-800">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="font-mono font-medium text-white">{value}</p>
  </div>
);

const TransactionSummary = ({ investmentAmount, tokenAmount, tokenPrice }) => {
  const networkFee = 5.30; // Example network fee
  const totalPayable = investmentAmount + networkFee;

  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Transaction Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <SummaryRow label="Price per Token" value={`CHF ${tokenPrice.toFixed(2)}`} />
        <SummaryRow label="Your Investment" value={`CHF ${investmentAmount.toFixed(2)}`} />
        <SummaryRow label="Tokens to be Minted" value={`${tokenAmount.toFixed(4)} SPIR`} />
        <SummaryRow label="Est. Network Fee" value={`~CHF ${networkFee.toFixed(2)}`} />
        <div className="flex justify-between items-center pt-4">
          <p className="text-lg font-bold">Total Payable</p>
          <p className="text-lg font-bold text-brand-gold">CHF {totalPayable.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};
export default TransactionSummary;