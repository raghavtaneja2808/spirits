import React from 'react';
import HoldingCard from './HoldingCard';

const HoldingsList = ({ holdings }) => (
  <div className="space-y-4">
    {holdings.map(holding => (
      <HoldingCard key={holding.id} holding={holding} />
    ))}
  </div>
);
export default HoldingsList;