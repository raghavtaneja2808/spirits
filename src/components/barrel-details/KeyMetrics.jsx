import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Calendar, Package, Percent } from 'lucide-react';

const MetricCard = ({ title, value, icon }) => (
  <Card className="bg-transparent border-0 shadow-none text-white">
    <CardHeader className="p-0 flex flex-row items-center space-x-3 space-y-0">
      <div className="p-2 bg-gray-700/50 rounded-md">{icon}</div>
      <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0 mt-2">
      <p className="text-2xl font-bold">{value}</p>
    </CardContent>
  </Card>
);

const KeyMetrics = ({ metrics }) => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-4">Key Metrics</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <MetricCard title="Age" value={metrics.age} icon={<Calendar className="h-5 w-5 text-brand-gold"/>} />
      <MetricCard title="ABV" value={metrics.abv} icon={<Percent className="h-5 w-5 text-brand-gold"/>} />
      <MetricCard title="Cask Type" value={metrics.caskType} icon={<Package className="h-5 w-5 text-brand-gold"/>} />
      <MetricCard title="Bottle Yield" value={metrics.bottleYield} icon={<Droplet className="h-5 w-5 text-brand-gold"/>} />
    </div>
  </div>
);
export default KeyMetrics;