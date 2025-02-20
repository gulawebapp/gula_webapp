import { lazy, Suspense, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../images/happy.webp";
import electronics from "../images/electronics.webp";
import cosmetics from "../images/cosmetics.webp";
import fashion from "../images/fashion.webp";
import goods from "../images/goods.webp";
import logo from "../images/logo.png";
import world from "../images/world.webp";
import { Link } from "react-router-dom";

// Lazy load non-critical sections
const LazyTeamSection = lazy(() => import("../components/TeamSection"));
const LazyGlobalPresence = lazy(() => import("../components/GlobalPresence"));

const categories = [
  { name: "Electronics", image: electronics },
  { name: "Fashion", image: fashion },
  { name: "Home Goods", image: goods },
  { name: "Beauty", image: cosmetics },
];

const HomePage = () => {
  // Memoize features to prevent unnecessary re-renders
  const features = useMemo(
    () => [
      {
        title: "Worldwide Shipping",
        description: "Delivery to 190+ countries",
        icon: "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/external-worldwide-shipping-ecommerce-vitaliy-gorbachev-fill-vitaly-gorbachev.png",
      },
      {
        title: "24/7 Support",
        description: "Round the clock assistance",
        icon: "https://img.icons8.com/external-prettycons-solid-prettycons/60/external-support-communications-prettycons-solid-prettycons-1.png",
      },
      {
        title: "Secure Shopping",
        description: "100% secure payments",
        icon: "https://img.icons8.com/ios-filled/50/keyhole-shield.png",
      },
      {
        title: "Easy Returns",
        description: "30-day money back",
        icon: "https://img.icons8.com/external-victoruler-outline-victoruler/64/external-return-box-logistics-victoruler-outline-victoruler.png",
      },
    ],
    []
  );

  return (
    <div className="w-full bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 shadow-sm bg-white z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="w-24 h-24 items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-auto filter contrast-150 brightness-125 text-white"
              loading="lazy"
              width="96"
              height="96"
            />
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>

            <a href="#" className="text-gray-600 hover:text-gray-900">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <button className="px-3 py-1 sm:px-4 sm:py-2 border border-black rounded-md text-sm font-medium">
              Sign In
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 bg-black text-white rounded-md text-sm font-medium">
              Join Us
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-5">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} feature={feature} />
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Featured Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Suspense fallback={<div>Loading Team...</div>}>
          <LazyTeamSection />
        </Suspense>

        {/* Global Presence */}
        <Suspense fallback={<div>Loading Global Presence...</div>}>
          <LazyGlobalPresence world={world} />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-full h-auto filter contrast-150 brightness-90"
                loading="lazy"
                width="96"
                height="96"
              />
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Your trusted B2B marketplace connecting wholesalers and
                retailers globally.
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
                <li className="text-gray-400 hover:text-white text-sm sm:text-base">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-gray-400 hover:text-white text-sm sm:text-base">
                  <Link to="/services">Our Services</Link>
                </li>
                <li className="text-gray-400 hover:text-white text-sm sm:text-base">
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
                    className="text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0">
              &copy; 2024 Gula. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Animated Hero Section
const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-100 to-transparent py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Connect Wholesalers
            <br />
            with Retailers
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            Join our global B2B marketplace connecting wholesalers and retailers
            worldwide. Experience seamless trade partnerships.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-md text-base sm:text-lg font-medium shadow-lg">
              Start Trading
            </button>
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black border-2 border-black rounded-md text-base sm:text-lg font-medium shadow-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={img1}
            alt="Hero Image"
            className="rounded-lg w-full"
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </div>
    </motion.section>
  );
};

// Animated Feature Component
const Feature = ({ feature }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  Feature.propTypes = {
    feature: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex items-center"
    >
      <div className="mr-4">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-[50px] h-[50px]"
          loading="lazy"
          width="50"
          height="50"
        />
      </div>
      <div>
        <h3 className="font-semibold">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

// Animated Category Card Component
const CategoryCard = ({ category }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  CategoryCard.propTypes = {
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-contain"
        loading="lazy"
        width="300"
        height="200"
      />
      <div className="p-4 sm:p-6">
        <h3 className="font-semibold text-lg sm:text-xl mb-2">
          Wholesale {category.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Bulk {category.name.toLowerCase()} and accessories
        </p>
      </div>
    </motion.div>
  );
};

export default HomePage;
