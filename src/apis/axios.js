import axios from "axios";

// request unify explore
const unitRequests = () => {
  // axios Config
  axios.defaults.timeout = 120000;
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  axios.defaults.headers.post["Content-type"] = "application/json";
  axios.defaults.headers.common.Accept = "application/json";

  // request interceptors
  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  // response interceptors
  axios.interceptors.response.use(
    (resolve) => Promise.resolve({ success: true, ...resolve.data }),
    (reject) =>
      Promise.resolve({
        success: false,
        data: null,
        message: reject.message ?? "",
      })
  );

  const getRequest = (url, params) => axios.get(url, params);
  const postRequest = (url, data, params) =>
    axios.post(url, JSON.stringify(data), params);
  const filePostRequest = (url, data) =>
    axios.post(url, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  const deleteRequest = (url, params) => axios.delete(url, { params });
  return {
    getRequest,
    postRequest,
    filePostRequest,
    deleteRequest,
  };
};

export default unitRequests;
