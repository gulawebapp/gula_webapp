import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      paymentMethod: null,
      orderStatus: "pending",

      // Actions
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.productId
          );

          if (existingItem) {
            // For existing items, update quantity and recalculate totalPrice
            return {
              items: state.items.map((item) =>
                item.productId === product.productId
                  ? {
                      ...item,
                      quantity: item.quantity + product.quantity,
                      totalPrice: item.totalPrice + product.totalPrice,
                    }
                  : item
              ),
            };
          } else {
            // For new items, add to cart with the calculated totalPrice
            return {
              items: [...state.items, product],
            };
          }
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }));
      },

      updateQuantity: (productId, newQuantity) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === productId) {
              // Calculate the new totalPrice based on the price per unit
              const pricePerUnit = item.totalPrice / item.quantity;
              return {
                ...item,
                quantity: newQuantity,
                totalPrice: Math.round(newQuantity * pricePerUnit * 100) / 100,
              };
            }
            return item;
          }),
        }));
      },

      clearCart: () => {
        set(() => ({
          items: [],
          paymentMethod: null,
          orderStatus: "pending",
        }));
      },

      setPaymentMethod: (method) => {
        set(() => ({
          paymentMethod: method,
        }));
      },

      setOrderStatus: (status) => {
        set(() => ({
          orderStatus: status,
        }));
      },

      getTotalPrice() {
        const { items } = get();
        return items.reduce((total, item) => total + item.totalPrice, 0);
      },
    }),
    {
      name: "cart-storage", // name for the persisted store
      getStorage: () => localStorage, // or sessionStorage
    }
  )
);

export default useCartStore;
