import axios from 'axios';

// Configura Axios
const service = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Interceptor de solicitud para agregar el token JWT al encabezado de autorización
service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor de respuesta para manejar los errores de autenticación
service.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 401) {
    // manejar error de autenticación
  }
  return Promise.reject(error);
});

export default service;