import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ActionsPanel = () => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm h-full flex flex-col">
      <CardHeader>
        <CardTitle>Take Action</CardTitle>
        <CardDescription className="text-gray-400">Expand your portfolio or review legal documents.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-end gap-3">
        <Button className="w-full bg-brand-gold text-white hover:bg-opacity-90">Invest More</Button>
        <Button variant="outline" className="w-full bg-transparent border-gray-600 hover:bg-gray-800">View Prospectus</Button>
      </CardContent>
    </Card>
  );
};
export default ActionsPanel;