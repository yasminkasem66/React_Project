import axios from "axios";

// common configuration in single instance
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FiYXIiLCJ1c2VySWQiOiI2MTlhY2I1OGI4ZTYyNzU5NTk1NTE1ZDYiLCJyb2xlIjoiYWRtaW4iLCJpbWFnZSI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wdWJsaWMvdXBsb2Fkcy9XaGF0c0FwcCBJbWFnZSAyMDIxLTExLTIyIGF0IDEyLjQxLjA5IEFNLmpwZWciLCJpYXQiOjE2MzgwNTM1MjQsImV4cCI6MTYzODEzOTkyNH0.ZJJjW36HjK-9KE-Eruii8mhE3x2VnJ1GJyZ9iELenJw";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});

// interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     // if (localStorage.getItem("token")) {
//     //     config.headers["autherization"] = localStorage.getItem("token");
//     // }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
