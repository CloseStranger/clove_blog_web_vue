<script setup>
import welcomePageConstants from "./constants.js";
import configClsNameInit from "../../utils/configClsName.js";
import { useRouter } from "vue-router";

import HomeBgImg from "../../assets/jpg/home_bg_img.jpg";

const { prefixCls, operationItems } = welcomePageConstants();

const configClsName = configClsNameInit(prefixCls);
const router = useRouter();

const handleTurnToHomePage = () => {
  router.push({ name: "Setting" });
};
</script>

<script>
export default {
  name: "WelcomePage",
};
</script>

<template>
  <div :class="configClsName('container')">
    <div :class="configClsName('mask')"></div>
    <img :src="HomeBgImg" alt="BgImg" :class="configClsName('bg-img')" />
    <div :class="configClsName('content')">
      <div :class="configClsName('top-bar')">
        <div
          v-for="item in operationItems"
          :key="item.id"
          :class="configClsName('top-bar-item')"
        >
          <span :class="configClsName('top-bar-item-span1')">{{
            item.label
          }}</span>
          <span :class="configClsName('top-bar-item-span2')">Go</span>
        </div>
      </div>
      <div :class="configClsName('welcome-bar')">
        <span :class="configClsName('title')">Welcome</span>
        <span :class="configClsName('blog-user')">ZZA 的博客</span>
      </div>
      <span :class="configClsName('start')" @click="handleTurnToHomePage"
        >Start Explore</span
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
