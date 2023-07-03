import unitRequests from "./axios.js";

const apis = () => {
  const { getRequest } = unitRequests();

  const getArticleList = () => {
    return getRequest("/article/list");
  };

  return {
    getArticleList,
  };
};

export default apis;
