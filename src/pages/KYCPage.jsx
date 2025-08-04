import React, { useState } from 'react';
import KYCProgress from '../components/kyc/KYCProgress';
import Step1_PersonalDetails from '../components/kyc/Step1_PersonalDetails';
import Step2_DocumentUpload from '../components/kyc/Step2_DocumentUpload';
import Step3_LivenessCheck from '../components/kyc/Step3_LivenessCheck';
import Step4_Review from '../components/kyc/Step4_Review';
import Step5_Confirmation from '../components/kyc/Step5_Confirmation';

const gradientBackground = {
  background: 'linear-gradient(93deg,rgba(10, 10, 10, 1) 0%, rgba(38, 38, 36, 1) 55%, rgba(31, 28, 28, 1) 83%, rgba(43, 40, 40, 1) 100%)'
};

const KYCPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    idDocument: null,
    proofOfAddress: null,
    selfie: null,
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const steps = [
    { number: 1, name: 'Personal Details' },
    { number: 2, name: 'Document Upload' },
    { number: 3, name: 'Liveness Check' },
    { number: 4, name: 'Review & Submit' },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_PersonalDetails formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
      case 2:
        return <Step2_DocumentUpload formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3_LivenessCheck updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4_Review formData={formData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5_Confirmation />;
      default:
        return <Step1_PersonalDetails formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 font-sans" style={gradientBackground}>
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-landing-serif font-bold text-white">Identity Verification (KYC)</h1>
          <p className="text-gray-400 mt-2">Please complete the following steps to secure your account.</p>
        </header>

        {currentStep <= 4 && (
          <div className="mb-8 px-4">
            <KYCProgress steps={steps} currentStep={currentStep} />
          </div>
        )}

        <main>
          {renderStep()}
        </main>
      </div>
    </div>
  );
};

export default KYCPage;