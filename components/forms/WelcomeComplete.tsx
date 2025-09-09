"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface WelcomeCompleteProps {
  userType: "farmer" | "buyer";
  userName: string;
}

export default function WelcomeComplete({
  userType,
  userName,
}: WelcomeCompleteProps) {
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="mb-8">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Welcome to E-Agro!
        </h2>
        <p className="text-gray-600 mb-6">
          Congratulations {userName}! Your account has been created
          successfully.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 className="font-semibold text-blue-900 mb-3">
          🎉 What&apos;s Next?
        </h4>
        <div className="text-left text-sm text-blue-800 space-y-2">
          {userType === "farmer" ? (
            <>
              <p>• Complete your profile setup</p>
              <p>• Add your first product listing</p>
              <p>• Upload quality product photos</p>
              <p>• Start receiving orders from buyers</p>
            </>
          ) : (
            <>
              <p>• Browse available products</p>
              <p>• Connect with verified farmers</p>
              <p>• Place your first order</p>
              <p>• Build relationships with suppliers</p>
            </>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <Link
          href={`/dashboard/${userType}`}
          className="block w-full btn btn-primary text-lg py-3"
        >
          Go to My Dashboard
        </Link>
        <Link
          href="/marketplace"
          className="block w-full btn btn-secondary text-lg py-3"
        >
          Browse Marketplace
        </Link>
      </div>
    </div>
  );
}
