// api.js

import axios from 'axios';

const BASE_API_URL = 'http://127.0.0.1:8000/api';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/login`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${BASE_API_URL}/logout`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/user`);
    return response;
  } catch (error) {
    throw error;
  }
};
