const StatsCard = ({ value, label }) => {
  return (
    <div className="p-6 rounded-lg bg-purple-700">
      <div className="text-4xl font-bold mb-2 text-white">{value}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;
