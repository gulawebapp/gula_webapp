import { useState } from "react";
import { Line, XAxis, YAxis, Tooltip } from "recharts";
import { Bell, Plus, ShoppingCart, Users } from "lucide-react";
import ProductForm from "./CreateCatalog";
// Import the ProductForm component

const data = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 15000 },
  { name: "Mar", value: 14000 },
  { name: "Apr", value: 16500 },
  { name: "May", value: 15500 },
  { name: "Jun", value: 21000 },
];

const topProducts = [
  {
    name: "Smartphone X Pro",
    units: "1,234 units sold",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Wireless Earbuds",
    units: "956 units sold",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Smart Watch Elite",
    units: "845 units sold",
    image: "/placeholder.svg?height=50&width=50",
  },
];

const recentOrders = [
  {
    id: "#ORD-2024-1234",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    items: "3 items",
    total: "$2,456",
    status: "Completed",
  },
  {
    id: "#ORD-2024-1235",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    items: "1 item",
    total: "$899",
    status: "Processing",
  },
];

export default function WholesalerDashboard() {
  const [showProductForm, setShowProductForm] = useState(false);

  // Toggle the visibility of the ProductForm
  const handleCreateProductClick = () => {
    setShowProductForm((prev) => !prev); // Toggle the state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-indigo-600">LOGO</div>
            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
                onClick={handleCreateProductClick}
              >
                <Plus className="w-4 h-4" />
                {showProductForm ? "Close Form" : "Create Product"}
              </button>
              <button className="inline-flex items-center gap-2 bg-white border px-4 py-2 rounded-lg">
                <ShoppingCart className="w-4 h-4" />
                View Orders
              </button>
              <button className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Conditionally render the ProductForm */}
        {showProductForm ? (
          <ProductForm />
        ) : (
          <>
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 16V4M17 8v12M3 12h18M3 20h18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Total Sales
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">$124,563</span>
                      <span className="text-sm text-green-500">
                        +12.5% from last month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Pending Orders
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">23</span>
                      <span className="text-sm text-gray-500">
                        4 require immediate attention
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-50 rounded-lg">
                    <svg
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Low Stock Alerts
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">7</span>
                      <span className="text-sm text-red-500">
                        Items need restock
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Active Customers
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">1,284</span>
                      <span className="text-sm text-green-500">
                        +8% this week
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts and Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                <div className="h-[300px]">
                  <Line
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#6366f1" />
                  </Line>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Top Products</h2>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.units}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="mt-6 bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="px-6 py-3 text-sm font-medium text-gray-500">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-sm font-medium text-gray-500">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-sm font-medium text-gray-500">
                        Products
                      </th>
                      <th className="px-6 py-3 text-sm font-medium text-gray-500">
                        Total
                      </th>
                      <th className="px-6 py-3 text-sm font-medium text-gray-500">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={order.customer.avatar || "/placeholder.svg"}
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <div className="font-medium">
                                {order.customer.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {order.customer.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {order.items}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          {order.total}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
