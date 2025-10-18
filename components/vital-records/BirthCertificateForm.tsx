// src/components/vital-records/BirthCertificateForm.tsx
"use client";
import { useState } from "react";
import {
  WARDS,
  HOSPITALS_IN_IKENNE,
  NATIONALITIES,
  OCCUPATIONS,
  RELATIONSHIPS,
  PROCESSING_TYPE,
  DELIVERY_METHOD,
} from "@/lib/vitalRecordsConstants";
import { Upload, CheckCircle } from "lucide-react";
import { PROCESSING_TIMES } from "@/types/vitalRecords";

interface BirthFormData {
  // Child info
  childFirstName: string;
  childMiddleName: string;
  childLastName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  timeOfBirth: string;

  // Mother info
  motherFirstName: string;
  motherMiddleName: string;
  motherLastName: string;
  motherMaidenName: string;
  motherDOB: string;
  motherNationality: string;
  motherOccupation: string;
  motherAddress: string;
  motherPhone: string;

  // Father info
  fatherFirstName: string;
  fatherMiddleName: string;
  fatherLastName: string;
  fatherDOB: string;
  fatherNationality: string;
  fatherOccupation: string;
  fatherAddress: string;
  fatherPhone: string;

  // Applicant info
  applicantName: string;
  applicantRelationship: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantAddress: string;

  // Processing
  processingType: string;
  deliveryMethod: string;
  deliveryAddress: string;
}

