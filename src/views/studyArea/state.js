import { reactive, toRefs } from "vue";

const studyAreaState = () => {
  const state = reactive({
    articleList: [],
    page: 1,
    pageSize: 10,
  });

  const stateAsRefs = toRefs(state);

  return { state, stateAsRefs };
};
export default studyAreaState;
