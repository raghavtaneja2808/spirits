import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const DashboardSkeleton = () => {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-black bg-opacity-20 border-gray-800">
            <CardHeader><Skeleton className="h-5 w-1/2" /></CardHeader>
            <CardContent><Skeleton className="h-8 w-3/4" /></CardContent>
          </Card>
        ))}
      </div>
      <Card className="bg-black bg-opacity-20 border-gray-800">
        <CardHeader><Skeleton className="h-6 w-1/4" /></CardHeader>
        <CardContent><Skeleton className="h-[200px] w-full" /></CardContent>
      </Card>
    </div>
  );
};