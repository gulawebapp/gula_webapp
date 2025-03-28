import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="w-4 h-4" />
      ))}
      {hasHalfStar && <FaStarHalfAlt key="half" className="w-4 h-4" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="w-4 h-4" />
      ))}
    </div>
  );
};

export default RatingStars;
