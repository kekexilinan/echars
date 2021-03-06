
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// axios is an open source lib for async communication with server
const instance = axios.create({
  baseURL: `/api`,
});

// do something before send the request
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // add auth token here later
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// do something once we get the response
instance.interceptors.response.use(
  (value: AxiosResponse<any>) => {
    return value;
  },
  (error) => {
    console.log(error.response);
    if (error.response.data.message) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.response);
  }
);
export default instance;
