<template>
  <div class="progress-ring" :style="{ opacity: opacity }">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <circle
        r="48"
        cx="50"
        cy="50"
        stroke="#212121"
        stroke-width="2"
        fill="transparent"
      />

      <circle
        class="progress-ring-circle"
        r="48"
        cx="50"
        cy="50"
        stroke="#ffffff"
        stroke-width="2"
        fill="transparent"
        :style="{
          'stroke-dasharray': `${96 * Math.PI} ${96 * Math.PI}`,
          'stroke-dashoffset': strokeDashoffset,
        }"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["percentage"],
  computed: {
    strokeDashoffset() {
      let totalStrokeDashoffset = 96 * Math.PI;
      return (
        totalStrokeDashoffset - (this.percentage / 100) * totalStrokeDashoffset
      );
    },
    opacity() {
      return this.percentage >= 95 ? 0 : 1;
    },
  },
};
</script>

<style scoped>
.progress-ring {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  mix-blend-mode: difference;
  transition: 0.35s ease-in-out;
  z-index: 2;
}

.progress-ring-circle {
  transform-origin: 50% 50%;
  transform: rotateZ(-90deg);
  transition: 0.35s linear;
}
</style>