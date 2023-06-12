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
    <h1 :class="configClsName('title')">Welcome</h1>
    <span :class="configClsName('start')" @click="handleTurnToHomePage"
      >Start Explore</span
    >
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
