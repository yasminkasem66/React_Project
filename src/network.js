import axios from "axios";

// common configuration in single instance
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGFtYWR5IiwidXNlcklkIjoiNjE5YWNiZGRiOGU2Mjc1OTU5NTUxNWRiIiwicm9sZSI6ImFkbWluIiwiaW1hZ2UiOiJodHRwczovL2p1bWlhLWFwaXMuaGVyb2t1YXBwLmNvbS9wdWJsaWMvdXBsb2Fkcy9XaGF0c0FwcCBJbWFnZSAyMDIxLTExLTIyIGF0IDEyLjM3LjQ4IEFNLmpwZWciLCJpYXQiOjE2Mzc5NTcyNDEsImV4cCI6MTYzODA0MzY0MX0.KMVaPt1FblKya_s0kPc7-HLOgYRGMR8hH6KmU0nxAHI";

export const axiosInstance = axios.create({
  baseURL: "https://jumia-apis.herokuapp.com/api/v1",
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
