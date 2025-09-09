export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: "farmer" | "buyer";
  location: string;
  ward: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface Farmer extends User {
  farmName: string;
  farmSize: number;
  primaryCrop: string;
  rating: number;
  totalSales: number;
}

export interface Buyer extends User {
  businessType: "individual" | "retailer" | "processor" | "exporter";
  businessName?: string;
  totalPurchases: number;
}

export interface Product {
  id: string;
  farmerId: string;
  farmerName: string;
  title: string;
  description: string;
  category: "rubber" | "cassava" | "yam" | "maize" | "plantain" | "other";
  price: number;
  unit: "kg" | "piece" | "bunch" | "bag";
  availableQuantity: number;
  minimumOrder: number;
  location: string;
  ward: string;
  images: string[];
  rating: number;
  reviewCount: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Order {
  id: string;
  buyerId: string;
  farmerId: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  status: "pending" | "confirmed" | "processing" | "delivered" | "cancelled";
  deliveryAddress: string;
  orderDate: Date;
  deliveryDate?: Date;
}
