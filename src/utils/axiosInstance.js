import axios from "axios";
import { API_BASE_URL } from "./constants";

// configured axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    response => response, error => {
        const status = error.response?.status;

        // redirecting to the login Page if the session is expired
        if (status === 401 && window.location.pathname !== "/login") {
            const currentPath = window.location.pathname;
            window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`
        }
        return Promise.reject(error)
    }
)
export default axiosInstance;