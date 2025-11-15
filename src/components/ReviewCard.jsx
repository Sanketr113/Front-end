// src/components/reviews/ReviewCard.jsx
import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;

  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${review.firstname}-${review.lastname}`;

  const displayText =
    review.review.length > maxLength && !expanded
      ? review.review.substring(0, maxLength) + "..."
      : review.review;

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-5 w-full">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatarUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full border"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-medium text-gray-900">
            {review.firstname} {review.lastname}
          </span>
          <span className="text-xs text-gray-500">Reviewed on {review.modified.split("T")[0]}</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>

      {/* Rating Stars */}
      <div className="flex items-center mt-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Truncated Review Text */}
      <p className="text-gray-700 text-sm">
        {displayText}
        {review.review.length > maxLength && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 ml-2 text-xs font-semibold hover:underline"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </p>
    </div>
  );
}
