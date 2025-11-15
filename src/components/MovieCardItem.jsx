import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie, addReview }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="
        relative aspect-[3/4] 
        w-[160px]               /* smaller width */
        sm:w-[180px] 
        md:w-[200px] 
        rounded-xl overflow-hidden 
        shadow-md cursor-pointer group
      "
    >
      {/* Background Poster */}
      <img
        src={movie.poster_url}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Bottom Details */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white text-base font-semibold drop-shadow-md">
          {movie.title}
        </h3>

        <p className="text-gray-300 text-xs mt-1 drop-shadow-md">
          {movie.release_date.split("T")[0]}
        </p>

        <button
          onClick={() => addReview(movie.movie_id, movie.title)}
          className="mt-2 bg-white/90 text-black font-medium px-3 py-1.5 rounded-md w-full text-center hover:bg-white transition text-sm"
        >
          Review
        </button>
      </div>
    </motion.div>
  );
};

export default MovieCard;
