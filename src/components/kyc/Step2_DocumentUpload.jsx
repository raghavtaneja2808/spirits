import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from 'lucide-react';

const Step2_DocumentUpload = ({ formData, updateFormData, nextStep, prevStep }) => {
  const handleFileChange = (e) => {
    updateFormData({ [e.target.id]: e.target.files[0] });
  };

  return (
    <Card className="bg-black bg-opacity-20 border-gray-800 text-white backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Step 2: Document Upload</CardTitle>
        <CardDescription className="text-gray-400">Upload a government-issued ID and proof of address.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="idDocument">Identity Document (Passport, ID Card)</Label>
          <div className="relative flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg">
            <UploadCloud className="h-8 w-8 text-gray-500" />
            <Input id="idDocument" type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            {formData.idDocument && <p className="absolute bottom-2 text-xs text-green-400">{formData.idDocument.name}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="proofOfAddress">Proof of Address (Utility Bill, Bank Statement)</Label>
           <div className="relative flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg">
            <UploadCloud className="h-8 w-8 text-gray-500" />
            <Input id="proofOfAddress" type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            {formData.proofOfAddress && <p className="absolute bottom-2 text-xs text-green-400">{formData.proofOfAddress.name}</p>}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={prevStep} className="bg-transparent border-gray-600 hover:bg-gray-800">Back</Button>
        <Button onClick={nextStep} className="bg-brand-gold hover:bg-opacity-90">Continue</Button>
      </CardFooter>
    </Card>
  );
};
export default Step2_DocumentUpload;