<template>
  <div class="progress-bar" :style="{ height: `${this.percentage}%` }"></div>
</template>

<script>
export default {
  props: ["percentage"],
};
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: rgba(0, 255, 255, 0.8);
  transition: 0.35s linear;
}
</style>