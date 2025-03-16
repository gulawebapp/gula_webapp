"use client";

import { useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Package,
  Store,
  Users,
} from "lucide-react";
import ManageOrdersModal from "../components/ManageOrders";

export default function RetailerDashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManageOrdersOpen, setIsManageOrdersOpen] = useState(false);

  const recentOrders = [
    {
      id: "12345",
      name: "Summer Collection 2024",
      status: "Delivered",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "12344",
      name: "Premium Handbags",
      status: "In Transit",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "12343",
      name: "Sports Footwear",
      status: "Processing",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const catalogUpdates = [
    {
      company: "Fashion Wholesale Co.",
      update: "Added 50 new summer items",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "Luxury Accessories Ltd.",
      update: "Updated spring collection prices",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "Sports Gear Direct",
      update: "New fitness equipment available",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  const recommendedProducts = [
    {
      title: "Summer Dress Collection",
      subtitle: "Starting from $29.99",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BODY-1000324@1x-OnfbrbTLEOzQ80Upm47qlgpJ7e4EVK.png",
    },
    {
      title: "Luxury Handbags",
      subtitle: "Premium Collection",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BODY-1000324@1x-OnfbrbTLEOzQ80Upm47qlgpJ7e4EVK.png",
    },
    {
      title: "Sports Footwear",
      subtitle: "New Arrivals",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BODY-1000324@1x-OnfbrbTLEOzQ80Upm47qlgpJ7e4EVK.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendedProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + recommendedProducts.length) % recommendedProducts.length
    );
  };

  const openManageOrders = () => {
    setIsManageOrdersOpen(true);
  };

  const closeManageOrders = () => {
    setIsManageOrdersOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-indigo-600">LO</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-900 font-medium">
              Dashboard
            </a>
            <a href="#" className="text-gray-500">
              Catalogs
            </a>
            <a href="#" className="text-gray-500">
              Orders
            </a>
            <a href="#" className="text-gray-500">
              Support
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-500" />
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      <main className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, Fashion Retail Co.
            </h1>
            <p className="text-gray-500">Premium Subscription Active</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-black text-white rounded-md">
              Browse Catalogs
            </button>
            <button
              onClick={openManageOrders}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Manage Orders
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <Package className="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />
              <div>
                <p className="text-gray-500">Active Orders</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <Store className="w-10 h-10 p-2 bg-green-100 text-green-600 rounded-lg" />
              <div>
                <p className="text-gray-500">Followed Wholesalers</p>
                <p className="text-2xl font-bold">28</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <Users className="w-10 h-10 p-2 bg-purple-100 text-purple-600 rounded-lg" />
              <div>
                <p className="text-gray-500">Subscription Status</p>
                <p className="text-sm text-green-600 font-medium">
                  Premium Active
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
              <HelpCircle className="w-10 h-10 p-2 bg-yellow-100 text-yellow-600 rounded-lg" />
              <div>
                <p className="text-gray-500">Support</p>
                <p className="text-sm text-gray-600">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={order.image || "/placeholder.svg"}
                      alt=""
                      className="w-10 h-10 rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{order.name}</p>
                      <p className="text-sm text-gray-500">Order #{order.id}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog Updates */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Catalog Updates</h2>
            <div className="space-y-4">
              {catalogUpdates.map((update, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={update.image || "/placeholder.svg"}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{update.company}</p>
                    <p className="text-sm text-gray-500">{update.update}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recommended Products</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {recommendedProducts.map((product, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-64 md:h-80">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                        <h3 className="text-xl font-semibold">
                          {product.title}
                        </h3>
                        <p>{product.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Order Management</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Track Orders</li>
              <li>Order History</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Business Settings</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Profile</li>
              <li>Billing</li>
              <li>Notifications</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Help Center</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>FAQs</li>
              <li>Contact Support</li>
              <li>Knowledge Base</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </footer>
      </main>

      {/* Manage Orders Modal */}
      <ManageOrdersModal
        isOpen={isManageOrdersOpen}
        onClose={closeManageOrders}
        recentOrders={recentOrders}
      />
    </div>
  );
}
