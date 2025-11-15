// components/reviews/MyReviewCard.jsx
import React, { useState } from "react";
import { Star, Share2, Pencil, Trash2, User2 } from "lucide-react";

const MyReviewCard = ({ review, onEdit, onShare, onDelete }) => {
    const [expanded, setExpanded] = useState(false);

    const MAX_LEN = 120;
    const isLong = review.review.length > MAX_LEN;
    const displayedText = expanded ? review.review : review.review.slice(0, MAX_LEN);

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg transition-all">
            <h1 className="text-lg font-semibold text-gray-900">{review.title}</h1>

            {/* Rating Stars */}
            <div className="flex items-center my-2">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed">
                {displayedText}
                {isLong && (
                    <span
                        onClick={() => setExpanded(!expanded)}
                        className="text-blue-600 cursor-pointer ml-2 hover:underline">
                        {expanded ? "Show less" : "...Show more"}
                    </span>
                )}
            </p>

            <p className="text-xs text-gray-400 mt-3">
                Modified: {review.modified.split("T")[0]}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-3">
                <button
                    onClick={() => onEdit(review)}
                    className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
                    title="Edit">
                    <Pencil size={18} className="text-blue-600" />
                </button>

                <button
                    onClick={() => onShare(review)}
                    className="p-2 rounded-full bg-green-50 hover:bg-green-100 transition"
                    title="Share">
                    <Share2 size={18} className="text-green-600" />
                </button>

                <button
                    onClick={() => onDelete(review)}
                    className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition"
                    title="Delete">
                    <Trash2 size={18} className="text-red-600" />
                </button>
            </div>
        </div>
    );
};

export default MyReviewCard;
