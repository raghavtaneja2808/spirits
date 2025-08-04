import React from 'react';
import { Badge } from "@/components/ui/badge";

const BarrelHeader = ({ name, distillery, status }) => (
  <header>
    <h1 className="text-4xl lg:text-5xl font-landing-serif font-bold text-white">{name}</h1>
    <div className="mt-2 flex items-center gap-4">
      <p className="text-lg text-gray-400">{distillery}</p>
      <Badge variant="outline" className="text-green-400 border-green-500/50">{status}</Badge>
    </div>
  </header>
);
export default BarrelHeader;