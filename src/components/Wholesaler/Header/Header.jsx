// components/Wholesaler/Header/Header.jsx
import { Plus, ShoppingCart, Bell } from "lucide-react";
import { FaUser } from "react-icons/fa";
import logo from "./images/logo.png";

export default function Header({ onViewProductsClick, showProductPage }) {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} className="h-10 w-auto" />
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className="inline-flex items-center gap-1 sm:gap-2 bg-black text-white px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-base"
              onClick={onViewProductsClick}
            >
              {showProductPage ? "Close" : "View Products"}
            </button>

            <button className="inline-flex items-center gap-1 sm:gap-2 bg-white border px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm">
              <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="">View Orders</span>
            </button>

            <button className="relative p-1 sm:p-2">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="p-1 sm:p-0">
              <FaUser className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
