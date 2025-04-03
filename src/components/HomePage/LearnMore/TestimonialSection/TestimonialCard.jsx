const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="text-2xl mb-4 text-purple-600">"</div>
      <p className="text-lg italic mb-6">{quote}</p>
      <p className="font-semibold">— {author}</p>
    </div>
  );
};

export default TestimonialCard;
