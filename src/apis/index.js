import unitRequests from './axios.js';

const apis = () => {
  const {getRequest} = unitRequests();

  const helloTest = (params) => {
    return getRequest('/hello', params);
  };
  const userTest = (params) => {
    return getRequest('/user', params);
  };

  const getArticleList = () => {
    return getRequest('/article/list');
  };

  return {
    helloTest,
    userTest,
    getArticleList,
  };
};

export default apis;
