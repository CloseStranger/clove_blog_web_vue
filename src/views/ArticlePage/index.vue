<script setup>
import {
  computed,
  onMounted,
  reactive,
  toRefs,
  useTemplateRef,
  watch,
} from "vue";
import useApis from "../../apis";

const { getArticleList } = useApis();

const state = reactive({
  articleList: [],
});

const stateAsRefs = toRefs(state);

const { articleList } = stateAsRefs;

const formatArticleList = computed(() => {
  return articleList.value.map((e) => {
    return {
      ...e,
      elRef: useTemplateRef(`${e.articleResId}-${e.id}`),
    };
  });
});

const handleGetArticleList = async () => {
  const { data } = await getArticleList();
  articleList.value = [];
  articleList.value.push(...data);
};

const handleTurnToTargetSpan = (spanId) => {};

const onInit = () => {
  handleGetArticleList();
};

watch(formatArticleList, () => {
  console.log(formatArticleList.value);
});

onMounted(onInit);
</script>

<template>
  <div class="article-page" ref="input1">
    <div class="article-page-menu">
      <div class="article-page-menu-bg"></div>
      <div>
        <template
          v-for="articleItem in formatArticleList"
          :key="articleItem.id"
        >
          <div>
            <span>{{ articleItem.title }}</span>
          </div>
        </template>
      </div>
    </div>
    <div class="article-page-body">
      <template v-for="articleItem in formatArticleList" :key="articleItem.id">
        <div :ref="`${articleItem.articleResId}-${articleItem.id}`">
          <span>{{ articleItem.content }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.article-page {
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
  .article-page-menu {
    position: relative;
    width: 20%;
    height: 100%;
    .article-page-menu-bg {
      position: absolute;
      height: 100%;
      width: 100%;
      filter: blur(2px);
      z-index: -1;
    }
  }
  .article-page-body {
    width: 80%;
    height: 100%;
  }
}
</style>
