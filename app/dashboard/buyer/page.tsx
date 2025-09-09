import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { mockProducts } from "@/lib/mockData";
import { ShoppingCart, DollarSign, Package, Heart } from "lucide-react";

export default function BuyerDashboard() {
  const mockBuyer = {
    name: "Sarah Adebisi",
    totalOrders: 15,
    totalPurchases: 125000,
    activeOrders: 3,
    savedFarmers: 8,
  };

  const recentActivities = [
    {
      id: "1",
      type: "order" as const,
      description: "Order confirmed: 100kg Premium Cassava from Mary Farm",
      time: "1 hour ago",
      status: "success" as const,
    },
    {
      id: "2",
      type: "payment" as const,
      description: "Payment successful: ₦35,000 for Rubber Latex order",
      time: "3 hours ago",
      status: "success" as const,
    },
    {
      id: "3",
      type: "order" as const,
      description: "Order delivered: 25kg Fresh Yam Tubers",
      time: "1 day ago",
      status: "success" as const,
    },
    {
      id: "4",
      type: "message" as const,
      description: "New message from farmer about bulk discount",
      time: "2 days ago",
      status: "pending" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName={mockBuyer.name} userType="buyer" />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {mockBuyer.name}! 🛒
          </h1>
          <p className="text-gray-600">
            Discover fresh products from local farmers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Orders"
            value={mockBuyer.activeOrders}
            subtitle="In progress"
            icon={<ShoppingCart className="h-6 w-6" />}
            color="green"
          />
          <StatCard
            title="Total Purchases"
            value={`₦${mockBuyer.totalPurchases.toLocaleString()}`}
            subtitle="All time spending"
            icon={<DollarSign className="h-6 w-6" />}
            color="blue"
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Completed Orders"
            value={mockBuyer.totalOrders}
            subtitle="Successfully delivered"
            icon={<Package className="h-6 w-6" />}
            color="orange"
          />
          <StatCard
            title="Saved Farmers"
            value={mockBuyer.savedFarmers}
            subtitle="Trusted suppliers"
            icon={<Heart className="h-6 w-6" />}
            color="purple"
          />
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Find Products
          </h3>
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 min-w-64 input"
            />
            <select className="input w-40">
              <option>All Categories</option>
              <option>Rubber</option>
              <option>Cassava</option>
              <option>Yam</option>
              <option>Maize</option>
            </select>
            <select className="input w-40">
              <option>All Locations</option>
              <option>Ward 1</option>
              <option>Ward 2</option>
              <option>Ward 3</option>
              <option>Ward 4</option>
            </select>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions userType="buyer" />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        {/* Recommended Products */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recommended for You
            </h3>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Browse All Products
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl text-white opacity-70">📸</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  by {product.farmerName}
                </p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold text-green-600">
                    ₦{product.price.toLocaleString()}/{product.unit}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">⭐</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  📍 {product.location}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 btn btn-primary text-sm">
                    Add to Cart
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
