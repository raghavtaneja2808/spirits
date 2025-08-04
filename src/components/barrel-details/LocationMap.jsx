import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LocationMap = ({ location }) => (
  <div>
    <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-base">{location}</CardTitle>
      </CardHeader>
      <CardContent>
         {/* In a real app, you would embed an interactive map here */}
        <div className="h-64 bg-gray-700 rounded-md flex items-center justify-center">
            <p className="text-gray-400">Map Placeholder</p>
        </div>
      </CardContent>
    </Card>
  </div>
);
export default LocationMap;