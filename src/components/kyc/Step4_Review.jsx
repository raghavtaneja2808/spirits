import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ReviewItem = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-800">
    <p className="text-sm text-gray-400">{label}</p>
    <p className="text-sm font-medium text-white">{value}</p>
  </div>
);

const Step4_Review = ({ formData, nextStep, prevStep }) => {
  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Step 4: Review Your Information</CardTitle>
        <CardDescription className="text-gray-400">Please confirm that all details are correct before submission.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <ReviewItem label="First Name" value={formData.firstName} />
        <ReviewItem label="Last Name" value={formData.lastName} />
        <ReviewItem label="Date of Birth" value={formData.dob} />
        <ReviewItem label="ID Document" value={formData.idDocument?.name || 'Not Uploaded'} />
        <ReviewItem label="Proof of Address" value={formData.proofOfAddress?.name || 'Not Uploaded'} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} className="bg-transparent border-gray-600 hover:bg-gray-800">Back</Button>
        <Button onClick={nextStep} className="bg-brand-gold hover:bg-opacity-90">Submit for Verification</Button>
      </CardFooter>
    </Card>
  );
};
export default Step4_Review;