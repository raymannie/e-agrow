/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/vital-records/verify/page.tsx
"use client";
import { useState } from "react";
import { Shield, CheckCircle, XCircle, FileText } from "lucide-react";

export default function VerifyCertificatePage() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock verification result
    const isValid = Math.random() > 0.3; // 70% chance of being valid

    setVerificationResult({
      isValid,
      certificateNumber: certificateNumber,
      certificateType:
        certificateType === "birth" ? "Birth Certificate" : "Death Certificate",
      issueDate: "2024-09-25",
      holderName: isValid ? "Adewale John Ogunbiyi" : null,
      issuedBy: "Registrar, Ikenne Local Government Area",
      verificationDate: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verify Certificate
          </h1>
          <p className="text-gray-600">
            Verify the authenticity of birth or death certificates
          </p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certificate Type *
              </label>
              <select
                required
                className="input"
                value={certificateType}
                onChange={(e) => setCertificateType(e.target.value)}
              >
                <option value="">Select certificate type</option>
                <option value="birth">Birth Certificate</option>
                <option value="death">Death Certificate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certificate Number *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., BC/IKN/2024/001 or DC/IKN/2024/001"
                className="input"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-2">
                The certificate number can be found at the top of the
                certificate
              </p>
            </div>

            <button type="submit" className="w-full btn btn-primary text-lg">
              <Shield className="mr-2 h-5 w-5" />
              Verify Certificate
            </button>
          </form>
        </div>

        {/* Verification Result */}
        {verificationResult && (
          <div
            className={`rounded-2xl shadow-xl p-8 ${
              verificationResult.isValid
                ? "bg-green-50 border-2 border-green-200"
                : "bg-red-50 border-2 border-red-200"
            }`}
          >
            <div className="text-center mb-6">
              {verificationResult.isValid ? (
                <>
                  <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-green-900 mb-2">
                    Certificate Verified ✓
                  </h2>
                  <p className="text-green-700">
                    This certificate is authentic and valid
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="h-20 w-20 text-red-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-red-900 mb-2">
                    Invalid Certificate
                  </h2>
                  <p className="text-red-700">
                    This certificate could not be verified
                  </p>
                </>
              )}
            </div>

            {verificationResult.isValid && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">
                      Certificate Number
                    </p>
                    <p className="font-semibold text-gray-900">
                      {verificationResult.certificateNumber}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Type</p>
                    <p className="font-semibold text-gray-900">
                      {verificationResult.certificateType}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Holder Name</p>
                    <p className="font-semibold text-gray-900">
                      {verificationResult.holderName}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Issue Date</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(
                        verificationResult.issueDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Issued By</p>
                  <p className="font-semibold text-gray-900">
                    {verificationResult.issuedBy}
                  </p>
                </div>

                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    Verified on:{" "}
                    {new Date(
                      verificationResult.verificationDate
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {!verificationResult.isValid && (
              <div className="bg-white rounded-lg p-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Possible Reasons:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Certificate number was entered incorrectly</li>
                  <li>• Certificate may be fake or forged</li>
                  <li>• Certificate was not issued by Ikenne LGA</li>
                  <li>• Certificate may have been revoked</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    If you believe this is an error, please contact our office
                    at{" "}
                    <a
                      href="mailto:vitalrecords@ikennelga.gov.ng"
                      className="text-blue-600 hover:underline"
                    >
                      vitalrecords@ikennelga.gov.ng
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
