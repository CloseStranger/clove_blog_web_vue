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
  </div>
</template>

<style lang="less" scoped>
@import "index.less";
</style>
