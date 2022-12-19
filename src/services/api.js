import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        authorization: 'ola'
    }
})

export default api