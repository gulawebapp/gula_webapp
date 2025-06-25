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
        <h1 className="text-2xl font-bold text-gray-900">Welcome back.</h1>
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
