import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { mockFarmer, mockProducts, mockOrders } from "@/lib/mockData";
import { Package, DollarSign, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export default function FarmerDashboard() {
  const recentActivities = [
    {
      id: "1",
      type: "order" as const,
      description: "New order for 50kg Fresh Rubber Latex from John Buyer",
      time: "2 hours ago",
      status: "pending" as const,
    },
    {
      id: "2",
      type: "payment" as const,
      description: "Payment received: ₦15,000 for Cassava order",
      time: "4 hours ago",
      status: "success" as const,
    },
    {
      id: "3",
      type: "view" as const,
      description:
        'Your product "Fresh Rubber Latex" was viewed 23 times today',
      time: "6 hours ago",
    },
    {
      id: "4",
      type: "message" as const,
      description: "New message from buyer about Yam availability",
      time: "1 day ago",
      status: "pending" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName={mockFarmer.name} userType="farmer" />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {mockFarmer.name}! 👋
          </h1>
          <p className="text-gray-600">
            Here&apos;s what&apos;s happening with your farm today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Products"
            value={12}
            subtitle="Products listed"
            icon={<Package className="h-6 w-6" />}
            color="green"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="This Month Sales"
            value="₦45,000"
            subtitle="Revenue generated"
            icon={<DollarSign className="h-6 w-6" />}
            color="blue"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Pending Orders"
            value={8}
            subtitle="Orders to fulfill"
            icon={<ShoppingCart className="h-6 w-6" />}
            color="orange"
          />
          <StatCard
            title="Rating"
            value="4.8★"
            subtitle="Based on 24 reviews"
            icon={<Star className="h-6 w-6" />}
            color="purple"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions userType="farmer" />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        {/* Recent Products */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Your Recent Products
              </h3>
              <button className="text-green-600 hover:text-green-700 font-medium">
                View All Products
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt="image"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-green-600">
                      ₦{product.price.toLocaleString()}/{product.unit}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {product.availableQuantity}
                    {product.unit} available
                  </p>
                  <button className="w-full btn btn-secondary text-sm">
                    Edit Product
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
