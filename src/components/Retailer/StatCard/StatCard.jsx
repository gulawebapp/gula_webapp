export default function StatCard({ icon, title, value, additionalText, color }) {
    const colorClasses = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 p-2 ${colorClasses[color].bg} ${colorClasses[color].text} rounded-lg`}>
            {icon}
          </div>
          <div>
            <p className="text-gray-500">{title}</p>
            {additionalText ? (
              <p className={`text-sm ${colorClasses[color].text} font-medium`}>
                {additionalText}
              </p>
            ) : (
              <p className="text-2xl font-bold">{value}</p>
            )}
          </div>
        </div>
      </div>
    );
  }