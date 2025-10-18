/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/vital-records/track/page.tsx
"use client";
import { useState } from "react";
import { Search, FileText, CheckCircle, Clock, XCircle } from "lucide-react";

export default function TrackApplicationPage() {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock tracking result
    setTrackingResult({
      applicationNumber: "BC-2024-001",
      type: "Birth Certificate",
      status: "under_review",
      applicantName: "Funmilayo Ogunbiyi",
      submittedDate: "2024-10-01",
      estimatedCompletion: "2024-10-15",
      timeline: [
        { status: "submitted", date: "2024-10-01", completed: true },
        { status: "under_review", date: "2024-10-05", completed: true },
        { status: "approved", date: null, completed: false },
        { status: "ready_for_collection", date: null, completed: false },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Track Your Application
          </h1>
          <p className="text-gray-600">
            Enter your application details to check status
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Number *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., BC-2024-001 or DC-2024-001"
                className="input"
                value={applicationNumber}
                onChange={(e) => setApplicationNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Phone Number *
              </label>
              <input
                type="text"
                required
                placeholder="Enter email or phone used in application"
                className="input"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full btn btn-primary text-lg">
              <Search className="mr-2 h-5 w-5" />
              Track Application
            </button>
          </form>
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Application Status
              </h2>
              <p className="text-gray-600">
                Application No:{" "}
                <strong>{trackingResult.applicationNumber}</strong>
              </p>
            </div>

            {/* Status Overview */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-1">Type</p>
                <p className="font-semibold text-blue-900">
                  {trackingResult.type}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-1">Applicant</p>
                <p className="font-semibold text-blue-900">
                  {trackingResult.applicantName}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-1">Submitted</p>
                <p className="font-semibold text-blue-900">
                  {new Date(trackingResult.submittedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 mb-1">Est. Completion</p>
                <p className="font-semibold text-blue-900">
                  {new Date(
                    trackingResult.estimatedCompletion
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Application Progress
              </h3>
              <div className="space-y-6">
                {trackingResult.timeline.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.completed ? "bg-green-100" : "bg-gray-100"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Clock className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <p
                        className={`font-semibold ${
                          step.completed ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {step.status.replace("_", " ").toUpperCase()}
                      </p>
                      {step.date && (
                        <p className="text-sm text-gray-600">
                          {new Date(step.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 btn btn-primary">
                Contact Support
              </button>
              <button className="flex-1 btn btn-secondary">Print Status</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
