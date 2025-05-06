// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4040', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;