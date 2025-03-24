const updates = [
    {
      company: "Fashion Wholesale Co.",
      update: "Added 50 new summer items",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "Luxury Accessories Ltd.",
      update: "Updated spring collection prices",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      company: "Sports Gear Direct",
      update: "New fitness equipment available",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];


export default function CatalogUpdates() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Catalog Updates</h2>
        <div className="space-y-4">
          {updates.map((update, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={update.image || "/placeholder.svg"}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{update.company}</p>
                <p className="text-sm text-gray-500">{update.update}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }