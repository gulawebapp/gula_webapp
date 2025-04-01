import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "./images/gulawhite.png";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white py-8 sm:py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {" "}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-auto h-10 filter contrast-150 brightness-90 hover:brightness-100 hover:shadow-2xs"
              loading="lazy"
            />
            <p className="text-gray-400 mb-4 text-xs sm:text-sm pt-4">
              {" "}
              Your trusted B2B marketplace connecting wholesalers and retailers
              globally.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-circle.png"
                  alt="Instagram"
                  className="hover:opacity-80"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin.png"
                  alt="LinkedIn"
                  className="hover:opacity-80"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png"
                  alt="Facebook"
                  className="hover:opacity-80"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white text-xs sm:text-sm">
                {" "}
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-gray-400 hover:text-white text-xs sm:text-sm">
                {" "}
                <Link to="/services">Our Services</Link>
              </li>
              <li className="text-gray-400 hover:text-white text-xs sm:text-sm">
                {" "}
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm" // Reduced font size
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          {" "}
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0">
            {" "}
            &copy; 2024 Gula. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
