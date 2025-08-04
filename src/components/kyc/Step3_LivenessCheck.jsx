import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera } from 'lucide-react';

const Step3_LivenessCheck = ({ nextStep, prevStep }) => {
  // In a real app, this would integrate with a camera API
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Step 3: Liveness Check</CardTitle>
        <CardDescription className="text-gray-400">Please position your face in the center of the frame.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center">
            <Camera className="h-16 w-16 text-gray-600" />
        </div>
        <p className="text-xs text-center mt-2 text-gray-500">Camera feed simulation</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} className="bg-transparent border-gray-600 hover:bg-gray-800">Back</Button>
        <Button onClick={nextStep} className="bg-brand-gold hover:bg-opacity-90">Capture & Continue</Button>
      </CardFooter>
    </Card>
  );
};
export default Step3_LivenessCheck;