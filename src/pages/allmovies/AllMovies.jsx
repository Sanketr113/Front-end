import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { getAllMovies, postReviews } from "../../apis/reviewAPI";
import { List, LayoutGrid } from "lucide-react";
import MovieCard from "../../components/MovieCardItem";
import MovieListItem from "../../components/MovieListItem";
import { motion } from "framer-motion";

const BANNER =
  "https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-thumb.jpg"; // update with your own banner

const AllMovies = () => {
  const [open, setOpen] = useState(false);
  const [form, setform] = useState({
    movie_id: "",
    rating: 0,
    review: "",
  });

  const [movie, setmovie] = useState("");
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("grid");

  const [blur, setBlur] = useState(0); // <-- adjustable blur value

  const loadReviews = async () => {
    setLoading(true);
    const response = await getAllMovies();

    if (response.status === "success") {
      setMovies(response.data);
    } else {
      toast.error("Failed to load reviews");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const addReview = (movie_id, title) => {
    setOpen(true);
    setmovie(title);
    setform({ ...form, movie_id });
  };

  const saveReview = () => {
    setOpen(false);
    postReviews(form);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* ---------- BACKGROUND BANNER ---------- */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BANNER})`,
          filter: `blur(${blur}px) brightness(0.6)`,
          transform: "scale(1.1)", // prevents cropping when blurred
        }}
      ></div>

      {/* ---------- WHITE OVERLAY FOR READABILITY ---------- */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative px-6 py-10">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-600 drop-shadow">
            Movies
          </h2>

          {/* View Switcher */}
          <div className="flex gap-2">
            <button
              className={`p-2 rounded-md border ${
                view === "grid"
                  ? "bg-gray-900 text-white"
                  : "bg-white backdrop-blur-sm"
              }`}
              onClick={() => setView("grid")}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              className={`p-2 rounded-md border ${
                view === "list"
                  ? "bg-gray-900 text-white"
                  : "bg-white backdrop-blur-sm"
              }`}
              onClick={() => setView("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* ---------- ADJUSTABLE BLUR SLIDER ---------- */}
        {/* <div className="mb-6 flex items-center gap-3">
          <span className="font-medium text-gray-700">Background Blur:</span>
          <input
            type="range"
            min="0"
            max="12"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
            className="range range-sm range-primary w-60"
          />
          <span className="text-gray-700">{blur}px</span>
        </div> */}

        {/* MOVIES GRID OR LIST */}
        {loading ? (
          <p>Loading...</p>
        ) : view === "grid" ? (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-items-center">
            {Movies.map((movie) => (
              <MovieCard
                key={movie.movie_id}
                movie={movie}
                addReview={addReview}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {Movies.map((movie) => (
              <MovieListItem
                key={movie.movie_id}
                movie={movie}
                addReview={addReview}
              />
            ))}
          </div>
        )}
      </div>

      {/* ---------- REVIEW MODAL ---------- */}
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 flex justify-center items-center p-4">
          <DialogPanel className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6">
            <DialogTitle className="text-xl font-bold mb-4">
              Review — {movie}
            </DialogTitle>

            {/* Rating */}
            <div className="rating mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <input
                  key={n}
                  type="radio"
                  value={n}
                  onChange={(e) => setform({ ...form, rating: e.target.value })}
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                />
              ))}
            </div>

            {/* Review Box */}
            <textarea
              className="textarea textarea-bordered w-full h-28"
              placeholder="Write your review..."
              onChange={(e) => setform({ ...form, review: e.target.value })}
            ></textarea>

            {/* Footer */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="bg-gray-200 px-4 py-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={saveReview}
              >
                Save Review
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default AllMovies;
