import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    // baseURL: 'https://8jx8wmjv-3000.asse.devtunnels.ms/api',
});