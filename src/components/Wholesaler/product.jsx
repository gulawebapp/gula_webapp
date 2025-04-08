// components/Wholesaler/Products/ProductPage.jsx
import { useEffect } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../Store/ProductCatalog";
import Button from "../common/button";

export default function ProductPage({ onCreateProductClick }) {
  const { products } = useProductStore();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Products</h1>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-600 mb-2">
            No Products Found
          </h2>
          <p className="text-gray-500 mb-4">
            You haven't added any products yet.
          </p>
          <Button onClick={onCreateProductClick}>Add Your First Product</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    Qty: {product.quantity}
                  </span>
                </div>
              </div>
              <div className="border-t p-3 bg-gray-50 flex justify-end gap-2">
                <Button variant="primary">Edit</Button>
                <Button variant="primary">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
