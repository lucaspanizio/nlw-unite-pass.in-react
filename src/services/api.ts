import axios, { AxiosError } from 'axios';
import { eventIdInterceptor } from './interceptors/eventId';

const api = axios.create({
  baseURL: import.meta.env.VITE_URL_API ?? 'http://localhost:3333/',
});

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

api.interceptors.request.use(eventIdInterceptor, onRequestError);

export default api;
