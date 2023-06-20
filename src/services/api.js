import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
})

const requestIntercepter = (config) => {
    config.headers.Authorization =
        "Bearer " + localStorage.getItem("token");
    return config;
}

api.interceptors.request.use(requestIntercepter);
export default api