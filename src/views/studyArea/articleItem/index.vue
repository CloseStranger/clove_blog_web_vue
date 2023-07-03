<script setup>
import configClsNameInit from "../../../utils/configClsName.js";

const configClsName = configClsNameInit("article-item");
</script>

<script>
export default {
  name: "ArticleItem",
};
</script>

<template>
  <div :class="configClsName('container')">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
@prefixCls: article-item;
.@{prefixCls}{
  &-container{
    background-color: #ffffff;
  }
}
</style>
