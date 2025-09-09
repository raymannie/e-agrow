"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import StepIndicator from "@/components/ui/StepIndicator";
import UserTypeSelection from "@/components/forms/UserTypeSelection";
import BasicInfoForm from "@/components/forms/BasicInfoForm";
import FarmerDetailsForm from "@/components/forms/FarmerDetailsForm";
import BuyerDetailsForm from "@/components/forms/BuyerDetailsForm";
import VerificationStep from "@/components/forms/VerificationStep";
import WelcomeComplete from "@/components/forms/WelcomeComplete";
import { Sprout } from "lucide-react";

export default function OnboardingPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState<"farmer" | "buyer" | null>(null);

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    phone: "",
    email: "",
    ward: "",
    location: "",
    password: "",
  });

  const [farmerDetails, setFarmerDetails] = useState({
    farmName: "",
    farmSize: "",
    primaryCrop: "",
  });

  const [buyerDetails, setBuyerDetails] = useState({
    businessType: "",
    businessName: "",
    buyingNeeds: "",
  });

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "farmer" || type === "buyer") {
      setUserType(type);
      setCurrentStep(2); // Skip user type selection
    }
  }, [searchParams]);

  const updateBasicInfo = (field: string, value: string) => {
    setBasicInfo((prev) => ({ ...prev, [field]: value }));
  };

  const updateFarmerDetails = (field: string, value: string) => {
    setFarmerDetails((prev) => ({ ...prev, [field]: value }));
  };

  const updateBuyerDetails = (field: string, value: string) => {
    setBuyerDetails((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const totalSteps = 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  E-Agro Marketplace
                </h1>
                <p className="text-xs text-gray-600">Account Setup</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
            {currentStep === 1 && (
              <UserTypeSelection
                selectedType={userType}
                onTypeSelect={setUserType}
                onNext={nextStep}
              />
            )}

            {currentStep === 2 && (
              <BasicInfoForm
                formData={basicInfo}
                onChange={updateBasicInfo}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {currentStep === 3 && userType === "farmer" && (
              <FarmerDetailsForm
                formData={farmerDetails}
                onChange={updateFarmerDetails}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {currentStep === 3 && userType === "buyer" && (
              <BuyerDetailsForm
                formData={buyerDetails}
                onChange={updateBuyerDetails}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}

            {currentStep === 4 && (
              <VerificationStep
                phone={basicInfo.phone}
                onComplete={nextStep}
                onBack={prevStep}
              />
            )}

            {currentStep === 5 && userType && (
              <WelcomeComplete userType={userType} userName={basicInfo.name} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
