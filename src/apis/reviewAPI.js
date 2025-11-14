import api from "./axiosInstance";

export const getAllReviews = async () => {
    try {
        const response = await api.get("/reviews");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("getAllReviews ERROR:", error);
        return {
            status: "failed",
            error: error.response?.data || error.message,
        };
    }
};

export const getAllusers = async () => {
    try {
        const response = await api.get("/users");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("getAllReviews ERROR:", error);
        return {
            status: "failed",
            error: error.response?.data || error.message,
        };
    }
};

export const getsharedwithme = async () => {
    try {
        const response = await api.get("/users/shared-reviews");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("getsharedwithme ERROR:", error);
        return {
            status: "failed",
            error: error.response?.data || error.message,
        };
    }
};

export const getMyReviews = async () => {
    try {
        const res = await api.get("/users/reviews");
        return res.data;
    } catch (err) {
        console.error("getMyReviews ERROR:", err);
        return { status: "failed", error: err.response?.data || err.message };
    }
};

export const updateReview = async (rid, rating, review) => {
    try {
        const res = await api.put(`/reviews/${rid}`, { rating, review });
        return res.data;
    } catch (err) {
        console.error("updateReview ERROR:", err);
        return { status: "failed", error: err.response?.data || err.message };
    }
};

export const shareReview = async (reviewId, userIds) => {
    try {
        const res = await api.post("/reviews/share", {
            reviewId,
            userIds,
        });
        return res.data;
    } catch (err) {
        console.error("shareReview ERROR:", err);
        return { status: "failed", error: err.response?.data || err.message };
    }
};

export const postReviews = async (data) => {
    try {
        const response = await api.post("/reviews",data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("getAllReviews ERROR:", error);
        return {
            status: "failed",
            error: error.response?.data || error.message,
        };
    }
};

export const getAllMovies = async () => {
    try {
        const response = await api.get("/movies");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("getAllReviews ERROR:", error);
        return {
            status: "failed",
            error: error.response?.data || error.message,
        };
    }
};