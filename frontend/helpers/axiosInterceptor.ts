import axios from 'axios';

const axiosInterceptor = axios.create({ withCredentials: true });

// Response interceptor for API calls
axiosInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && error.response.data.message === 'jwt expired' && !originalRequest._retry) {
      originalRequest._retry = true;

      await axiosInterceptor.post('http://localhost:5000/api/v1/auth/refreshtoken');

      return axiosInterceptor(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
