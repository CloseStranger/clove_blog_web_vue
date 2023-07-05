import { computed, reactive, toRefs } from "vue";

const studyAreaState = () => {
  const state = reactive({
    articleList: [],
    page: 1,
    pageSize: 10,
    loading: false,
  });

  const stateAsRefs = toRefs(state);

  const mobileJudge = computed(() => {
    const platFormJudgeReg = new RegExp("Mobi|Android|iPhone", "i");
    return platFormJudgeReg.test(navigator.userAgent);
  });

  return { state, stateAsRefs, mobileJudge };
};
export default studyAreaState;
