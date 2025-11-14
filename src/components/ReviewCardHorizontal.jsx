// src/components/reviews/ReviewCardHorizontal.jsx
import { useState } from "react";
import { Star } from "lucide-react";

export default function ReviewCardHorizontal({ review }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 180;

  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${review.firstname}-${review.lastname}`;

  const displayText =
    review.review.length > maxLength && !expanded
      ? review.review.substring(0, maxLength) + "..."
      : review.review;

  return (
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-5 flex gap-5 items-start w-full">
      
      {/* Avatar */}
      <img
        src={avatarUrl}
        alt="avatar"
        className="w-14 h-14 rounded-full border mt-1"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{review.title}</h3>

          {/* Rating */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-1">
          Reviewed by{" "}
          <span className="font-medium text-gray-800">
            {review.firstname} {review.lastname}
          </span>{" "}
          on {review.modified.split("T")[0]}
        </p>

        {/* Review Text */}
        <p className="mt-2 text-gray-700 text-sm">
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
    </div>
  );
}
