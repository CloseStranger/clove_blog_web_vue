<script setup>
import studyAreaState from "./state.js";
import studyAreaFunc from "./func.js";
import { onMounted } from "vue";
import ArticleItem from "./articleItem/index.vue";

const localState = studyAreaState();
const localFunc = studyAreaFunc(localState);

const { stateAsRefs } = localState;
const { articleList } = stateAsRefs;

const { fetchArticleList } = localFunc;

onMounted(fetchArticleList);
</script>

<script>
export default {
  name: "StudyArea",
};
</script>

<template>
  <div>
    <ArticleItem v-for="item in articleList" :key="item.articleResId">
      <span>{{ item.content }}</span>
    </ArticleItem>
  </div>
</template>

<style lang="less" scoped></style>
