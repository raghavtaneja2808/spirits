import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HoldingCard = ({ holding }) => {
  const gainLoss = holding.currentValue - holding.costBasis;
  const gainLossPercent = (gainLoss / holding.costBasis) * 100;
  const isGain = gainLoss >= 0;

  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm overflow-hidden flex flex-col sm:flex-row">
      <img src={holding.image} alt={holding.name} className="w-full sm:w-48 h-48 sm:h-auto object-cover" />
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold">{holding.name}</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Tokens Owned</p>
              <p className="font-semibold">{holding.tokensOwned.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-400">Current Value</p>
              <p className="font-semibold">CHF {holding.currentValue.toLocaleString('de-CH')}</p>
            </div>
            <div>
              <p className="text-gray-400">Total Gain/Loss</p>
              <p className={`font-semibold ${isGain ? 'text-green-400' : 'text-red-400'}`}>
                {isGain ? '+' : ''}CHF {gainLoss.toLocaleString('de-CH')} ({gainLossPercent.toFixed(2)}%)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-right">
          <Link to={`/barrel/${holding.id}`}>
            <Button variant="outline" className="bg-transparent border-gray-600 hover:bg-gray-800">
              View Barrel
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export default HoldingCard;