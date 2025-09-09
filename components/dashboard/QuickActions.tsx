"use client";
import { Plus, Eye, DollarSign, Settings } from "lucide-react";

interface QuickActionsProps {
  userType: "farmer" | "buyer";
}

export default function QuickActions({ userType }: QuickActionsProps) {
  const farmerActions = [
    {
      icon: Plus,
      label: "Add New Product",
      href: "/dashboard/farmer/products/new",
      color: "bg-green-600",
    },
    {
      icon: Eye,
      label: "View All Orders",
      href: "/dashboard/farmer/orders",
      color: "bg-blue-600",
    },
    {
      icon: DollarSign,
      label: "Withdraw Earnings",
      href: "/dashboard/farmer/earnings",
      color: "bg-orange-600",
    },
    {
      icon: Settings,
      label: "Update Profile",
      href: "/dashboard/farmer/profile",
      color: "bg-gray-600",
    },
  ];

  const buyerActions = [
    {
      icon: Eye,
      label: "Browse Products",
      href: "/marketplace",
      color: "bg-green-600",
    },
    {
      icon: Plus,
      label: "My Orders",
      href: "/dashboard/buyer/orders",
      color: "bg-blue-600",
    },
    {
      icon: DollarSign,
      label: "Payment Methods",
      href: "/dashboard/buyer/payments",
      color: "bg-orange-600",
    },
    {
      icon: Settings,
      label: "Update Profile",
      href: "/dashboard/buyer/profile",
      color: "bg-gray-600",
    },
  ];

  const actions = userType === "farmer" ? farmerActions : buyerActions;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
