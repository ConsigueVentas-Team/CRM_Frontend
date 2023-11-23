import { getCookie, removeCookie, setCookie } from "@/lib/utils";
import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/app/",
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function refreshTokenAndRetryRequest(originalRequest: AxiosRequestConfig<any>) {
  const refreshToken = getCookie("refreshToken");

  try {
    const response = await api.post("/refresh-token", { refreshToken });

    if (response.data.access) {
      setCookie("accessToken", response.data.access, 1);
      api.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
      return api(originalRequest);
    }
  } catch (err) {
    console.error("Error al refrescar el token", err);
  }

  // Si el refresco del token falla, redirige al usuario a la página de inicio de sesión
  removeCookie("accessToken");
  window.location.href = "/login";
}

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshTokenAndRetryRequest(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default api;