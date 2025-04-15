import Button from "../common/button";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../common/Loading";

export default function ProductPage({ onCreateProductClick }) {
  const queryClient = useQueryClient();
  //fetch data from database
  const fetchData = async () => {
    const response = await axios.get("");
    return response.data;
  };

  //delete card function
  const deleteData = async (id) => {
    const response = await axios.delete(`/${id}`);
    return response.data;
  };

  //edit card function
  const editData = async (id, data) => {
    const response = await axios.put(`/${id}`, data);
    return response.data;
  };

  //query function for fetching data from database
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  //delete mutation
  const { mutate: deleteProduct } = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-black text-3xl sm:text-5xl">
          Error: {error.message}
        </div>
      </div>
    );
  }

  //handle delete button click
  function removeProduct(id) {
    deleteProduct(id);
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Products</h1>
      </div>

      {/* Products List */}
      {!data || data.length === 0 ? (
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
          {data.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image Section */}
              <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">No Image</div>
                )}
              </div>

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
                    {product.subcategory}
                  </span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                    Qty: {product.quantity}
                  </span>
                </div>
              </div>
              <div className="border-t p-3 bg-gray-50 flex justify-end gap-2">
                <Button variant="primary">Edit</Button>
                <Button
                  variant="primary"
                  onClick={() => removeProduct(product.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
