// components/ImpactSection.js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const businessData = [
  { year: "2019", revenue: 3000, profit: 1400 },
  { year: "2020", revenue: 4500, profit: 2000 },
  { year: "2021", revenue: 5200, profit: 2400 },
  { year: "2022", revenue: 6800, profit: 3100 },
  { year: "2023", revenue: 8500, profit: 3800 },
];

export const ImpactSection = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-black uppercase tracking-wide mb-2">
            Our Impact
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Business Statistics
          </p>
        </div>
        <div className="w-full h-64 md:h-96 bg-white rounded-lg shadow p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={businessData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
              <Bar dataKey="profit" fill="#82ca9d" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
