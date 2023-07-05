<script setup>
import ChaseDot from "./loadingAssets/ChaseDot/index.vue";
defineProps({
  loading: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<script>
export default {
  name: "SelfLoading",
};
</script>

<template>
  <div class="self-loading-container" v-if="loading">
    <ChaseDot></ChaseDot>
  </div>
</template>

<style lang="less" scoped>
.self-loading-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f2f3f7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
