<script setup>
import studyAreaState from "./state.js";
import studyAreaFunc from "./func.js";
import configClsNameInit from "../../utils/configClsName.js";
import { onMounted } from "vue";
import ArticleItem from "./articleItem/index.vue";
import SelfLoading from "../../components/SelfLoading/index.vue";

const configClsName = configClsNameInit("study-area");

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
  <div :class="configClsName('articles')">
    <ArticleItem
      v-for="item in articleList"
      :key="item.articleResId"
      :class="configClsName('article-item')"
    >
      <div>
        <h1>{{ item.title }}</h1>
        <span>{{ item.contentSummary }}</span>
        <div>ToolBar</div>
      </div>
      <div>
        <div>{{ item.coverImg }}</div>
      </div>
    </ArticleItem>
    <SelfLoading></SelfLoading>
  </div>
</template>

<style lang="less" scoped>
@prefixCls: study-area;
.@{prefixCls}{
  &-articles{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
  &-article-item{
    display: flex;
    flex-direction: row;
    width: 80%;
    min-height: 300px;
    border-bottom: 1px solid;
    border-radius: 4px;
    margin: 8px 0;
  }
}
</style>
