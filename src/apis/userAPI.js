import axios from "axios";

const BASE_URL = "http://172.18.6.127:4000"; 

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, {
            email,
            password,
        });

        return response.data; 
    } catch (error) {
        return {
            status: "failed",
            error: error.response?.data || "Server error",
        };
    }
};


export const register = async (
    firstname,
    lastname,
    email,
    password,
    mobile,
    birth
) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/register`, {
            firstname,
            lastname,
            email,
            password,
            mobile,
            birth,
        });

        return response.data;
    } catch (error) {
        return {
            status: "failed",
            error: error.response?.data || "Server error",
        };
    }
};
