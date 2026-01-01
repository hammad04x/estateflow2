// src/api/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4500/',
});

// attach tokens
api.interceptors.request.use((config) => {
  const access = localStorage.getItem('accessToken');
  const refresh = localStorage.getItem('refreshToken');

  if (access) config.headers.Authorization = `Bearer ${access}`;
  if (refresh) config.headers['x-refresh-token'] = refresh;

  return config;
});

// response interceptor attempts refresh on 401
api.interceptors.response.use(
  res => res,
  async (error) => {
    const originalRequest = error.config;

    // don't retry login
    if (originalRequest.url === "/login") {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) throw new Error("No refresh token");

        const r = await axios.post(
          "http://localhost:4500/refresh-token",
          { refreshToken: refresh }
        );

        localStorage.setItem("accessToken", r.data.accessToken);
        originalRequest.headers.Authorization =
          `Bearer ${r.data.accessToken}`;

        return api(originalRequest);
      } catch (e) {
        // ❌ NO redirect here
        localStorage.clear();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);


export default api;
