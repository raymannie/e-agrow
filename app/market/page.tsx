import Link from "next/link";
import {
  Sprout,
  Users,
  ShoppingCart,
  TrendingUp,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  E-Agro Marketplace
                </h1>
                <p className="text-xs text-gray-600">
                  Ikenne LGA Digital Platform
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="#features"
                className="text-gray-700 hover:text-green-600"
              >
                Features
              </Link>
              <Link
                href="#marketplace"
                className="text-gray-700 hover:text-green-600"
              >
                Browse Products
              </Link>
              <Link href="/onboarding" className="btn btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Ikenne Farmers
            <span className="text-green-600"> with Direct Buyers</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering the community of Ikenne with innovative digital services,
            seamless product sales, and agricultural growth in Ogun State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/onboarding?type=farmer"
              className="btn btn-primary text-lg px-8 py-3"
            >
              <Sprout className="mr-2 h-5 w-5" />
              Im a Farmer
            </Link>
            <Link
              href="/onboarding?type=buyer"
              className="btn btn-secondary text-lg px-8 py-3"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Im a Buyer
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose E-Agro Marketplace?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Transparent Marketplace
              </h3>
              <p className="text-gray-600">
                Direct connection between farmers and buyers with transparent
                pricing and secure transactions.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Community Empowerment
              </h3>
              <p className="text-gray-600">
                Supporting local farmers and businesses with digital tools and
                market access opportunities.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
              <p className="text-gray-600">
                Exclusively serving Ikenne LGA to strengthen our local
                agricultural economy and food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section id="marketplace" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">
              Fresh agricultural products from verified farmers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Fresh Rubber Latex",
                price: "₦800/kg",
                location: "Ward 1",
                rating: 4.8,
                images: ["/image-rubber.png"],
              },
              {
                name: "Premium Cassava Flour",
                price: "₦350/kg",
                location: "Ward 2",
                rating: 4.6,
                images: ["/image-flour.png"],
              },
              {
                name: "Fresh Yam Tubers",
                price: "₦500/piece",
                location: "Ward 3",
                rating: 4.9,
                images: ["/image-yam.jpg"],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt="image"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    📍 {product.location}
                  </p>
                  <button className="w-full btn btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/marketplace"
              className="btn btn-secondary text-lg px-8 py-3"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sprout className="h-6 w-6 text-green-400" />
                <span className="font-bold text-lg">E-Agro Marketplace</span>
              </div>
              <p className="text-gray-400">
                Empowering agricultural community through digital innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/onboarding" className="hover:text-white">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="text-gray-400 space-y-2">
                <p>Ikenne Local Government</p>
                <p>Ogun State, Nigeria</p>
                <p>info@ikennelga.gov.ng</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Ikenne LGA E-Agro Marketplace. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
