import { ShoppingCart, Bell } from "lucide-react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import logo from "./images/logo.png";
import logo1 from "./images/single.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";

export default function Header({ onLogout }) {
  const navigate = useNavigate();

  const handlelogOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert("failed to logout");
    }
  };
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-28 sm:w-auto sm:static sm:border-b bg-white sm:flex sm:items-center sm:justify-between sm:px-2 sm:py-4">
        <div className="flex justify-center sm:justify-start p-4 sm:p-0">
          <img
            src={logo}
            className="hidden md:block h-10 w-auto"
            alt="Desktop Logo"
          />
          <img
            src={logo1}
            className="block md:hidden h-10 w-12"
            alt="Mobile Logo"
          />
        </div>

        <nav className="flex flex-col items-center gap-6 sm:gap-4 sm:flex-row sm:items-center px-2 sm:px-0">
          <button className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white border px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm w-full sm:w-auto">
            <ShoppingCart className="hidden sm:inline-block w-4 h-4 sm:w-6 sm:h-6" />
            <span className="sm:inline">View Orders</span>
          </button>

          <button className="relative p-2">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 sm:p-0">
            <FaUser className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
          </button>

          <button
            onClick={handlelogOut}
            className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gray-100 hover:bg-gray-200 px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer w-full sm:w-auto"
            title="Logout"
          >
            <FaSignOutAlt className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className=" sm:inline">Logout</span>
          </button>
        </nav>
      </div>

      <div className="w-20 sm:hidden"></div>
    </>
  );
}
