import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastifySuccess = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        closeButton: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};

export const toastifyError = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        closeButton: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const toastifyWarn = (message) => {
    toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        closeButton: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

