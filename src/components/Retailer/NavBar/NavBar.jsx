import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold text-indigo-600">LO</div>
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
        <img
          src="/placeholder.svg?height=32&width=32"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}