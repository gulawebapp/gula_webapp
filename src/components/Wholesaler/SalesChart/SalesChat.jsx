import { Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 15000 },
  { name: "Mar", value: 14000 },
  { name: "Apr", value: 16500 },
  { name: "May", value: 15500 },
  { name: "Jun", value: 21000 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
      <div className="h-[300px]">
        <Line data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6366f1" />
        </Line>
      </div>
    </div>
  );
}
