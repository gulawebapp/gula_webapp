import { Search } from "lucide-react";
import PropTypes from "prop-types";

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

export default function ManageOrdersModal(props) {
  const { isOpen, onClose } = props;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Manage Orders</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              All
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Processing
            </button>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-md">
              In Transit
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md">
              Delivered
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md">
              Cancelled
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left border-b">
                <th className="py-3">Order ID</th>
                <th className="py-3">Product</th>
                <th className="py-3">Date</th>
                <th className="py-3">Total</th>
                <th className="py-3">Status</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-4">#{order.id}</td>
                  <td className="py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={order.image || "/placeholder.svg"}
                        alt=""
                        className="w-10 h-10 rounded-lg"
                      />
                      <p className="font-medium">{order.name}</p>
                    </div>
                  </td>
                  <td className="py-4">2024-03-15</td>
                  <td className="py-4">$1,200.00</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "In Transit"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-indigo-600 hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

ManageOrdersModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  recentOrders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};
