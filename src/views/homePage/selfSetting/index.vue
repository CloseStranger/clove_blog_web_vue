<script setup>
import {Button} from 'view-ui-plus';
import apis from '../../../apis/index.js';

const {getArticleList} = apis();

const testClick = async () => {
  const {data} = await getArticleList();
};
</script>

<script>
export default {
  name: 'SelfSetting',
};
</script>

<template>
  <div>
    <div>SelfSetting</div>
    <Button @click="testClick">测试</Button>
  </div>
</template>

<style lang="less" scoped>
@import "index";
</style>
