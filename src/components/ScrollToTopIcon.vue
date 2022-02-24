<template>
  <div
    class="scroll-to-top-icon"
    :style="{
      opacity: scrollToTopIconOpacity,
      cursor: scrollToTopIconCursor,
    }"
  >
    <span class="material-icons"> vertical_align_top </span>
  </div>
</template>

<script>
export default {
  props: ["percentage"],
  computed: {
    scrollToTopIconCursor() {
      return this.percentage >= 99 ? "pointer" : "default";
    },
    scrollToTopIconOpacity() {
      return this.percentage >= 99 ? 1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-to-top-icon {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  mix-blend-mode: difference;
  transition: opacity 0.35s;
  cursor: pointer;
  z-index: 2;
  &:hover {
    color: rgba(0, 255, 255, 0.9);
  }
}
</style>