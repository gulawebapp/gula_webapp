import useCartStore from "../../Store/Cart";

export default function ProductCart() {
  const { items, removeItem, clearCart, getTotalPrice, updateQuantity } =
    useCartStore();
  const getTotal = getTotalPrice();

  const handleQuantityChange = (productId, newQuantity) => {
    // Ensure quantity is at least 1
    const quantity = Math.max(1, newQuantity);
    updateQuantity(productId, quantity);
  };

  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Your Shopping Cart
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h1 className="text-xl font-medium text-gray-600">
            Your cart is empty
          </h1>
          <p className="mt-2 text-gray-500">Add some products to get started</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {items.map((item) => (
              <div key={item.id} className="border-b last:border-b-0">
                <div className="flex p-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0].url || item.images[0].preview}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder-product.jpg";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-xs">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <span className="font-bold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-2 flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-3 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center border rounded-md text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="mt-1 text-sm text-gray-600">
                      <p>
                        {item.quantityUnit} (${item.price?.toFixed(2)} each)
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-red-500 text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal (
                  {items.reduce((total, item) => total + item.quantity, 0)}{" "}
                  items)
                </span>
                <span className="font-medium">${getTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="text-gray-800 font-bold">Total</span>
                <span className="text-blue-600 font-bold">
                  ${getTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors duration-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
