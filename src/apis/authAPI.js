import axios from "axios";
import { BASE_URL } from "./config";

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
