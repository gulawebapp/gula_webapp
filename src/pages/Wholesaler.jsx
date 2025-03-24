import { useState } from "react";
import Header from "../components/Wholesaler/Header/Header";
import MetricsGrid from "../components/Wholesaler/MetricGrid/MetricGrid";
import SalesChart from "../components/Wholesaler/SalesChart/SalesChat";
import TopProducts from "../components/Wholesaler/TopProducts/TopProducts";
import RecentOrders from "../components/Wholesaler/RecentOrders/RecentOrders";


export default function WholesalerDashboard() {
  const [showProductForm, setShowProductForm] = useState(false);

  const handleCreateProductClick = () => {
    setShowProductForm((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCreateProductClick={handleCreateProductClick}
        showProductForm={showProductForm}
      />

      <main className="container mx-auto px-4 py-8">
        {showProductForm ? (
          <ProductForm />
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