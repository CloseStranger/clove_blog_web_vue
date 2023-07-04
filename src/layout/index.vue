<script setup>
import configClsNameInit from "../utils/configClsName.js";

const configClsName = configClsNameInit("self-layout");
</script>

<script>
export default {
  name: "SelfLayout",
};
</script>

<template>
  <div :class="configClsName('wrap')">
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
@prefixCls: self-layout;
.@{prefixCls}{
  &-wrap{
    width: 100%;
    height: 100%;
  }
}
</style>
