const axios = require("axios").default;

// 创建 axios 实例
const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // config: { method, url, data, headers, timeout, withCredentials, adapter, transformRequest, transformResponse, xsrfCookieName, xsrfHeaderName, maxContentLength, validateStatus }
    return config;
  },
  (error) => {
    // Do something with request error
    // error: { config, code, request, response, isAxiosError, toJSON }
    // interceptor request error
    console.log("interceptor request error", error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // Do something with response data
    // response: { data, status, statusText, headers, config, request }
    return response;
  },
  (error) => {
    // Do something with response error
    // error: { config, code, request, response, isAxiosError, toJSON }
    // interceptor response error
    console.log("interceptor response error", error);
    return Promise.reject(error);
  }
);

// 导出 axios 实例
module.exports = instance;
