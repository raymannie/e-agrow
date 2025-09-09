"use client";
import { BUSINESS_TYPES } from "@/lib/constant";

interface BuyerDetailsFormProps {
  formData: {
    businessType: string;
    businessName: string;
    buyingNeeds: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BuyerDetailsForm({
  formData,
  onChange,
  onNext,
  onBack,
}: BuyerDetailsFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Business Information
        </h2>
        <p className="text-gray-600">Help us understand your buying needs</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type *
          </label>
          <select
            required
            className="input"
            value={formData.businessType}
            onChange={(e) => onChange("businessType", e.target.value)}
          >
            <option value="">Select business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {formData.businessType && formData.businessType !== "individual" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              required={formData.businessType !== "individual"}
              className="input"
              placeholder="Enter your business name"
              value={formData.businessName}
              onChange={(e) => onChange("businessName", e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tell us about your buying needs
          </label>
          <textarea
            rows={4}
            className="input"
            placeholder="What products are you looking to buy? How often? Any specific requirements..."
            value={formData.buyingNeeds}
            onChange={(e) => onChange("buyingNeeds", e.target.value)}
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
