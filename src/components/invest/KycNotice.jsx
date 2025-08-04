import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Make sure to import Link

const KycNotice = ({ status }) => {
  const isRejected = status === 'Rejected';
  
  return (
    <Alert variant="destructive" className="bg-yellow-500/10 border-yellow-500/50 text-yellow-300 max-w-lg mx-auto">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="font-bold">KYC Verification Required</AlertTitle>
      <AlertDescription className="mt-2 text-yellow-400">
        Your KYC status is currently: <span className="font-bold">{status}</span>.
        <br />
        You must have an "Approved" status to invest.
      </AlertDescription>
      <div className="mt-4">
        <Link to="/kyc">
          <Button variant="outline" className="text-yellow-300 border-yellow-400/50 hover:bg-yellow-500/20 hover:text-white">
            {isRejected ? 'Re-submit KYC' : 'Check KYC Status'}
          </Button>
        </Link>
      </div>
    </Alert>
  );
};
export default KycNotice;