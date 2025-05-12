import { useState } from "react";
import Button from "../../common/button";
import Catalog from "../Catalog";

export default function DashboardHeader({ onManageOrdersClick }) {
  const [catalog, setCatalog] = useState("false");

  const handleCatalog = () => {
    setCatalog(!catalog);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, Fashion Retail Co.
        </h1>
        <p className="text-gray-500">Premium Subscription Active</p>
      </div>
      <div className="flex space-x-3">
        <Button onClick={handleCatalog}>
          {catalog ? "Browse Catalogs" : "Close catalogue"}
        </Button>

        {catalog && <Catalog />}
        <Button variant="secondary" onClick={onManageOrdersClick}>
          Manage Orders
        </Button>
      </div>
    </div>
  );
}
