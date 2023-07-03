import apis from "../../apis/index.js";
import { toRefs } from "vue";
const studyAreaFunc = (stateInfo) => {
  const { getArticleList } = apis();
  const { state } = stateInfo;
  const stateAsRefs = toRefs(state);
  const { articleList } = stateAsRefs;

  const fetchArticleList = async () => {
    const { data } = await getArticleList();
    articleList.value = data;
    console.log(data);
  };

  return { fetchArticleList };
};
export default studyAreaFunc;
