import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Step1_PersonalDetails = ({ formData, updateFormData, nextStep }) => {
  const handleChange = (e) => {
    updateFormData({ [e.target.id]: e.target.value });
  };

  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Step 1: Personal Details</CardTitle>
        <CardDescription className="text-gray-400">Please provide your legal name and date of birth.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" value={formData.firstName} onChange={handleChange} className="bg-gray-900/50 border-gray-700" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value={formData.lastName} onChange={handleChange} className="bg-gray-900/50 border-gray-700" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input id="dob" type="date" value={formData.dob} onChange={handleChange} className="bg-gray-900/50 border-gray-700" />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={nextStep} className="w-full bg-brand-gold hover:bg-opacity-90">Continue</Button>
      </CardFooter>
    </Card>
  );
};
export default Step1_PersonalDetails;