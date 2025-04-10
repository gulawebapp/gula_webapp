import Button from "../../common/button";

export default function DashboardText(props) {
  const {
    onCreateProductClick,
    onViewProductsClick,
    showProductForm,
    showProductPage,
  } = props;
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, Wholesale Co.
        </h1>
        <p className="text-gray-500">Premium Subscription Active</p>
      </div>
      <div className="flex space-x-3">
        <Button variant="secondary" onClick={onViewProductsClick}>
          {showProductPage ? "Close" : "View Products"}
        </Button>

        <Button onClick={onCreateProductClick}>
          {showProductForm ? "Close" : "Add Product"}
        </Button>
      </div>
    </div>
  );
}

{
  /* <button
className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white border px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm w-full sm:w-auto"
onClick={onCreateProductClick}
>
{showProductForm ? "Close" : "Add Product"}
</button> */
}

{
  /* <button
className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-black text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-base w-full sm:w-auto"
onClick={onViewProductsClick}
>
{showProductPage ? "Close" : "View Products"}
</button> */
}
