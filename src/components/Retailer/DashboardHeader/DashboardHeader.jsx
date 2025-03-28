export default function DashboardHeader({ onManageOrdersClick }) {
  return (
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
          onClick={onManageOrdersClick}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Manage Orders
        </button>
      </div>
    </div>
  );
}
