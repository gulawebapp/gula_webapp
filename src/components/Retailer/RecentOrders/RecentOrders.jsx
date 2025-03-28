const recentOrders = [
  {
    id: "12345",
    name: "Summer Collection 2024",
    status: "Delivered",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "12344",
    name: "Premium Handbags",
    status: "In Transit",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "12343",
    name: "Sports Footwear",
    status: "Processing",
    image: "/placeholder.svg?height=40&width=40",
  },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
      <div className="space-y-4">
        {recentOrders.map((recentOrder) => (
          <div
            key={recentOrder.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={recentOrder.image || "/placeholder.svg"}
                alt=""
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <p className="font-medium">{recentOrder.name}</p>
                <p className="text-sm text-gray-500">Order #{recentOrder.id}</p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                recentOrder.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : recentOrder.status === "In Transit"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {recentOrder.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
