import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wallet, Percent } from 'lucide-react';

const StatCard = ({ title, value, icon }) => (
  <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const PortfolioStats = ({ stats }) => (
  <div className="grid gap-6 md:grid-cols-3">
    <StatCard
      title="Total Portfolio Value"
      value={`CHF ${stats.totalValueCHF.toLocaleString('de-CH')}`}
      icon={<DollarSign className="h-4 w-4 text-gray-400" />}
    />
    <StatCard
      title="Total Tokens Held"
      value={stats.totalTokens.toLocaleString()}
      icon={<Wallet className="h-4 w-4 text-gray-400" />}
    />
    <StatCard
      title="Projected Annual Yield"
      value={`${stats.projectedYield}%`}
      icon={<Percent className="h-4 w-4 text-gray-400" />}
    />
  </div>
);
export default PortfolioStats;