import React, { useEffect } from "react";
import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { getAllMovies, postReviews } from "../../apis/reviewAPI";

const AllMovies = () => {
    const [open, setOpen] = useState(false);

    const [form, setform] = useState({
        movie_id: "",
        rating: 0,
        review: "",
    });

    const [movie, setmovie] = useState();

    // const Movies = [
    //     {
    //         movie_id: 1,
    //         title: "Titanic",
    //         release_date: "1995-12-24T18:30:00.000Z",
    //     },
    //     {
    //         movie_id: 2,
    //         title: "Mission Impossible",
    //         release_date: "1995-12-24T18:30:00.000Z",
    //     },
    //     {
    //         movie_id: 3,
    //         title: "The Golden Gun",
    //         release_date: "1995-12-24T18:30:00.000Z",
    //     },
    // ];

    const [Movies, setMovies] = useState([]);

        const [loading, setLoading] = useState(true);
    
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
        setform({
            ...form,
            movie_id: movie_id,
        });
    };

    const onHandeloptionchange = (e) => {
        setform({
            ...form,
            rating: e.target.value,
        });
    };

    const saveReview = () => {
        setOpen(false);
        console.log(form);
        postReviews(form);
    };
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        All Movies
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {Movies.map((movie) => (
                            <div
                                key={movie.movie_id}
                                className="group relative">
                                <div className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                                    <div className="p-6">
                                        <div>
                                            <h1 className="text-lg font-semibold">
                                                {movie.title}
                                            </h1>
                                            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                                Modified At:{" "}
                                                {
                                                    movie.release_date.split(
                                                        "T"
                                                    )[0]
                                                }
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    addReview(
                                                        movie.movie_id,
                                                        movie.title
                                                    )
                                                }
                                                className="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                                Review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                onClose={setOpen}
                className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold text-gray-900">{ movie}</DialogTitle>
                                        <div className="mt-2">
                                            <div className="rating">
                                                <input
                                                    type="radio"
                                                    value="1"
                                                    onChange={
                                                        onHandeloptionchange
                                                    }
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    aria-label="1 star"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    value="2"
                                                    onChange={
                                                        onHandeloptionchange
                                                    }
                                                    className="mask mask-star-2 bg-orange-400"
                                                    aria-label="2 star"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    value="3"
                                                    onChange={
                                                        onHandeloptionchange
                                                    }
                                                    className="mask mask-star-2 bg-orange-400"
                                                    aria-label="3 star"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    value="4"
                                                    onChange={
                                                        onHandeloptionchange
                                                    }
                                                    className="mask mask-star-2 bg-orange-400"
                                                    aria-label="4 star"
                                                />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    value="5"
                                                    onChange={
                                                        onHandeloptionchange
                                                    }
                                                    className="mask mask-star-2 bg-orange-400"
                                                    aria-label="5 star"
                                                />
                                            </div>
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">
                                                    Review
                                                </legend>
                                                <textarea
                                                    className="textarea h-24"
                                                    onChange={(e) => {
                                                        setform({
                                                            ...form,
                                                            review: e.target
                                                                .value,
                                                        });
                                                    }}
                                                    placeholder="Review"></textarea>
                                                <div className="label">
                                                    Review
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => saveReview()}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default AllMovies;
