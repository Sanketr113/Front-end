import api from "./axiosInstance";
import { BASE_URL } from "./config";


export const getProfile = async () => {
  try {
    const response = await api.get(`${BASE_URL}/users/me`);
    return response.data;
  } catch (error) {
    return {
      status: "failed",
      error: error.response?.data || "Server error",
    };
  }
};

export const updateProfile = async ({
  firstname,
  lastname,
  email,
  mobile,
  birth,
}) => {
  try {
    const response = await api.put(`${BASE_URL}/users`, {
      firstname,
      lastname,
      email,
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

export const updatePassword = async (newPassword) => {
  try {
    const response = await api.post(`${BASE_URL}/users/changepassword`, {
      newPassword,
    });

    return response.data;
  } catch (error) {
    return {
      status: "failed",
      error: error.response?.data || "Server error",
    };
  }
};
