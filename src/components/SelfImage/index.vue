<script setup>
import {
  computed,
  reactive,
  toRefs,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";
import LoadingImage from "./assets/loadingImg.svg";

const props = defineProps({
  src: {
    type: String,
    default: () => "",
  },
  width: {
    type: String,
    default: () => "100px",
  },
  height: {
    type: String,
    default: () => "100px",
  },
  imageFit: {
    type: String,
    default: () => "cover",
  },
  imageFitPosition: {
    type: String,
    default: () => "center",
  },
});

const state = reactive({
  loadStart: false,
  loading: true,
  loadingError: false,
  observer: null,
  targetDom: null,
});

const stateAsRefs = toRefs(state);
const { loadStart, loading, loadingError, observer, targetDom } = stateAsRefs;

const imgSrc = computed(() => {
  return props.src;
});

const loadImage = () => {
  loading.value = true;
  loadStart.value = true;
};
const offObserver = () => {
  observer.value && observer.value.disconnect();
};
const handleLoadDone = () => {
  loading.value = false;
  loadingError.value = false;
};
const handleError = () => {
  loadStart.value = false;
  loading.value = false;
  loadingError.value = true;
};
const handleObserveImage = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      offObserver();
      loadImage();
    }
  }
};

const resetStatus = () => {
  loadStart.value = false;
  observer.value = null;
  loading.value = false;
  loadingError.value = false;
};

const lazyLoad = () => {
  const el = targetDom;
  observer.value = new IntersectionObserver(handleObserveImage, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  observer.value.observe(el.value);
};

const mountInit = () => {
  lazyLoad();
};

const unMount = () => {
  offObserver();
};

const handleSourceChange = () => {
  offObserver();
  resetStatus();
  lazyLoad();
};

watch(imgSrc, () => {
  handleSourceChange();
});

onMounted(mountInit);
onBeforeUnmount(unMount);
</script>

<script>
export default {
  name: "SelfImage",
};
</script>

<template>
  <div
    class="self-image-lazy-loader"
    :style="{ width: width, height: height }"
    ref="targetDom"
  >
    <template v-if="loadStart">
      <img
        :src="src"
        :style="{ objectFit: imageFit, objectPosition: imageFitPosition }"
        alt="img"
        class="image-floor"
        @load="handleLoadDone"
        @error="handleError"
      />
    </template>
    <template v-if="loadingError">
      <div class="error-floor">Error Info</div>
    </template>
    <template v-if="loading">
      <div class="loading-floor">
        <img :src="LoadingImage" alt="loading" class="loading-image" />
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.self-image-lazy-loader {
  position: relative;
  .image-floor {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .error-floor {
    position: absolute;
    width: inherit;
    height: inherit;
  }
  .loading-floor {
    position: absolute;
    width: inherit;
    height: inherit;
    z-index: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .loading-image {
      width: 30%;
      height: 30%;
      animation: rotate 1.5s linear infinite;
    }
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
