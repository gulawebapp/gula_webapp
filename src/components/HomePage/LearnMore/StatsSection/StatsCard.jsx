const StatsCard = ({ value, label }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-300">
      <div className="text-4xl font-bold mb-2 text-white">{value}</div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;
