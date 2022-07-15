import axios from "axios";
import queryString from "query-string";

const AxiosConfig = axios.create({
  baseURL: process.env.baseURL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params:any) => queryString.stringify(params),
});

AxiosConfig.interceptors.request.use(
  async (request:any) => {
    if (localStorage.getItem("accessToken")) {
      request.headers.token = `JWT ${localStorage.getItem("accessToken")}`;
    }

    return request;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);
AxiosConfig.interceptors.response.use(
  (response:any) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

export default AxiosConfig;
