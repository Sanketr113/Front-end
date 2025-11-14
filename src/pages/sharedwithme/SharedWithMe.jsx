import React, { useState, useEffect } from "react";
import { getsharedwithme } from '../../apis/reviewAPI';
import ReviewCard from "../../components/ReviewCard";
import ReviewCardHorizontal from "../../components/ReviewCardHorizontal";

const SharedWithMe = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [view, setView] = useState("grid");

  const loadReviews = async () => {
    setLoading(true);

    const response = await getsharedwithme();

    if (response.status === "success") {
      setReviews(response.data);
    } else {
      toast.error("Failed to load reviews");
    }

    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);
  
      return (
          <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Reviews shared with you</h2>
          
                  <div className="btn-group">
                    <button
                      className={`btn btn-sm ${view === "grid" ? "btn-active" : ""}`}
                      onClick={() => setView("grid")}
                    >
                      Grid
                    </button>
                    <button
                      className={`btn btn-sm ${view === "list" ? "btn-active" : ""}`}
                      onClick={() => setView("list")}
                    >
                      List
                    </button>
                  </div>
                </div>
          
                {loading ? (
                  <p className="text-gray-500">Loading reviews...</p>
                ) : view === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r) => (
                      <ReviewCard key={r.rid} review={r} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {reviews.map((r) => (
                      <ReviewCardHorizontal key={r.rid} review={r} />
                    ))}
                  </div>
                )}
              </div>
      );
}

export default SharedWithMe