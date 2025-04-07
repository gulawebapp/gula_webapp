import { useState } from "react";
import Button from "../../../common/button";
import image1 from "./images/retailer.webp";
import image2 from "./images/wholesaler.webp";
import LoginForm from "../../../common/loginForm";

const wholesalerContent = {
  title: "Wholesalers: Expand Your Reach",
  items: [
    "Showcase your products to thousands of retailers",
    "Digital order management system",
    "Real-time inventory synchronization",
    "Detailed sales analytics and reporting",
  ],
  buttonText: "Wholesaler Sign Up",
  imageSrc: image2,
};

const retailerContent = {
  title: "Retailers: Stock Smarter, Not Harder",
  items: [
    "Access to hundreds of verified wholesalers in one place",
    "Bulk ordering with volume discounts",
    "Automated inventory tracking and reordering",
    "Integrated payment and delivery tracking",
  ],
  buttonText: "Retailer Sign Up",
  imageSrc: image1,
};

const UserTypeTabs = () => {
  const [activeTab, setActiveTab] = useState("retailers");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="flex border rounded-lg overflow-hidden">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "retailers"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("retailers")}
            >
              For Retailers
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "wholesalers"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab("wholesalers")}
            >
              For Wholesalers
            </button>
          </div>
        </div>

        {activeTab === "retailers" ? (
          <TabContent {...retailerContent} />
        ) : (
          <TabContent {...wholesalerContent} reverse />
        )}
      </div>
    </section>
  );
};

const TabContent = ({ title, items, buttonText, reverse, imageSrc }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
};

export default UserTypeTabs;
