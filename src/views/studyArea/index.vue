<script setup>
import ArticleItem from "./articleItem/index.vue";
import SelfLoading from "../../components/SelfLoading/index.vue";
import SelfImage from "../../components/SelfImage/index.vue";

import CoverTestImg from "../../assets/jpg/cover_test_img.jpg";
import UpdateTimeIcon from "../../assets/svg/timeIcon.svg";
import TagIcon from "../../assets/svg/tagIcon.svg";

import studyAreaState from "./state.js";
import studyAreaFunc from "./func.js";
import configClsNameInit from "../../utils/configClsName.js";
import timeFunc from "../../utils/timeFunc.js";
import { onMounted } from "vue";

const configClsName = configClsNameInit("study-area");
const { timeInterValCalculate } = timeFunc();

const localState = studyAreaState();
const localFunc = studyAreaFunc(localState);

const { stateAsRefs } = localState;
const { articleList, loading } = stateAsRefs;

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
      <div :class="configClsName('article-item-content')">
        <div :class="configClsName('article-item-content-area')">
          <h1 :class="configClsName('article-item-content-area-title')">
            {{ item.title }}
          </h1>
          <span
            >{{ item.contentSummary }}
            <span>123123123</span>
          </span>
        </div>
        <div :class="configClsName('article-item-content-tool-bar')">
          <div
            :class="configClsName('article-item-content-tool-bar-update-time')"
          >
            <img :src="UpdateTimeIcon" alt="updateIcon" />
            <span>{{ timeInterValCalculate(item.updateTime) }}</span>
          </div>
          <template v-if="item.tags?.length">
            <img :src="TagIcon" alt="tagIcon" />
            <div :class="configClsName('article-item-content-tool-bar-tags')">
              <div
                v-for="(tagItem, index) in item.tags"
                :key="tagItem.id"
                :class="
                  configClsName('article-item-content-tool-bar-tags-item')
                "
              >
                <span v-if="index !== 0">、</span>
                <span
                  :class="
                    configClsName(
                      'article-item-content-tool-bar-tags-item-label'
                    )
                  "
                >
                  {{ tagItem.tagLabel }}
                </span>
              </div>
            </div>
          </template>
          <template v-if="item.category?.length">
            <div>类别</div>
          </template>
        </div>
      </div>
      <div :class="configClsName('article-item-cover')">
        <SelfImage
          :src="CoverTestImg"
          width="100%"
          height="100%"
          image-fit-position="top"
        ></SelfImage>
      </div>
    </ArticleItem>
    <SelfLoading :loading="loading"></SelfLoading>
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
