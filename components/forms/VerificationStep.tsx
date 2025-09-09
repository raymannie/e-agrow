"use client";
import { useState } from "react";
import { CheckCircle, Smartphone } from "lucide-react";

interface VerificationStepProps {
  phone: string;
  onComplete: () => void;
  onBack: () => void;
}

export default function VerificationStep({
  phone,
  onComplete,
  onBack,
}: VerificationStepProps) {
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false);
      onComplete();
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Smartphone className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Verify Your Phone
        </h2>
        <p className="text-gray-600 mb-2">
          We&apos;ve sent a 6-digit verification code to:
        </p>
        <p className="text-lg font-semibold text-gray-900">{phone}</p>
      </div>

      <form onSubmit={handleVerify} className="space-y-6">
        <div>
          <input
            type="text"
            maxLength={6}
            required
            className="input text-center text-2xl tracking-widest"
            placeholder="000000"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </div>

        <div className="text-sm text-gray-600">
          Didn&apos;t receive the code?{" "}
          <button type="button" className="text-green-600 hover:underline">
            Resend SMS
          </button>
        </div>

        <div className="flex justify-between pt-6">
          <button type="button" onClick={onBack} className="btn btn-secondary">
            Back
          </button>
          <button
            type="submit"
            disabled={verificationCode.length !== 6 || isVerifying}
            className="btn btn-primary disabled:opacity-50"
          >
            {isVerifying ? "Verifying..." : "Verify & Complete"}
          </button>
        </div>
      </form>
    </div>
  );
}
