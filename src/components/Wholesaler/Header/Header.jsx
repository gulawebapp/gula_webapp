import { Plus, ShoppingCart, Bell } from "lucide-react";
import { FaUser } from "react-icons/fa";

export default function Header({ onCreateProductClick, showProductForm }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">LOGO</div>
          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
              onClick={onCreateProductClick}
            >
              <Plus className="w-4 h-4" />
              {showProductForm ? "Close Form" : "Create Product"}
            </button>
            <button className="inline-flex items-center gap-2 bg-white border px-4 py-2 rounded-lg">
              <ShoppingCart className="w-4 h-4" />
              View Orders
            </button>
            <button className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <FaUser className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
