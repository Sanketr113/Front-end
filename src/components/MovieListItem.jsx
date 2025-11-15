import React from "react";

const MovieListItem = ({ movie, addReview }) => {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:bg-gray-50">
      <img
        src={movie.poster_url}
        alt={movie.title}
        className="w-20 h-28 object-cover rounded-md"
      />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-gray-500">
          Release: {movie.release_date.split("T")[0]}
        </p>
      </div>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        onClick={() => addReview(movie.movie_id, movie.title)}
      >
        Review
      </button>
    </div>
  );
};

export default MovieListItem;
