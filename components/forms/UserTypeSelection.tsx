"use client";
import { Tractor, ShoppingCart } from "lucide-react";

interface UserTypeSelectionProps {
  selectedType: "farmer" | "buyer" | null;
  onTypeSelect: (type: "farmer" | "buyer") => void;
  onNext: () => void;
}

export default function UserTypeSelection({
  selectedType,
  onTypeSelect,
  onNext,
}: UserTypeSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to E-Agro Marketplace
        </h2>
        <p className="text-gray-600">Choose your role to get started</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div
          onClick={() => onTypeSelect("farmer")}
          className={`
            cursor-pointer p-8 rounded-2xl border-2 transition-all hover:shadow-lg
            ${
              selectedType === "farmer"
                ? "border-green-500 bg-green-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-green-300"
            }
          `}
        >
          <div className="text-center">
            <div
              className={`
              w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
              ${selectedType === "farmer" ? "bg-green-100" : "bg-gray-100"}
            `}
            >
              <Tractor
                className={`h-10 w-10 ${
                  selectedType === "farmer" ? "text-green-600" : "text-gray-600"
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Im a Farmer/Producer</h3>
            <p className="text-gray-600">
              Sell your agricultural products directly to buyers and grow your
              business
            </p>
            <ul className="text-sm text-gray-500 mt-4 text-left">
              <li>• List your products online</li>
              <li>• Reach more customers</li>
              <li>• Track your sales</li>
              <li>• Get better prices</li>
            </ul>
          </div>
        </div>

        <div
          onClick={() => onTypeSelect("buyer")}
          className={`
            cursor-pointer p-8 rounded-2xl border-2 transition-all hover:shadow-lg
            ${
              selectedType === "buyer"
                ? "border-green-500 bg-green-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-green-300"
            }
          `}
        >
          <div className="text-center">
            <div
              className={`
              w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
              ${selectedType === "buyer" ? "bg-green-100" : "bg-gray-100"}
            `}
            >
              <ShoppingCart
                className={`h-10 w-10 ${
                  selectedType === "buyer" ? "text-green-600" : "text-gray-600"
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">I&apos;m a Buyer</h3>
            <p className="text-gray-600">
              Purchase fresh agricultural products directly from local farmers
            </p>
            <ul className="text-sm text-gray-500 mt-4 text-left">
              <li>• Access fresh products</li>
              <li>• Support local farmers</li>
              <li>• Compare prices easily</li>
              <li>• Secure payments</li>
            </ul>
          </div>
        </div>
      </div>

      {selectedType && (
        <div className="text-center">
          <button
            onClick={onNext}
            className="btn btn-primary text-lg px-8 py-3"
          >
            Continue as {selectedType === "farmer" ? "Farmer" : "Buyer"}
          </button>
        </div>
      )}
    </div>
  );
}
