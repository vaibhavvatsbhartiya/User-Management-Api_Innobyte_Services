import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

const registerUser = async (userData) => {
  try {
    console.log('Sending data:', userData);
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Axios error:', error.response?.data || error.message);
    throw error;
  }
};

const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

const otpLogin = async (otpData) => {
  const response = await axios.post(`${API_URL}/otp-login`, otpData);
  return response.data;
};

const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updateUserProfile = async (userData, token) => {
  const response = await axios.put(`${API_URL}/profile`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export { registerUser, loginUser, otpLogin, getUserProfile, updateUserProfile };
