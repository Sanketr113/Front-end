import React from 'react'

const SharedWithMe = () => {
  const reviews = [
      {
          rid: 1,
          movie_id: 1,
          rating: 4,
          review: "very good movie",
          user_id: 1,
          modified: "2025-11-13T22:51:17.000Z",
          title: "Titanic",
          release_date: "1995-12-24T18:30:00.000Z",
          firstname: "Sanket",
          lastname: "Raut",
          email: "sanket@gmail.com",
      },
      {
          rid: 2,
          movie_id: 2,
          rating: 5,
          review: "very good movie",
          user_id: 1,
          modified: "2025-11-13T22:51:17.000Z",
          title: "Mission Impossible",
          release_date: "1995-12-24T18:30:00.000Z",
          firstname: "Sanket",
          lastname: "Raut",
          email: "sanket@gmail.com",
      },
      {
          rid: 3,
          movie_id: 1,
          rating: 5,
          review: "very nice movie",
          user_id: 2,
          modified: "2025-11-13T22:51:17.000Z",
          title: "Titanic",
          release_date: "1995-12-24T18:30:00.000Z",
          firstname: "Swaraj",
          lastname: "Raut",
          email: "swaraj@gmail.com",
      },

  ];

  return (
      <div>
          <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                      Shared With Me
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {reviews.map((review) => (
                          <div
                              key={review.rid}
                              className="group relative">
                              <div className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                                  <div className="p-6">
                                      <div>
                                          <h1 className="text-lg font-semibold">
                                              {review.title}
                                          </h1>
                                          <h3 className="font-semibold">
                                              Rating : {review.rating}
                                          </h3>
                                          <h3 className="font-semibold">
                                              Reviewed By :{" "}
                                              {review.firstname +
                                                  " " +
                                                  review.lastname}
                                          </h3>
                                          <h2 className="mt-2">
                                              {review.review}
                                          </h2>
                                          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                              Modified At:{" "}
                                              {review.modified.split("T")[0]}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );

}

export default SharedWithMe