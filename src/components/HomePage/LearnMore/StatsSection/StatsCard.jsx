const StatsCard = ({ value, label, darkMode = false }) => {
  return (
    <div
      className={`p-6 rounded-lg ${
        darkMode ? "bg-purple-700" : "bg-white shadow-md"
      }`}
    >
      <div
        className={`text-4xl font-bold mb-2 ${
          darkMode ? "text-white" : "text-purple-600"
        }`}
      >
        {value}
      </div>
      <div
        className={`text-lg ${darkMode ? "text-purple-100" : "text-gray-600"}`}
      >
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
