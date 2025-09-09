"use client";

import { WARDS } from "@/lib/constant";

interface BasicInfoFormProps {
  formData: {
    name: string;
    phone: string;
    email: string;
    ward: string;
    location: string;
    password: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function BasicInfoForm({
  formData,
  onChange,
  onNext,
  onBack,
}: BasicInfoFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const wards = [
    "All Locations",
    "Ward 1",
    "Ward 2",
    "Ward 3",
    "Ward 4",
    "Ward 5",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Basic Information
        </h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="input"
              placeholder="Enter fullname"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="text"
              required
              className="input"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => onChange("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="text"
              required
              className="input"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Create Password *
            </label>
            <input
              type="password"
              required
              className="input"
              placeholder="Choose a secure password"
              value={formData.password}
              onChange={(e) => onChange("password", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <input
            type="text"
            required
            className="input"
            placeholder="Street address or landmark"
            value={formData.location}
            onChange={(e) => onChange("location", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ward *
          </label>
          <select
            className="input"
            value={formData.ward}
            onChange={(e) => onChange("ward", e.target.value)}
          >
            {wards.map((ward) => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
          ;
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
