import Button from "../../common/button";

export default function DashboardHeader({ onManageOrdersClick }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, Fashion Retail Co.
        </h1>
        <p className="text-gray-500">Premium Subscription Active</p>
      </div>
      <div className="flex space-x-3">
        <Button>Browse Catalogs</Button>
        <Button variant="secondary" onClick={onManageOrdersClick}>
          Manage Orders
        </Button>
      </div>
    </div>
  );
}
