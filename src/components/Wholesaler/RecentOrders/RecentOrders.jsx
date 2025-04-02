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

export default function RecentOrders() {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
      </div>
      <div className="overflow-x-auto">
        {/* Desktop Table */}
        <table className="w-full hidden md:table">
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
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="text-sm text-gray-500">
                        {order.customer.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {order.items}
                </td>
                <td className="px-6 py-4 text-sm font-medium">{order.total}</td>
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

        {/* Mobile Cards */}
        <div className="md:hidden">
          {recentOrders.map((order) => (
            <div key={order.id} className="p-4 border-b">
              <div className="flex justify-between items-start">
                <div className="font-medium text-gray-900">{order.id}</div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <img
                  src={order.customer.avatar || "/placeholder.svg"}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-medium">{order.customer.name}</div>
                  <div className="text-sm text-gray-500">
                    {order.customer.email}
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-between">
                <div className="text-sm text-gray-500">
                  Product {order.items}
                </div>
                <div className="text-sm font-medium">Total {order.total}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
