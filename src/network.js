import axios from "axios";

// common configuration in single instance
export const axiosInstance = axios.create({
    baseURL: "https://jumia-apis.herokuapp.com/api/v1",
});

// interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        if (localStorage.getItem("token")) {
            config.headers["autherization"] = localStorage.getItem("token");
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);