import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export const HistoryTableSkeleton = () => {
    return (
        <div className="w-full animate-pulse">
            <div className="flex items-center justify-between py-4">
                <Skeleton className="h-10 w-64" />
                <Skeleton className="h-10 w-32" />
            </div>
            <div className="rounded-md border border-gray-800 p-4">
                <div className="space-y-3">
                    <div className="grid grid-cols-5 gap-4">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                    </div>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="grid grid-cols-5 gap-4">
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-8 w-full" />
                            <Skeleton className="h-8 w-full" />
                        </div>
                    ))}
                </div>
            </div>
             <div className="flex items-center justify-end space-x-2 py-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
        </div>
    );
};