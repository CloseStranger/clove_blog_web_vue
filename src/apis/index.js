import unitRequests from "./axios.js";

const useApis = () => {
  const { getRequest } = unitRequests();

  const getArticleList = () => {
    return getRequest("/article/list");
  };

  return {
    getArticleList,
  };
};

export default useApis;
