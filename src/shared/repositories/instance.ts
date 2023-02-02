import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://api.github.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

// axiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     if (response.status === 500) {

//     }

//     if (response.status === 200) {
//       return response.data;
//     }
//   },
// )

export const getInstance = (): AxiosInstance => axiosInstance;
