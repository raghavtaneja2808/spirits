import React from 'react';
import { Progress } from "@/components/ui/progress";

const KYCProgress = ({ steps, currentStep }) => {
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  return (
    <div>
      <Progress value={progressPercentage} className="w-full h-2 bg-gray-800" />
      <div className="flex justify-between mt-2">
        {steps.map((step) => (
          <div key={step.number} className="text-center w-1/4">
            <p className={`text-xs font-bold ${currentStep >= step.number ? 'text-brand-gold' : 'text-gray-500'}`}>
              {step.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default KYCProgress;