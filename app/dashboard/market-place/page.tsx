"use client";
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { mockProducts } from "@/lib/mockData";
import {
  Search,
  Filter,
  MapPin,
  Star,
  Heart,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    "All Categories",
    "Rubber",
    "Cassava",
    "Yam",
    "Maize",
    "Plantain",
  ];
  const wards = [
    "All Locations",
    "Ward 1",
    "Ward 2",
    "Ward 3",
    "Ward 4",
    "Ward 5",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader userName="Guest" userType="buyer" />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
          <p className="text-gray-600">
            Fresh agricultural products from verified Ikenne farmers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, farmers, or locations..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <select
              className="input lg:w-48"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              className="input lg:w-48"
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
            >
              {wards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              className="input lg:w-48"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt="image"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  by {product.farmerName}
                </p>

                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-bold text-green-600">
                    ₦{product.price.toLocaleString()}/{product.unit}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{product.location}</span>
                </div>

                {/* Availability */}
                <p className="text-sm text-gray-600 mb-4">
                  {product.availableQuantity}
                  {product.unit} available • Min order: {product.minimumOrder}
                  {product.unit}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 btn btn-primary text-sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-8 py-3">
            Load More Products
          </button>
        </div>
      </main>
    </div>
  );
}
