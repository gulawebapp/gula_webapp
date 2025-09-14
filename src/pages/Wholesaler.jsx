import { useMemo, useState } from "react";
import Header from "../components/Wholesaler/Header/Header";
import MetricsGrid from "../components/Wholesaler/MetricGrid/MetricGrid";
import TopProducts from "../components/Wholesaler/TopProducts/TopProducts";
import RecentOrders from "../components/Wholesaler/RecentOrders/RecentOrders";
import SalesChart from "../components/Wholesaler/SalesChart/SalesChat";
import ProductPage from "../components/Wholesaler/product";
import ProductForm from "../components/Wholesaler/productForm";
import DashboardText from "../components/Wholesaler/HeaderText/HeaderText";

export default function WholesalerDashboard() {
  const [showProductForm, setShowProductForm] = useState(false);
  const [showProductPage, setShowProductPage] = useState(false);

  const toggleProductPage = () => {
    setShowProductPage(!showProductPage);
    if (showProductForm) setShowProductForm(false);
  };

  const toggleProductForm = () => {
    setShowProductForm(!showProductForm);
    if (showProductPage) setShowProductPage(false);
  };
  console.log("man page rerebdered");
  const header = useMemo(() => {
    return <Header />;
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col sm:block">
      {/* Header/Sidebar */}
      {header}

      {/* Main Content */}
      <main className="flex-1 pl-32 sm:pl-7 mx-auto px-4 py-8">
        <DashboardText
          onCreateProductClick={toggleProductForm}
          onViewProductsClick={toggleProductPage}
          showProductForm={showProductForm}
          showProductPage={showProductPage}
        />
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
