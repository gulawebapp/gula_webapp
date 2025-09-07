import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import logo from "./images/gulalogo.png";
import LoginForm from "../auth/loginForm";
import logo1_400webp from "./images/logo/gulablue_400.webp";
import logo1_600webp from "./images/logo/gulablue_600.webp";
import logo1_800webp from "./images/logo/gulablue_800.webp";
import logo1_1200webp from "./images/logo/gulablue_1200.webp";

//fallback images
import logo1_400 from "./images/logo/gulablue_400.jpg";
import logo1_600 from "./images/logo/gulablue_600.jpg";
import logo1_800 from "./images/logo/gulablue_800.jpg";
import logo1_1200 from "./images/logo/gulablue_1200.jpg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="w-full bg-gray-50">
      {/*Navigation*/}
      <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <picture>
                {/* WebP versions for modern browsers */}
                <source
                  srcSet={`
                            ${logo1_400webp} 400w,
                            ${logo1_600webp} 600w,
                            ${logo1_800webp} 800w,
                            ${logo1_1200webp} 1200w
                          `}
                  sizes="(max-width: 480px) 150px, (max-width: 768px) 176px, (max-width: 1024px) 200px, 220px"
                  type="image/webp"
                />
                {/* JPEG fallback for older browsers */}
                <img
                  src={logo1_800} // Default fallback
                  srcSet={`
                                ${logo1_400} 400w,
                                ${logo1_600} 600w,
                                ${logo1_800} 800w,
                                ${logo1_1200} 1200w
                              `}
                  sizes="(max-width: 480px) 150px, (max-width: 768px) 176px, (max-width: 1024px) 200px, 220px"
                  alt="Happy farmer using agricultural marketplace platform"
                  className="rounded-lg w-full h-11 object-cover"
                  width={176}
                  height={44}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <div className="hidden md:flex ml-10 gap-x-5">
                <Link
                  to="/"
                  className="text-gray-500 font-medium hover:text-black"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-gray-500 font-medium hover:text-black"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="text-gray-500 font-medium hover:text-black"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-500 font-medium hover:text-black"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button variant="primary" onClick={handleLoginToggle}>
                {showLoginForm ? "Close Form" : "Get Started"}
              </Button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-black focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-black bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-black hover:bg-gray-100"
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-black hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-black hover:bg-gray-100"
              >
                Contact
              </Link>
              <div className="block w-full px-3 py-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleLoginToggle();
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {showLoginForm ? "Close Form" : "Get Started"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Render LoginForm conditionally based on showLoginForm state */}
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
    </div>
  );
}
