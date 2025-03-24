import { Package, Store, Users, HelpCircle } from "lucide-react";
import StatCard from "../StatCard/StatCard";

const stats = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Active Orders",
    value: "12",
    color: "blue",
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: "Followed Wholesalers",
    value: "28",
    color: "green",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Subscription Status",
    additionalText: "Premium Active",
    color: "purple",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Support",
    additionalText: "24/7 Available",
    color: "yellow",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}