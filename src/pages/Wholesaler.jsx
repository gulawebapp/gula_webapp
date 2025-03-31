// pages/WholesalerDashboard.jsx
import { useState } from "react";
import Header from "../components/Wholesaler/Header/Header";
import MetricsGrid from "../components/Wholesaler/MetricGrid/MetricGrid";
import TopProducts from "../components/Wholesaler/TopProducts/TopProducts";
import RecentOrders from "../components/Wholesaler/RecentOrders/RecentOrders";
import SalesChart from "../components/Wholesaler/SalesChart/SalesChat";
import ProductPage from "../components/Wholesaler/product";
import ProductForm from "../components/Wholesaler/productForm";

export default function WholesalerDashboard() {
  const [showProductForm, setShowProductForm] = useState(false);
  const [showProductPage, setShowProductPage] = useState(false);

  const toggleProductPage = () => {
    setShowProductPage(!showProductPage);
    // Ensure form is closed when toggling product page
    if (showProductForm) setShowProductForm(false);
  };

  const toggleProductForm = () => {
    setShowProductForm(!showProductForm);
    // Ensure product page is closed when toggling form
    if (showProductPage) setShowProductPage(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCreateProductClick={toggleProductForm}
        onViewProductsClick={toggleProductPage}
        showProductForm={showProductForm}
        showProductPage={showProductPage}
      />

      <main className="container mx-auto px-4 py-8">
        {showProductForm ? (
          <ProductForm onCancel={() => setShowProductForm(false)} />
        ) : showProductPage ? (
          <ProductPage onCreateProductClick={toggleProductForm} />
        ) : (
          <>
            <MetricsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <TopProducts />
              </div>
            </div>
            <RecentOrders />
          </>
        )}
      </main>
    </div>
  );
}
