// src/app/vital-records/apply/birth/page.tsx
"use client";
import { FileText } from "lucide-react";
import BirthCertificateForm from "@/components/vital-records/BirthCertificateForm";

export default function BirthApplicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <FileText className="h-10 w-10 text-blue-600 mr-3" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Birth Certificate Application
            </h1>
            <p className="text-gray-600">
              Please fill all required information accurately
            </p>
          </div>
        </div>

        <BirthCertificateForm />
      </div>
    </div>
  );
}
