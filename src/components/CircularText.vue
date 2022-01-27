<template>
  <div class="circular-text-wrapper">
    <svg width="100%" height="100%" viewBox="0 0 100 100" class="inner-circle">
      <circle
        r="38"
        cx="50"
        cy="50"
        stroke="#ffffff"
        stroke-width="0.6"
        fill="transparent"
        :style="{
          'stroke-dasharray': '47 6 1 6',
        }"
      />
    </svg>

    <div class="circular-text-container">
      <div
        v-for="(item, index) in this.title"
        :key="item + index"
        class="circular-text"
        :style="rotate(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "visitor-predictor-visitor-predictor-",
    };
  },
  props: ['title'],
  methods: {
    rotate(index) {
      return {
        transform: `translate(-50%, -50%) rotate(${
          (360 / this.title.length) * index
        }deg)`,
      };
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Magic Ring";
  src: url("../font/MagicRing.ttf") format("truetype");
}

.circular-text-wrapper {
  width: 360px;
  height: 360px;
  position: relative;
  border-radius: 50%;
  mix-blend-mode: difference;
  cursor: pointer;
  overflow: hidden;
}

.circular-text-container {
  width: 100%;
  height: 100%;
  animation: rotate 15s linear infinite;
  border-radius: 50%;
  pointer-events: none;
}

.circular-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
  pointer-events: none;
  font-family: "Magic Ring";
}

.inner-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: svg-rotate 12s linear infinite;
  pointer-events: none;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

@keyframes svg-rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(-360deg);
  }
}
</style>