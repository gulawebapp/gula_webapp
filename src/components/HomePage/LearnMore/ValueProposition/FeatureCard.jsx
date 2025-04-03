const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
