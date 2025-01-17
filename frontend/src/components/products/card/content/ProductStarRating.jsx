import { FaRegStar, FaStar  } from "react-icons/fa";

export default function ProductStarRating({ rating, totalStars = 5 }) {
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < rating ? (
      <FaStar key={index} className="text-orange-400 text-xl" />
    ) : (
      <FaRegStar key={index} className="text-gray-400 text-xl" />
    );
  });
  return <div className="flex">{stars}</div>;
}