import { create } from "zustand";

// Zustand store for managing the product catalog
const useProductStore = create((set) => ({
  // Initial state
  products: [], // Array to hold products in the catalog

  // Actions

  // Add a new product to the catalog
  addProduct: (product) => {
    set((state) => ({
      products: [...state.products, product],
    }));
  },

  // Update an existing product in the catalog
  updateProduct: (productId, updatedProduct) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      ),
    }));
  },

  // Remove a product from the catalog
  removeProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },

  // Clear the entire product catalog
  clearCatalog: () => {
    set(() => ({
      products: [],
    }));
  },
}));

export default useProductStore;
