"use client";
import { CROP_TYPES } from "@/lib/constant";

interface FarmerDetailsFormProps {
  formData: {
    farmName: string;
    farmSize: string;
    primaryCrop: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function FarmerDetailsForm({
  formData,
  onChange,
  onNext,
  onBack,
}: FarmerDetailsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Farm Information
        </h2>
        <p className="text-gray-600">Tell us about your farm</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Farm Name *
          </label>
          <input
            type="text"
            required
            className="input"
            placeholder="e.g., Adebayo Farms"
            value={formData.farmName}
            onChange={(e) => onChange("farmName", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Farm Size (hectares) *
          </label>
          <input
            type="number"
            step="0.1"
            min="0.1"
            required
            className="input"
            placeholder="e.g., 2.5"
            value={formData.farmSize}
            onChange={(e) => onChange("farmSize", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Crop Type *
          </label>
          <select
            required
            className="input"
            value={formData.primaryCrop}
            onChange={(e) => onChange("primaryCrop", e.target.value)}
          >
            <option value="">Select primary crop</option>
            {CROP_TYPES.map((crop) => (
              <option key={crop} value={crop}>
                {crop}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">
            📋 Optional: Farm Verification
          </h4>

          <p className="text-sm text-blue-700 mb-3">
            Upload your farm certificate or identification document to get
            verified status and build trust with buyers.
          </p>

          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <div className="flex justify-between pt-6">
          <button type="button" onClick={onBack} className="btn btn-secondary">
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
