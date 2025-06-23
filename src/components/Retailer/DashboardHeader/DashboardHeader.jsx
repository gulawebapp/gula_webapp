import { useState } from "react";
import Button from "../../common/button";
import Catalog from "../Catalog";

export default function DashboardHeader({
  onManageOrdersClick,
  handleCatalog,
  catalog,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mb-8 pl-14">
      <div>
        <h1 className="text-sm sm:text-2xl font-bold text-gray-900">
          Welcome back, Fashion Retail Co.
        </h1>
        <p className="text-gray-500">Premium Subscription Active</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-x-8">
        <Button onClick={handleCatalog}>
          {catalog ? "Close catalog" : "Browse Catalog"}
        </Button>

        <Button variant="secondary" onClick={onManageOrdersClick}>
          Manage Orders
        </Button>
      </div>
    </div>
  );
}
