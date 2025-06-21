"use client";

import { useState } from "react";
import Navbar from "../components/Retailer/NavBar/NavBar";
import DashboardHeader from "../components/Retailer/DashboardHeader/DashboardHeader";
import StatsGrid from "../components/Retailer/StatsGrid/StatsGrid";
import RecentOrders from "../components/Retailer/RecentOrders/RecentOrders";
import CatalogUpdates from "../components/Retailer/CatalogUpdates/CatalogUpdates";
import ProductCarousel from "../components/Retailer/ProductCarousel/ProductCarousel";
import Footer from "../components/Retailer/Footer/Footer";
import ManageOrdersModal from "../components/Retailer/ManageOrders/ManageOrders";
import Catalog from "../components/Retailer/Catalog";

export default function RetailerDashboard() {
  const [isManageOrdersOpen, setIsManageOrdersOpen] = useState(false);
  const [catalog, setCatalog] = useState(false);

  const handleCatalog = () => {
    setCatalog(!catalog);
  };

  const openManageOrders = () => {
    setIsManageOrdersOpen(true);
  };

  const closeManageOrders = () => {
    setIsManageOrdersOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DashboardHeader
        onManageOrdersClick={openManageOrders}
        handleCatalog={handleCatalog}
        catalog={catalog}
      />
      {catalog ? (
        <div className="px-2 sm:px-6 pl-14">
          <Catalog />
        </div>
      ) : (
        <main className="px-4 py-8 pl-32 sm:pl-20">
          <StatsGrid />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentOrders />
            <CatalogUpdates />
          </div>

          <ProductCarousel />
          <Footer />
        </main>
      )}

      <ManageOrdersModal
        isOpen={isManageOrdersOpen}
        onClose={closeManageOrders}
      />
    </div>
  );
}
