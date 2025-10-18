// src/app/vital-records/apply/death/page.tsx
"use client";
import { FileText } from "lucide-react";
import Link from "next/link";
import DeathCertificateForm from "@/components/vital-records/DeathCertificateForm";

export default function DeathApplicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link
          href="/vital-records"
          className="text-gray-600 hover:text-gray-900 text-sm mb-4 inline-block"
        >
          ← Back to Vital Records Home
        </Link>
        <div className="flex items-center justify-center">
          <FileText className="h-10 w-10 text-gray-700 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Death Certificate Application
            </h1>
            <p className="text-gray-600">
              Please complete all steps with accurate information
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">
                <strong>Important:</strong> Death must be reported within 30
                days. Late registration may require additional documentation and
                approval. A medical certificate of death from a licensed
                physician is mandatory.
              </p>
            </div>
          </div>
        </div>
      </div>

      <DeathCertificateForm />
    </div>
  );
}
