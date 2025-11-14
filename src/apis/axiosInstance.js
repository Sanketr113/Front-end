import axios from "axios";

const api = axios.create({
    baseURL: "http://172.18.6.127:4000",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

export default api;
