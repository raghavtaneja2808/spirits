import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const Step5_Confirmation = () => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm text-center">
      <CardHeader>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
        </div>
        <CardTitle className="mt-4">Submission Successful</CardTitle>
        <CardDescription className="text-gray-400">Your information has been submitted for review.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300">
          We will notify you via email once the verification process is complete. This typically takes 24-48 hours.
        </p>
        <p className="text-sm text-gray-300 mt-2">
          You can now return to your dashboard.
        </p>
      </CardContent>
    </Card>
  );
};
export default Step5_Confirmation;