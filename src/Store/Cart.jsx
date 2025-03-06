import { create } from "zustand";

// Define the cart store
const useCartStore = create((set) => ({
  // Initial state
  items: [], // Array to hold cart items
  paymentMethod: null, // Selected payment method (e.g., Mobile Money, Payment on Delivery)
  orderStatus: "pending", // Order status (pending, processing, completed)

  // Actions

  // Add a product to the cart
  addItem: (product) => {
    set((state) => {
      // Check if the product already exists in the cart
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product exists, update its quantity
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the product doesn't exist, add it to the cart with a quantity of 1
        return {
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    });
  },

  // Remove a product from the cart
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  // Update the quantity of a product in the cart
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    }));
  },

  // Clear the entire cart
  clearCart: () => {
    set(() => ({
      items: [],
      paymentMethod: null,
      orderStatus: "pending",
    }));
  },

  // Set the payment method (e.g., Mobile Money, Payment on Delivery)
  setPaymentMethod: (method) => {
    set(() => ({
      paymentMethod: method,
    }));
  },

  // Update the order status (e.g., pending, processing, completed)
  setOrderStatus: (status) => {
    set(() => ({
      orderStatus: status,
    }));
  },

  // Calculate the total price of items in the cart
  getTotalPrice: () => {
    return useCartStore
      .getState()
      .items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
