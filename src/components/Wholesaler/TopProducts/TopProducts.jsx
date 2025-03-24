const topProducts = [
    {
      name: "Smartphone X Pro",
      units: "1,234 units sold",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Wireless Earbuds",
      units: "956 units sold",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Smart Watch Elite",
      units: "845 units sold",
      image: "/placeholder.svg?height=50&width=50",
    },
  ];
  
  export default function TopProducts() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Top Products</h2>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.units}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }