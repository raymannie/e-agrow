// src/app/vital-records/page.tsx
import Link from "next/link";
import {
  FileText,
  Search,
  Shield,
  Clock,
  CheckCircle,
  Download,
} from "lucide-react";

export default function VitalRecordsHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Digital Vital Records
                </h1>
                <p className="text-xs text-gray-600">Ikenne LGA</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
              <Link
                href="#verification"
                className="text-gray-700 hover:text-blue-600"
              >
                Verify Certificate
              </Link>
              <Link
                href="/vital-records/track"
                className="text-gray-700 hover:text-blue-600"
              >
                Track Application
              </Link>
              <Link href="/vital-records/apply" className="btn btn-primary">
                Apply Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Apply for Birth & Death Certificates
            <span className="text-blue-600"> Online</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fast, secure, and convenient digital services for vital records in
            Ikenne Local Government Area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vital-records/apply/birth"
              className="btn btn-primary text-lg px-8 py-4"
            >
              <FileText className="mr-2 h-5 w-5" />
              Apply for Birth Certificate
            </Link>
            <Link
              href="/vital-records/apply/death"
              className="btn btn-secondary text-lg px-8 py-4"
            >
              <FileText className="mr-2 h-5 w-5" />
              Apply for Death Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Digital Service?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
              <p className="text-gray-600">
                Get your certificate in as little as 24 hours with our urgent
                processing option
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Application</h3>
              <p className="text-gray-600">
                Simple online forms with step-by-step guidance and document
                upload
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Verified</h3>
              <p className="text-gray-600">
                Blockchain-backed verification system ensures authenticity
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Copies</h3>
              <p className="text-gray-600">
                Receive secure digital copies immediately upon approval
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose the processing speed that works for you
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Birth Certificate Pricing */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Birth Certificate</h3>
                <p className="text-blue-100">
                  Official birth registration document
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-semibold">Standard Processing</p>
                    <p className="text-sm text-gray-600">14 working days</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">₦2,500</p>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-semibold">Express Processing</p>
                    <p className="text-sm text-gray-600">3 working days</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">₦5,000</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-semibold">Urgent Processing</p>
                    <p className="text-sm text-gray-600">24 hours</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">₦10,000</p>
                </div>
                <Link
                  href="/vital-records/apply/birth"
                  className="block w-full btn btn-primary text-center mt-6"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Death Certificate Pricing */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Death Certificate</h3>
                <p className="text-gray-300">
                  Official death registration document
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-semibold">Standard Processing</p>
                    <p className="text-sm text-gray-600">14 working days</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-700">₦3,000</p>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-semibold">Express Processing</p>
                    <p className="text-sm text-gray-600">3 working days</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-700">₦6,000</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-semibold">Urgent Processing</p>
                    <p className="text-sm text-gray-600">24 hours</p>
                  </div>
                  <p className="text-2xl font-bold text-gray-700">₦12,000</p>
                </div>
                <Link
                  href="/vital-records/apply/death"
                  className="block w-full btn btn-secondary text-center mt-6"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verification" className="py-20 bg-white/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <Search className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Verify Certificate
            </h2>
            <p className="text-gray-600">
              Enter certificate number to verify authenticity
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certificate Number
                </label>
                <input
                  type="text"
                  placeholder="e.g., BC/IKN/2024/001 or DC/IKN/2024/001"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Certificate Type
                </label>
                <select className="input">
                  <option value="">Select certificate type</option>
                  <option value="birth">Birth Certificate</option>
                  <option value="death">Death Certificate</option>
                </select>
              </div>
              <button type="submit" className="w-full btn btn-primary text-lg">
                <Shield className="mr-2 h-5 w-5" />
                Verify Certificate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Track Application Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <Search className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Track Your Application
            </h2>
            <p className="text-gray-600">
              Check the status of your certificate application
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Number
                </label>
                <input
                  type="text"
                  placeholder="e.g., BC-2024-001 or DC-2024-001"
                  className="input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your email or phone"
                  className="input"
                />
              </div>
              <button type="submit" className="w-full btn btn-primary text-lg">
                <Search className="mr-2 h-5 w-5" />
                Track Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Birth Certificate Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-6">
                Birth Certificate
              </h3>
              <ul className="space-y-3">
                {[
                  "Hospital Birth Record",
                  "Parents Marriage Certificate (if applicable)",
                  "Valid ID of both parents",
                  "Passport photographs of child",
                  "Completed application form",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Death Certificate Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-700 mb-6">
                Death Certificate
              </h3>
              <ul className="space-y-3">
                {[
                  "Medical Certificate of Death",
                  "Valid ID of deceased",
                  "Valid ID of informant/next of kin",
                  "Hospital/Medical report",
                  "Burial permit (if applicable)",
                  "Completed application form",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-lg">Digital Vital Records</span>
              </div>
              <p className="text-gray-400">
                Ikenne Local Government Area&apos;s digital platform for birth
                and death certificate services.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/vital-records/apply"
                    className="hover:text-white"
                  >
                    Apply for Certificate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vital-records/track"
                    className="hover:text-white"
                  >
                    Track Application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vital-records/verify"
                    className="hover:text-white"
                  >
                    Verify Certificate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p>Ikenne Local Government Secretariat</p>
                <p>Ogun State, Nigeria</p>
                <p>vitalrecords@ikennelga.gov.ng</p>
                <p>+234 80 1234 5678</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Ikenne LGA Digital Vital Records. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
