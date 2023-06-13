<script setup>
import welcomePageConstants from './constants.js';
import configClsNameInit from '../../utils/configClsName.js';
import {useRouter} from 'vue-router';

const {prefixCls} = welcomePageConstants();

const configClsName = configClsNameInit(prefixCls);
const router = useRouter();

const handleTurnToHomePage = () => {
  router.push({name: 'Setting'});
};
</script>

<script>
export default {
  name: 'WelcomePage',
};
</script>

<template>
  <div :class="configClsName('container')">
    <div :class="configClsName('welcome-bar')">
      <span :class="configClsName('title')">Welcome</span>
      <span :class="configClsName('blog-user')">ZZA 的博客</span>
    </div>
    <span :class="configClsName('start')" @click="handleTurnToHomePage"
      >Start Explore</span
    >
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
