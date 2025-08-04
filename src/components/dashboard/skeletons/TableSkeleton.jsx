import React from 'react';

export const TableSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg bg-black bg-opacity-20 border border-gray-800 backdrop-blur-sm p-4">
      <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="grid grid-cols-4 gap-4">
            <div className="h-5 bg-gray-700 rounded col-span-1"></div>
            <div className="h-5 bg-gray-700 rounded col-span-1"></div>
            <div className="h-5 bg-gray-700 rounded col-span-1"></div>
            <div className="h-5 bg-gray-700 rounded col-span-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};