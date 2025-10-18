// src/app/vital-records/apply/page.tsx
"use client";
import Link from "next/link";
import { FileText, Users, ClipboardList } from "lucide-react";

export default function ApplySelectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Select Certificate Type
          </h1>
          <p className="text-gray-600">
            Choose the type of certificate you want to apply for
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Birth Certificate */}
          <Link href="/vital-records/apply/birth" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Birth Certificate
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Apply for official birth registration certificate
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ For newborns and delayed registration</p>
                <p>✓ Required for school enrollment</p>
                <p>✓ National identity documentation</p>
                <p className="font-semibold text-blue-600 pt-4">From ₦2,500</p>
              </div>
            </div>
          </Link>

          {/* Death Certificate */}
          <Link href="/vital-records/apply/death" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-300 transition-colors">
                <ClipboardList className="h-10 w-10 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">
                Death Certificate
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Apply for official death registration certificate
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ Required for estate settlement</p>
                <p>✓ Insurance claims processing</p>
                <p>✓ Legal documentation</p>
                <p className="font-semibold text-gray-700 pt-4">From ₦3,000</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/vital-records"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
