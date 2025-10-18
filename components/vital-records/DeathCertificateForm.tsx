// src/components/vital-records/DeathCertificateForm.tsx
"use client";
import { useState } from "react";
import {
  WARDS,
  HOSPITALS_IN_IKENNE,
  NATIONALITIES,
  OCCUPATIONS,
  RELATIONSHIPS,
} from "@/lib/vitalRecordsConstants";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";

interface DeathFormData {
  // Deceased information
  deceasedFirstName: string;
  deceasedMiddleName: string;
  deceasedLastName: string;
  deceasedDOB: string;
  deceasedDOD: string;
  deceasedAge: string;
  deceasedGender: string;
  deceasedMaritalStatus: string;
  deceasedNationality: string;
  deceasedOccupation: string;
  deceasedAddress: string;

  // Death information
  placeOfDeath: string;
  placeType: string;
  timeOfDeath: string;
  causeOfDeath: string;
  mannerOfDeath: string;
  attendingPhysician: string;
  medicalFacility: string;

  // Informant information
  informantName: string;
  informantRelationship: string;
  informantEmail: string;
  informantPhone: string;
  informantAddress: string;
  informantIdNumber: string;

  // Applicant information (if different from informant)
  sameAsInformant: boolean;
  applicantName: string;
  applicantRelationship: string;
  applicantEmail: string;
  applicantPhone: string;
  applicantAddress: string;

  // Processing options
  processingType: string;
  deliveryMethod: string;
  deliveryAddress: string;
}

