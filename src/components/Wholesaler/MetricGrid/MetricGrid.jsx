import { User } from "lucide-react";
import MetricCard from "../MetricCard/MetricCard";

const metrics = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-indigo-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M7 16V4M17 8v12M3 12h18M3 20h18" />
      </svg>
    ),
    title: "Total Sales",
    value: "$124,563",
    additionalText: "+12.5% from last month",
    color: "indigo",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-orange-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Pending Orders",
    value: "23",
    additionalText: "4 require immediate attention",
    color: "orange",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-red-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Low Stock Alerts",
    value: "7",
    additionalText: "Items need restock",
    color: "red",
  },
  {
    icon: <User className="w-6 h-6 text-green-600" />,
    title: "Active Customers",
    value: "1,284",
    additionalText: "+8% this week",
    color: "green",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}
