import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import useCartStore from "../../Store/Cart";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const cartTotal = getTotalPrice();

  function handleSubmit() {
    if (cartTotal > 500000) {
      alert("Congratulations on your premium purchase!");
    } else {
      alert("Keep exploring our premium collection!");
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-4">
              <ShoppingBag className="w-16 h-16 text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>
              <p className="text-gray-600">
                Looks like you haven't added anything to your cart yet.
              </p>
              <button
                onClick={handleBack}
                className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Order</h2>

        <button
          onClick={clearCart}
          className="mb-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Clear Entire Cart
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex gap-6">
                  {/* Product Image Placeholder */}
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-gray-400" />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.productName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Sold by: {item.wholesalerName}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-gray-400 hover:text-red-500 transition-colors h-5"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-2">
                      <p className="text-gray-800 font-medium">
                        UGX {item.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-6">
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">UGX {cartTotal}</span>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-6">
                <Link
                  to="/catalog" // Updated to point to your catalog page
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Continue Shopping
                </Link>

                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