export default function DeathCertificateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DeathFormData>({
    deceasedFirstName: "",
    deceasedMiddleName: "",
    deceasedLastName: "",
    deceasedDOB: "",
    deceasedDOD: "",
    deceasedAge: "",
    deceasedGender: "",
    deceasedMaritalStatus: "",
    deceasedNationality: "Nigerian",
    deceasedOccupation: "",
    deceasedAddress: "",
    placeOfDeath: "",
    placeType: "",
    timeOfDeath: "",
    causeOfDeath: "",
    mannerOfDeath: "",
    attendingPhysician: "",
    medicalFacility: "",
    informantName: "",
    informantRelationship: "",
    informantEmail: "",
    informantPhone: "",
    informantAddress: "",
    informantIdNumber: "",
    sameAsInformant: true,
    applicantName: "",
    applicantRelationship: "",
    applicantEmail: "",
    applicantPhone: "",
    applicantAddress: "",
    processingType: "standard",
    deliveryMethod: "collection",
    deliveryAddress: "",
  });

  const [uploadedDocuments, setUploadedDocuments] = useState<{
    medicalCertificate: boolean;
    hospitalReport: boolean;
    deceasedId: boolean;
    informantId: boolean;
    burialPermit: boolean;
  }>({
    medicalCertificate: false,
    hospitalReport: false,
    deceasedId: false,
    informantId: false,
    burialPermit: false,
  });

  const updateFormData = (
    field: keyof DeathFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const totalSteps = 7;

  // Calculate age based on DOB and DOD
  const calculateAge = (dob: string, dod: string) => {
    if (!dob || !dod) return "";
    const birthDate = new Date(dob);
    const deathDate = new Date(dod);
    const age = deathDate.getFullYear() - birthDate.getFullYear();
    return age.toString();
  };

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
                    ? "bg-gray-700 text-white"
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
        {/* Step 1: Deceased Information */}
        {currentStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Deceased Information
            </h2>
            <p className="text-gray-600 mb-6">
              Please provide accurate details about the deceased person
            </p>

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
                    value={formData.deceasedFirstName}
                    onChange={(e) =>
                      updateFormData("deceasedFirstName", e.target.value)
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
                    value={formData.deceasedMiddleName}
                    onChange={(e) =>
                      updateFormData("deceasedMiddleName", e.target.value)
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
                    value={formData.deceasedLastName}
                    onChange={(e) =>
                      updateFormData("deceasedLastName", e.target.value)
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
                    value={formData.deceasedDOB}
                    onChange={(e) => {
                      updateFormData("deceasedDOB", e.target.value);
                      if (formData.deceasedDOD) {
                        updateFormData(
                          "deceasedAge",
                          calculateAge(e.target.value, formData.deceasedDOD)
                        );
                      }
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Death *
                  </label>
                  <input
                    type="date"
                    required
                    className="input"
                    value={formData.deceasedDOD}
                    onChange={(e) => {
                      updateFormData("deceasedDOD", e.target.value);
                      if (formData.deceasedDOB) {
                        updateFormData(
                          "deceasedAge",
                          calculateAge(formData.deceasedDOB, e.target.value)
                        );
                      }
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age at Death *
                  </label>
                  <input
                    type="number"
                    required
                    className="input"
                    value={formData.deceasedAge}
                    onChange={(e) =>
                      updateFormData("deceasedAge", e.target.value)
                    }
                    readOnly={
                      formData.deceasedDOB && formData.deceasedDOD
                        ? true
                        : false
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.deceasedGender}
                    onChange={(e) =>
                      updateFormData("deceasedGender", e.target.value)
                    }
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marital Status *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.deceasedMaritalStatus}
                    onChange={(e) =>
                      updateFormData("deceasedMaritalStatus", e.target.value)
                    }
                  >
                    <option value="">Select status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
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
                    value={formData.deceasedNationality}
                    onChange={(e) =>
                      updateFormData("deceasedNationality", e.target.value)
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
                    value={formData.deceasedOccupation}
                    onChange={(e) =>
                      updateFormData("deceasedOccupation", e.target.value)
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
                  Last Residential Address *
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  placeholder="Enter complete residential address"
                  value={formData.deceasedAddress}
                  onChange={(e) =>
                    updateFormData("deceasedAddress", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button onClick={nextStep} className="btn btn-primary">
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Death Details */}
        {currentStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Death Details
            </h2>
            <p className="text-gray-600 mb-6">
              Information about the circumstances of death
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place of Death *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.placeOfDeath}
                    onChange={(e) =>
                      updateFormData("placeOfDeath", e.target.value)
                    }
                  >
                    <option value="">Select place</option>
                    {HOSPITALS_IN_IKENNE.map((place) => (
                      <option key={place} value={place}>
                        {place}
                      </option>
                    ))}
                    <option value="other">Other Location</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Place *
                  </label>
                  <select
                    required
                    className="input"
                    value={formData.placeType}
                    onChange={(e) =>
                      updateFormData("placeType", e.target.value)
                    }
                  >
                    <option value="">Select type</option>
                    <option value="hospital">Hospital/Medical Facility</option>
                    <option value="home">Home</option>
                    <option value="nursing_home">Nursing Home</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time of Death
                </label>
                <input
                  type="time"
                  className="input"
                  value={formData.timeOfDeath}
                  onChange={(e) =>
                    updateFormData("timeOfDeath", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Manner of Death *
                </label>
                <select
                  required
                  className="input"
                  value={formData.mannerOfDeath}
                  onChange={(e) =>
                    updateFormData("mannerOfDeath", e.target.value)
                  }
                >
                  <option value="">Select manner</option>
                  <option value="natural">Natural Causes</option>
                  <option value="accident">Accident</option>
                  <option value="suicide">Suicide</option>
                  <option value="homicide">Homicide</option>
                  <option value="pending">Pending Investigation</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cause of Death *
                </label>
                <textarea
                  required
                  rows={4}
                  className="input"
                  placeholder="Describe the immediate cause of death (e.g., Cardiac arrest, complications from diabetes, etc.)"
                  value={formData.causeOfDeath}
                  onChange={(e) =>
                    updateFormData("causeOfDeath", e.target.value)
                  }
                />
                <p className="text-sm text-gray-500 mt-1">
                  This information should match the medical certificate of death
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attending Physician
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Dr. Full Name"
                    value={formData.attendingPhysician}
                    onChange={(e) =>
                      updateFormData("attendingPhysician", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Facility
                  </label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Hospital or clinic name"
                    value={formData.medicalFacility}
                    onChange={(e) =>
                      updateFormData("medicalFacility", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-amber-800">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>
                      A medical certificate of death from a licensed physician
                      is required. If death occurred without medical attention,
                      contact the local health authority.
                    </p>
                  </div>
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

        {/* Step 3: Informant Information */}
        {currentStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Informant Information
            </h2>
            <p className="text-gray-600 mb-6">
              Person providing information about the death (usually next of kin)
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="input"
                  value={formData.informantName}
                  onChange={(e) =>
                    updateFormData("informantName", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to Deceased *
                </label>
                <select
                  required
                  className="input"
                  value={formData.informantRelationship}
                  onChange={(e) =>
                    updateFormData("informantRelationship", e.target.value)
                  }
                >
                  <option value="">Select relationship</option>
                  {RELATIONSHIPS.map((rel) => (
                    <option key={rel} value={rel}>
                      {rel}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="input"
                    value={formData.informantEmail}
                    onChange={(e) =>
                      updateFormData("informantEmail", e.target.value)
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
                    placeholder="080XXXXXXXX"
                    value={formData.informantPhone}
                    onChange={(e) =>
                      updateFormData("informantPhone", e.target.value)
                    }
                  />
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
                  value={formData.informantAddress}
                  onChange={(e) =>
                    updateFormData("informantAddress", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number (NIN/Driver&apos;s License/Passport)
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter identification number"
                  value={formData.informantIdNumber}
                  onChange={(e) =>
                    updateFormData("informantIdNumber", e.target.value)
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Applicant Information
            </h2>
            <p className="text-gray-600 mb-6">
              Person applying for the death certificate
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sameAsInformant"
                  checked={formData.sameAsInformant}
                  onChange={(e) =>
                    updateFormData("sameAsInformant", e.target.checked)
                  }
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="sameAsInformant"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Applicant is the same as informant
                </label>
              </div>

              {!formData.sameAsInformant && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required={!formData.sameAsInformant}
                      className="input"
                      value={formData.applicantName}
                      onChange={(e) =>
                        updateFormData("applicantName", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relationship to Deceased *
                    </label>
                    <select
                      required={!formData.sameAsInformant}
                      className="input"
                      value={formData.applicantRelationship}
                      onChange={(e) =>
                        updateFormData("applicantRelationship", e.target.value)
                      }
                    >
                      <option value="">Select relationship</option>
                      {RELATIONSHIPS.map((rel) => (
                        <option key={rel} value={rel}>
                          {rel}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required={!formData.sameAsInformant}
                        className="input"
                        value={formData.applicantEmail}
                        onChange={(e) =>
                          updateFormData("applicantEmail", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required={!formData.sameAsInformant}
                        className="input"
                        placeholder="080XXXXXXXX"
                        value={formData.applicantPhone}
                        onChange={(e) =>
                          updateFormData("applicantPhone", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      required={!formData.sameAsInformant}
                      className="input"
                      value={formData.applicantAddress}
                      onChange={(e) =>
                        updateFormData("applicantAddress", e.target.value)
                      }
                    />
                  </div>
                </>
              )}
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

        {/* Step 5: Document Upload */}
        {currentStep === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Supporting Documents
            </h2>
            <p className="text-gray-600 mb-6">
              Upload required documents (PDF, JPG, PNG - Max 5MB each)
            </p>

            <div className="space-y-6">
              {[
                {
                  key: "medicalCertificate",
                  label: "Medical Certificate of Death *",
                  required: true,
                },
                {
                  key: "hospitalReport",
                  label: "Hospital/Medical Report",
                  required: false,
                },
                {
                  key: "deceasedId",
                  label: "Valid ID of Deceased *",
                  required: true,
                },
                {
                  key: "informantId",
                  label: "Valid ID of Informant *",
                  required: true,
                },
                {
                  key: "burialPermit",
                  label: "Burial Permit (if applicable)",
                  required: false,
                },
              ].map((doc) => (
                <div
                  key={doc.key}
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      {doc.label}
                    </label>
                    {uploadedDocuments[
                      doc.key as keyof typeof uploadedDocuments
                    ] && <CheckCircle className="h-5 w-5 text-green-600" />}
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      required={doc.required}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setUploadedDocuments((prev) => ({
                            ...prev,
                            [doc.key]: true,
                          }));
                        }
                      }}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                    />
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  📋 Document Requirements:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• All documents must be clear and legible</li>
                  <li>
                    • Medical certificate must be signed by a licensed physician
                  </li>
                  <li>
                    • ID documents must be valid government-issued
                    identification
                  </li>
                  <li>• Maximum file size: 5MB per document</li>
                </ul>
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

        {/* Step 6: Processing & Payment */}
        {currentStep === 6 && (
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

        {/* Step 7: Review & Submit */}
        {currentStep === 7 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Review Your Application
            </h2>
            <p className="text-gray-600 mb-6">
              Please review all information before submitting
            </p>

            <div className="space-y-6">
              {/* Deceased Information Review */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Deceased Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Full Name:</p>
                    <p className="font-medium">{`${formData.deceasedFirstName} ${formData.deceasedMiddleName} ${formData.deceasedLastName}`}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date of Birth:</p>
                    <p className="font-medium">
                      {new Date(formData.deceasedDOB).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date of Death:</p>
                    <p className="font-medium">
                      {new Date(formData.deceasedDOD).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Age at Death:</p>
                    <p className="font-medium">{formData.deceasedAge} years</p>
                  </div>
                </div>
              </div>

              {/* Death Details Review */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Death Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Place of Death:</p>
                    <p className="font-medium">{formData.placeOfDeath}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Manner of Death:</p>
                    <p className="font-medium">{formData.mannerOfDeath}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600">Cause of Death:</p>
                    <p className="font-medium">{formData.causeOfDeath}</p>
                  </div>
                </div>
              </div>

              {/* Informant Information Review */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Informant Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Name:</p>
                    <p className="font-medium">{formData.informantName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Relationship:</p>
                    <p className="font-medium">
                      {formData.informantRelationship}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Phone:</p>
                    <p className="font-medium">{formData.informantPhone}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Email:</p>
                    <p className="font-medium">{formData.informantEmail}</p>
                  </div>
                </div>
              </div>

              {/* Processing & Delivery Review */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Processing & Delivery
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Processing Type:</p>
                    <p className="font-medium capitalize">
                      {formData.processingType}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Delivery Method:</p>
                    <p className="font-medium capitalize">
                      {formData.deliveryMethod}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-600">Total Amount:</p>
                    <p className="font-bold text-lg text-gray-900">
                      ₦
                      {(
                        (formData.processingType === "standard"
                          ? 3000
                          : formData.processingType === "express"
                          ? 6000
                          : 12000) +
                        (formData.deliveryMethod === "postal" ? 1500 : 0)
                      ).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="ml-3 text-sm text-blue-900"
                  >
                    <span className="font-semibold">
                      I hereby declare that:
                    </span>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>
                        All information provided is true and accurate to the
                        best of my knowledge
                      </li>
                      <li>
                        All uploaded documents are authentic and unaltered
                      </li>
                      <li>
                        I understand that providing false information is a
                        criminal offense
                      </li>
                      <li>
                        I agree to the terms and conditions of this service
                      </li>
                    </ul>
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> After submission, you&apos;ll
                    receive a confirmation email with your application number.
                    Payment instructions will be sent once your application is
                    reviewed and approved.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button onClick={prevStep} className="btn btn-secondary">
                Back
              </button>
              <button onClick={nextStep} className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </div>
        )}

        {/* Step 8: Success */}
        {currentStep === 8 && (
          <div>
            <div className="text-center mb-8">
              <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-2">Your application number is:</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                DC-2024-
                {Math.floor(Math.random() * 1000)
                  .toString()
                  .padStart(3, "0")}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-blue-900 mb-3">
                📋 What Happens Next?
              </h4>
              <div className="space-y-3 text-sm text-blue-800">
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-blue-900 font-bold text-xs">1</span>
                  </div>
                  <p>
                    <strong>Application Review (1-2 business days):</strong> Our
                    team will verify all submitted documents and information
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-blue-900 font-bold text-xs">2</span>
                  </div>
                  <p>
                    <strong>Approval & Payment:</strong> Once approved,
                    you&apos;ll receive payment instructions via email and SMS
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-blue-900 font-bold text-xs">3</span>
                  </div>
                  <p>
                    <strong>Certificate Processing:</strong> After payment
                    confirmation, your certificate will be processed based on
                    selected timeline
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-blue-900 font-bold text-xs">4</span>
                  </div>
                  <p>
                    <strong>Collection/Delivery:</strong> You&apos;ll be
                    notified when your certificate is ready for collection or
                    delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">
                ✉️ Confirmation Sent
              </h4>
              <p className="text-sm text-green-800">
                A confirmation email has been sent to{" "}
                <strong>{formData.informantEmail}</strong> with your application
                details and tracking information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/vital-records/track"
                className="btn btn-primary text-center"
              >
                Track Application
              </a>
              <a
                href="/vital-records"
                className="btn btn-secondary text-center"
              >
                Back to Home
              </a>
              <button
                onClick={() => window.print()}
                className="btn btn-secondary"
              >
                Print Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
