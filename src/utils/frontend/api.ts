import axios from 'axios';
import { AXIOS_PREFIX_URL } from '../getEnvVariable';
console.log('URL', AXIOS_PREFIX_URL);
const api = axios.create({
  baseURL: AXIOS_PREFIX_URL, // Change this to your desired prefix
});

// Request Interceptor (Optional: Add headers, auth, etc.)
api.interceptors.request.use(
  (config) => {
    console.log(`Making request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor (Optional: Handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default api;
