import React, { useState, useEffect } from "react";
import { getsharedwithme } from '../../apis/reviewAPI';

const SharedWithMe = () => {
  const [reviews, setReviews] = useState([]);
      const [loading, setLoading] = useState(true);
  
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
          <div>
              <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                          Shared Reviews
                      </h2>
  
                      {loading ? (
                          <p className="mt-6 text-gray-500">Loading reviews...</p>
                      ) : (
                          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                              {reviews.map((review) => (
                                  <div
                                      key={review.rid}
                                      className="group relative">
                                      <div className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                                          <div className="p-6">
                                              <h1 className="text-lg font-semibold">
                                                  {review.title}
                                              </h1>
  
                                              <h3 className="font-semibold">
                                                  Rating: {review.rating}
                                              </h3>
  
                                              <h3 className="font-semibold">
                                                  Reviewed By: {review.firstname}{" "}
                                                  {review.lastname}
                                              </h3>
  
                                              <p className="mt-2">
                                                  {review.review}
                                              </p>
  
                                              <p className="mt-2 text-sm text-slate-500">
                                                  Modified At:{" "}
                                                  {review.modified.split("T")[0]}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>
              </div>
          </div>
      );
}

export default SharedWithMe