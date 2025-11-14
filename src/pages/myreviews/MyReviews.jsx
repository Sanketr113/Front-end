import React, { useEffect, useState } from "react";
import { getMyReviews, updateReview, shareReview, getAllusers, deleteReview } from "../../apis/reviewAPI";
import { toast } from "react-toastify";

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import MyReviewCard from "../../components/MyReviewCard";
import ConfirmDelete from "../../components/ConfirmDelete";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([]);

    const [openEdit, setOpenEdit] = useState(false);
    const [openShare, setOpenShare] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const [selectedReview, setSelectedReview] = useState(null);

    const [form, setForm] = useState({ rating: "", review: "" });
    const [selectedUserIds, setSelectedUserIds] = useState([]);

    const loadReviews = async () => {
        const res = await getMyReviews();
        if (res.status === "success") setReviews(res.data);
        else toast.error("Failed to load your reviews");
    };

    const loadUsers = async () => {
        const res = await getAllusers();
        if (res.status === "success") setUsers(res.data);
        else toast.error("Failed to load users");
    };

    useEffect(() => {
        loadReviews();
        loadUsers();
    }, []);

    const editReview = (review) => {
        setSelectedReview(review);
        setForm({ rating: review.rating, review: review.review });
        setOpenEdit(true);
    };

    const saveReview = async () => {
        const res = await updateReview(selectedReview.rid, form.rating, form.review);

        if (res.status === "success") {
            toast.success("Review updated");
            setOpenEdit(false);
            loadReviews();
        } else toast.error("Failed to update review");
    };

    const openShareModal = (review) => {
        setSelectedReview(review);
        setSelectedUserIds([]);
        setOpenShare(true);
    };

    const saveShare = async () => {
        const res = await shareReview(selectedReview.rid, selectedUserIds);

        if (res.status === "success") {
            toast.success("Review shared");
            setOpenShare(false);
        } else toast.error("Failed to share review");
    };

    // Delete review
    const askDelete = (review) => {
        setSelectedReview(review);
        setOpenDelete(true);
    };

    const confirmDelete = async () => {
        const res = await deleteReview(selectedReview.rid);
        if (res.status === "success") {
            toast.success("Review deleted");
            setOpenDelete(false);
            loadReviews();
        } else toast.error("Failed to delete");
    };

    return (
        <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Reviews</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review) => (
                    <MyReviewCard
                        key={review.rid}
                        review={review}
                        onEdit={editReview}
                        onShare={openShareModal}
                        onDelete={askDelete}
                    />
                ))}
            </div>

            {/* Edit Modal */}
            <Dialog open={openEdit} onClose={setOpenEdit}>
                <DialogBackdrop className="fixed inset-0 bg-black/40" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">
                        <DialogTitle className="text-lg font-bold">Edit Review</DialogTitle>

                        <div className="mt-4">
                            <label className="font-medium">Rating</label>
                            <input
                                className="w-full mt-1 border p-2 rounded"
                                value={form.rating}
                                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                            />

                            <label className="font-medium mt-3 block">Review</label>
                            <textarea
                                className="w-full border p-2 rounded"
                                value={form.review}
                                onChange={(e) => setForm({ ...form, review: e.target.value })}
                            />
                        </div>

                        <div className="mt-5 flex justify-end gap-2">
                            <button className="px-4 py-2 bg-gray-100 rounded" onClick={() => setOpenEdit(false)}>
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={saveReview}>
                                Save
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Share Modal */}
            <Dialog open={openShare} onClose={setOpenShare}>
                <DialogBackdrop className="fixed inset-0 bg-black/40" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                        <DialogTitle className="text-lg font-bold">Share Review</DialogTitle>

                        <div className="mt-4 space-y-2">
                            {users.map((user) => (
                                <label
                                    key={user.uid}
                                    className="flex items-center gap-3 p-2 border rounded cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        value={user.uid}
                                        checked={selectedUserIds.includes(user.uid)}
                                        onChange={(e) => {
                                            const id = Number(e.target.value);
                                            setSelectedUserIds((prev) =>
                                                prev.includes(id)
                                                    ? prev.filter((v) => v !== id)
                                                    : [...prev, id]
                                            );
                                        }}
                                    />
                                    <div>
                                        <p className="font-medium">{user.firstname} {user.lastname}</p>
                                        <p className="text-xs text-gray-600">{user.email}</p>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="mt-5 flex justify-end gap-2">
                            <button className="px-4 py-2 bg-gray-100 rounded" onClick={() => setOpenShare(false)}>
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={saveShare}>
                                Share
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <ConfirmDelete open={openDelete} onClose={() => setOpenDelete(false)} onConfirm={confirmDelete} />
        </div>
    );
};

export default MyReviews;
