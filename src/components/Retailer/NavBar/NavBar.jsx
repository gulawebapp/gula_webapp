import { Bell } from "lucide-react";
import { FaUser } from "react-icons/fa";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-8">
        <img src={logo} className="h-10 w-auto" />
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-900 font-medium">
            Dashboard
          </a>
          <a href="#" className="text-gray-500">
            Catalogs
          </a>
          <a href="#" className="text-gray-500">
            Orders
          </a>
          <a href="#" className="text-gray-500">
            Support
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-500" />
        <FaUser className="w-8 h-8 rounded-full" />
      </div>
    </nav>
  );
}
