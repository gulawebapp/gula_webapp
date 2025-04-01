import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import LoginForm from "./loginForm";
import logo from "./images/gulalogo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage login form visibility
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
              <img
                src={logo}
                alt="Logo"
                className="w-auto h-10"
                style={{
                  objectFit: "contain",
                  maxHeight: "100%",
                }}
              />
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
