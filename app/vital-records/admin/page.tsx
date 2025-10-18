// src/app/vital-records/admin/page.tsx
"use client";
import { useState } from "react";
import {
  FileText,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  mockAdminStats,
  mockBirthApplications,
  mockDeathApplications,
} from "@/lib/vitalRecordsMockData";

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState<"all" | "birth" | "death">(
    "all"
  );
  const [statusFilter, setStatusFilter] = useState("all");

  const allApplications = [...mockBirthApplications, ...mockDeathApplications];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Vital Records Admin
                </h1>
                <p className="text-xs text-gray-600">Ikenne LGA</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">
                  Total Applications
                </p>
                <p className="text-3xl font-bold mt-2">
                  {mockAdminStats.totalApplications.total}
                </p>
                <p className="text-white/70 text-sm mt-1">
                  Birth: {mockAdminStats.totalApplications.birth} | Death:{" "}
                  {mockAdminStats.totalApplications.death}
                </p>
              </div>
              <FileText className="h-8 w-8 text-white/80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">
                  Pending Review
                </p>
                <p className="text-3xl font-bold mt-2">
                  {mockAdminStats.pending}
                </p>
                <p className="text-white/70 text-sm mt-1">Requires attention</p>
              </div>
              <Clock className="h-8 w-8 text-white/80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">
                  Revenue This Month
                </p>
                <p className="text-3xl font-bold mt-2">
                  ₦{(mockAdminStats.revenueThisMonth / 1000).toFixed(0)}k
                </p>
                <p className="text-white/70 text-sm mt-1">
                  +12% from last month
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-white/80" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">
                  Avg. Processing Time
                </p>
                <p className="text-3xl font-bold mt-2">
                  {mockAdminStats.averageProcessingTime} days
                </p>
                <p className="text-white/70 text-sm mt-1">Below target</p>
              </div>
              <TrendingUp className="h-8 w-8 text-white/80" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by application number, name..."
                className="input pl-10"
              />
            </div>

            <div className="flex gap-4">
              <select
                className="input"
                value={selectedTab}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e) => setSelectedTab(e.target.value as any)}
              >
                <option value="all">All Applications</option>
                <option value="birth">Birth Certificates</option>
                <option value="death">Death Certificates</option>
              </select>

              <select
                className="input"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="submitted">Submitted</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="issued">Issued</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Applications
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {app.applicationNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          app.applicationType === "birth"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {app.applicationType === "birth" ? "Birth" : "Death"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.applicantInfo.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.submittedDate
                        ? new Date(app.submittedDate).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          app.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : app.status === "under_review"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {app.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Eye className="h-4 w-4" />
                      </button>
                      {app.status === "under_review" && (
                        <>
                          <button className="text-green-600 hover:text-green-900 mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">10</span> of{" "}
              <span className="font-medium">{allApplications.length}</span>{" "}
              results
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary">Previous</button>
              <button className="btn btn-secondary">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
