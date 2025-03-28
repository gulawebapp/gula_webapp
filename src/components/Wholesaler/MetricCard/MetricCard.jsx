export default function MetricCard({
  icon,
  title,
  value,
  additionalText,
  color,
}) {
  const colorClasses = {
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600" },
    red: { bg: "bg-red-50", text: "text-red-600" },
    green: { bg: "bg-green-50", text: "text-green-600" },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`p-2 ${colorClasses[color].bg} rounded-lg`}>{icon}</div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{value}</span>
            <span className={`text-sm ${colorClasses[color].text}`}>
              {additionalText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
