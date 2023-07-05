import apis from "../../apis/index.js";
const studyAreaFunc = (stateInfo) => {
  const { getArticleList } = apis();
  const { stateAsRefs } = stateInfo;
  const { articleList, loading } = stateAsRefs;

  const fetchArticleList = async () => {
    loading.value = true;
    const { data } = await getArticleList();
    articleList.value = data;
    console.log(data);
    loading.value = false;
  };

  return { fetchArticleList };
};
export default studyAreaFunc;
