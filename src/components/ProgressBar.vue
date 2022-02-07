<template>
  <div
    class="progress-bar"
    :style="{ height: `${this.percentage}%` }"
  ></div>
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
  left: 0;
  width: 4px;
  height: 100%;
  background: #0ff;
  transition: 0.35s linear;
}
</style>