export default function BirthCertificateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BirthFormData>({
    childFirstName: "",
    childMiddleName: "",
    childLastName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    timeOfBirth: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherMaidenName: "",
    motherDOB: "",
    motherNationality: "Nigerian",
    motherOccupation: "",
    motherAddress: "",
    motherPhone: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherDOB: "",
    fatherNationality: "Nigerian",
    fatherOccupation: "",
    fatherAddress: "",
    fatherPhone: "",
    applicantName: "",
    applicantRelationship: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantAddress: "",
    processingType: "standard",
    deliveryMethod: "collection",
    deliveryAddress: "",
  });

  const updateFormData = (field: keyof BirthFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const totalSteps = 6;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex-1 flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  step === currentStep
                    ? "bg-blue-600 text-white"
                    : step < currentStep
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step < currentStep ? (
                  <CheckCircle className="h-6 w-6" />
                ) : (
                  step
                )}
              </div>
              {step < totalSteps && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    step < currentStep ? "bg-green-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        {/* Step 1: Child Information */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Child Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.childFirstName}
                    onChange={(e) =>
                      updateFormData("childFirstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.childMiddleName}
                    onChange={(e) =>
                      updateFormData("childMiddleName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.childLastName}
                    onChange={(e) =>
                      updateFormData("childLastName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    className="input"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      updateFormData("dateOfBirth", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    className="input"
                    value={formData.timeOfBirth}
                    onChange={(e) =>
                      updateFormData("timeOfBirth", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place of Birth *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.placeOfBirth}
                    onChange={(e) =>
                      updateFormData("placeOfBirth", e.target.value)
                    }
                  >
                    <option value="">Select place of birth</option>
                    {HOSPITALS_IN_IKENNE.map((hospital) => (
                      <option key={hospital} value={hospital}>
                        {hospital}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.gender}
                    onChange={(e) => updateFormData("gender", e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}
        {/* Step 2: Mother's Information */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Mother&apos;s Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.motherFirstName}
                    onChange={(e) =>
                      updateFormData("motherFirstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.motherMiddleName}
                    onChange={(e) =>
                      updateFormData("motherMiddleName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.motherLastName}
                    onChange={(e) =>
                      updateFormData("motherLastName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maiden Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.motherMaidenName}
                    onChange={(e) =>
                      updateFormData("motherMaidenName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    className="input"
                    value={formData.motherDOB}
                    onChange={(e) =>
                      updateFormData("motherDOB", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.motherNationality}
                    onChange={(e) =>
                      updateFormData("motherNationality", e.target.value)
                    }
                  >
                    {NATIONALITIES.map((nat) => (
                      <option key={nat} value={nat}>
                        {nat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occupation
                  </label>
                  <select
                    className="input"
                    value={formData.motherOccupation}
                    onChange={(e) =>
                      updateFormData("motherOccupation", e.target.value)
                    }
                  >
                    <option value="">Select occupation</option>
                    {OCCUPATIONS.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  value={formData.motherAddress}
                  onChange={(e) =>
                    updateFormData("motherAddress", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="input"
                  value={formData.motherPhone}
                  onChange={(e) =>
                    updateFormData("motherPhone", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}
        {/* Step 3: Father's Information */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Father&apos;s Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.fatherFirstName}
                    onChange={(e) =>
                      updateFormData("fatherFirstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    value={formData.fatherMiddleName}
                    onChange={(e) =>
                      updateFormData("fatherMiddleName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.fatherLastName}
                    onChange={(e) =>
                      updateFormData("fatherLastName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    className="input"
                    value={formData.fatherDOB}
                    onChange={(e) =>
                      updateFormData("fatherDOB", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.fatherNationality}
                    onChange={(e) =>
                      updateFormData("fatherNationality", e.target.value)
                    }
                  >
                    {NATIONALITIES.map((nat) => (
                      <option key={nat} value={nat}>
                        {nat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <select
                  className="input"
                  value={formData.fatherOccupation}
                  onChange={(e) =>
                    updateFormData("fatherOccupation", e.target.value)
                  }
                >
                  <option value="">Select occupation</option>
                  {OCCUPATIONS.map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  value={formData.fatherAddress}
                  onChange={(e) =>
                    updateFormData("fatherAddress", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="input"
                  value={formData.fatherPhone}
                  onChange={(e) =>
                    updateFormData("fatherPhone", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}
        {/* Step 4: Applicant Information */}
        {currentStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Applicant&apos;s Information
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.applicantName}
                    onChange={(e) =>
                      updateFormData("applicantName", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.applicantRelationship}
                    onChange={(e) =>
                      updateFormData("applicantRelationship", e.target.value)
                    }
                  >
                    {RELATIONSHIPS.map((rel) => (
                      <option key={rel} value={rel}>
                        {rel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.applicantEmail}
                    onChange={(e) =>
                      updateFormData("applicantEmail", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phonenuber *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.applicantPhone}
                    onChange={(e) =>
                      updateFormData("applicantPhone", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.applicantAddress}
                    onChange={(e) =>
                      updateFormData("applicantAddress", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Applicant Information */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Processing & Delivery Options
            </h2>
            <p className="text-gray-600 mb-6">
              Choose your preferred processing speed and delivery method
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Processing Speed *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      value: "standard",
                      label: "Standard",
                      days: "14 days",
                      price: 3000,
                    },
                    {
                      value: "express",
                      label: "Express",
                      days: "3 days",
                      price: 6000,
                    },
                    {
                      value: "urgent",
                      label: "Urgent",
                      days: "24 hours",
                      price: 12000,
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      onClick={() =>
                        updateFormData("processingType", option.value)
                      }
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.processingType === option.value
                          ? "border-gray-700 bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold text-lg mb-1">
                          {option.label}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {option.days}
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          ₦{option.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Delivery Method *
                </label>
                <div className="space-y-3">
                  {[
                    {
                      value: "collection",
                      label: "Self Collection",
                      desc: "Collect from Ikenne LGA Office (FREE)",
                    },
                    {
                      value: "postal",
                      label: "Postal Delivery",
                      desc: "Delivered to your address (+₦1,500)",
                    },
                    {
                      value: "digital",
                      label: "Digital Only",
                      desc: "Secure digital copy via email (FREE)",
                    },
                  ].map((option) => (
                    <div
                      key={option.value}
                      onClick={() =>
                        updateFormData("deliveryMethod", option.value)
                      }
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.deliveryMethod === option.value
                          ? "border-gray-700 bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={formData.deliveryMethod === option.value}
                          onChange={() => {}}
                          className="h-4 w-4 text-gray-600"
                        />
                        <div className="ml-3">
                          <p className="font-semibold text-gray-900">
                            {option.label}
                          </p>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {formData.deliveryMethod === "postal" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="input"
                    placeholder="Enter complete delivery address"
                    value={formData.deliveryAddress}
                    onChange={(e) =>
                      updateFormData("deliveryAddress", e.target.value)
                    }
                  />
                </div>
              )}

              {/* Payment Summary */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Payment Summary
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Processing Fee:</span>
                    <span className="font-medium">
                      ₦
                      {formData.processingType === "standard"
                        ? "3,000"
                        : formData.processingType === "express"
                        ? "6,000"
                        : "12,000"}
                    </span>
                  </div>
                  {formData.deliveryMethod === "postal" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span className="font-medium">₦1,500</span>
                    </div>
                  )}
                  <div className="border-t border-gray-300 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">
                        Total Amount:
                      </span>
                      <span className="font-bold text-xl text-gray-900">
                        ₦
                        {(
                          (formData.processingType === "standard"
                            ? 3000
                            : formData.processingType === "express"
                            ? 6000
                            : 12000) +
                          (formData.deliveryMethod === "postal" ? 1500 : 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Review & Submit
              </button>
            </div>
          </div>
        )}
        {/* {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Processing Info
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Processing Type *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.processingType}
                    onChange={(e) =>
                      updateFormData("processingType", e.target.value)
                    }
                  >
                    {PROCESSING_TYPE.map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Method *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.deliveryMethod}
                    onChange={(e) =>
                      updateFormData("deliveryMethod", e.target.value)
                    }
                  >
                    {DELIVERY_METHOD.map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    className="input"
                    value={formData.deliveryAddress}
                    onChange={(e) =>
                      updateFormData("deliveryAddress", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )} */}
        {/* Additional steps would follow the same pattern... */}
        {/* For brevity, I'll show the final step */}
        {currentStep === 6 && (
          <div>
            <div className="text-center mb-8">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Submitted!
              </h2>
              <p className="text-gray-600">
                Your application number is:{" "}
                <strong className="text-blue-600">
                  BC-2024-{Math.floor(Math.random() * 1000)}
                </strong>
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                What&apos;s Next?
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>
                  • We&apos;ll review your application within 1-2 business days
                </li>
                <li>
                  • You&apos;ll receive email/SMS updates on your application
                  status
                </li>
                <li>• Complete payment once application is approved</li>
                <li>
                  • Your certificate will be processed based on selected
                  timeline
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="/vital-records/track"
                className="flex-1 btn btn-primary text-center"
              >
                Track Application
              </a>
              <a
                href="/vital-records"
                className="flex-1 btn btn-secondary text-center"
              >
                Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
