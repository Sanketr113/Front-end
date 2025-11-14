import React from "react";
import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import Card from "./../../../src/components/Card";

const MyReviews = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [form, setform] = useState({
        movie_id: "",
        rating: 0,
        review: "",
    });
    const [selectedEmails, setSelectedEmails] = useState([]);

    const [movie, setmovie] = useState();
    const [movie_id, setmovie_id] = useState();

    const editReview = (review, title) => {
        setOpen(true);
        setmovie(title);
        setform({
            movie_id: review.movie_id,
            rating: review.rating,
            review: review.review,
        });
    };

    const sharewith = (review, title) => {
        setOpen1(true);
        setmovie(title);
        setmovie_id(review.movie_id);
    };
    const saveReview = () => {
        setOpen(false);
        console.log(form);
    };
    const saveReview1 = () => {
        console.log(movie_id)
        console.log(selectedEmails);
        setOpen1(false);
    };


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
        {
            rid: 4,
            movie_id: 3,
            rating: 4,
            review: "my favourite",
            user_id: 2,
            modified: "2025-11-13T22:51:17.000Z",
            title: "The Golden Gun",
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
                        My Reviews
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

                                            <h2 className="mt-2">
                                                {review.review}
                                            </h2>
                                            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                                Modified At:
                                                {review.modified.split("T")[0]}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                editReview(review, review.title)
                                            }
                                            className="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer">
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="ml-3 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-red-600 hover:bg-red-700 cursor-pointer">
                                            Delete
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                sharewith(review, review.title)
                                            }
                                            className="mt-3 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-yellow-600 hover:bg-yellow-700 cursor-pointer">
                                            Share With Me
                                        </button>
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
                                            className="text-base font-semibold text-gray-900">
                                            {movie}
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">
                                                    Rating
                                                </legend>
                                                <input
                                                    type="text"
                                                    value={form.rating}
                                                    onChange={(e) => {
                                                        setform({
                                                            ...form,
                                                            rating: e.target
                                                                .value,
                                                        });
                                                    }}
                                                    className="input"
                                                    placeholder="Type here"
                                                />
                                            </fieldset>
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">
                                                    Review
                                                </legend>
                                                <textarea
                                                    className="textarea h-24"
                                                    value={form.review}
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
            <Dialog
                open={open1}
                onClose={setOpen1}
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
                                            className="text-base font-semibold text-gray-900">
                                            {movie}
                                        </DialogTitle>
                                        <div className="mt-4 space-y-2">
                                            {reviews.map((review) => (
                                                <label
                                                    key={review.rid}
                                                    className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value={review.email}
                                                        checked={selectedEmails.includes(
                                                            review.email
                                                        )}
                                                        onChange={(e) => {
                                                            const value =
                                                                e.target.value;
                                                            if (
                                                                selectedEmails.includes(
                                                                    value
                                                                )
                                                            ) {
                                                                setSelectedEmails(
                                                                    selectedEmails.filter(
                                                                        (v) =>
                                                                            v !==
                                                                            value
                                                                    )
                                                                );
                                                            } else {
                                                                setSelectedEmails(
                                                                    [
                                                                        ...selectedEmails,
                                                                        value,
                                                                    ]
                                                                );
                                                            }
                                                        }}
                                                        className="h-4 w-4"
                                                    />

                                                    <div>
                                                        <p className="font-medium">
                                                            {review.firstname}{" "}
                                                            {review.lastname}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {review.email}
                                                        </p>
                                                    </div>
                                                </label>
                                            ))}
                                            <div className="mt-4 text-sm text-gray-600">
                                                Selected:{" "}
                                                {selectedEmails.join(", ")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => saveReview1()}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen1(false)}
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

export default MyReviews;
