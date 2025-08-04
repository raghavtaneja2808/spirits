import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioChart = ({ data }) => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription className="text-gray-400">Your portfolio value over the last 7 months.</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C0A06C" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#C0A06C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip
                cursor={{ stroke: '#C0A06C', strokeWidth: 1, fill: 'transparent' }}
                contentStyle={{ backgroundColor: '#0A192F', border: '1px solid #C0A06C', color: 'white' }}
              />
              <Area type="monotone" dataKey="value" stroke="#C0A06C" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
export default PortfolioChart;