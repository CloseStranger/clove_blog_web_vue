<script setup></script>

<script>
export default {
  name: "ChaseDot",
};
</script>

<template>
  <div class="chase">
    <div class="chase-dot"></div>
    <div class="chase-dot"></div>
    <div class="chase-dot"></div>
    <div class="chase-dot"></div>
    <div class="chase-dot"></div>
    <div class="chase-dot"></div>
  </div>
</template>

<style lang="less" scoped>
.chase {
  width: 60px;
  height: 60px;
  animation: rotate 2.5s infinite linear both;
  position: relative;
  .chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: chase-dot 2s infinite ease-in-out both;
  }
  .chase-dot:before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: #333333;
    border-radius: 100%;
    animation: chase-dot-before 2s infinite ease-in-out both;
  }
}
.chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}
.chase-dot:nth-child(2) {
  animation-delay: -1s;
}
.chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}
.chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}
.chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}
.chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}
.chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}
.chase-dot:nth-child(2):before {
  animation-delay: -1s;
}
.chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}
.chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}
.chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}
.chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes chase-dot {
  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes chase-dot-before {
  50% {
    transform: scale(0.4);
  }
  100%,
  0% {
    transform: scale(1);
  }
}
</style>
