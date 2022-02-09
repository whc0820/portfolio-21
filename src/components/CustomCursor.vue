<template>
  <div class="outline" :style="[cursorPosition]">
    <div v-if="!active" class="point" :style="[cursorPosition]"></div>
    <div v-else-if="this.direction == 'right'" class="icon-container ani-right">
      <span class="material-icons icon">arrow_forward</span>
      <span class="material-icons icon">arrow_forward</span>
      <span class="material-icons icon">arrow_forward</span>
      <span class="material-icons icon">arrow_forward</span>
      <span class="material-icons icon">arrow_forward</span>
    </div>
    <div v-else-if="this.direction == 'down'" class="icon-container ani-down">
      <span class="material-icons icon">arrow_downward</span>
      <span class="material-icons icon">arrow_downward</span>
      <span class="material-icons icon">arrow_downward</span>
      <span class="material-icons icon">arrow_downward</span>
      <span class="material-icons icon">arrow_downward</span>
    </div>
    <div v-if="this.active" class="hint-text" :style="[cursorPosition]">
      {{ this.hintText }}
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

import eventBus from "../eventBus";

export default {
  name: "CustomCursor",
  data() {
    return {
      cursorX: -320,
      cursorY: -320,
      active: false,
      direction: "right",
      hintText: "",
    };
  },
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
    eventBus.$on("cursor-active", (direction, hintText) => {
      this.active = true;
      this.direction = direction;
      this.hintText = hintText;
      gsap.to(".outline", {
        scale: 1,
        duration: 0.35,
      });
    });
    eventBus.$on("cursor-deactive", () => {
      this.active = false;
      gsap.to(".outline", {
        scale: 0.25,
        duration: 0.35,
      });
    });
  },
  unmounted() {
    document.removeEventListener("mousemove", this.onMouseMove);
  },
  beforeDestroy() {
    eventBus.$off("cursor-active");
    eventBus.$off("cursor-deactive");
  },
  computed: {
    cursorStyle() {
      return this.active ? "pointer" : "default";
    },
    cursorPosition() {
      return {
        top: `${this.cursorY}px`,
        left: `${this.cursorX}px`,
      };
    },
  },
  methods: {
    onMouseMove(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
    },
  },
};
</script>

<style>
.outline {
  margin: 0;
  padding: 0;
  width: 256px;
  height: 256px;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.8);
  mix-blend-mode: difference;
  z-index: 3;
  overflow: hidden;
  pointer-events: none;
}

.point {
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  transform: translate(120px, 120px);
  border-radius: 50%;
  background-color: #fff;
}

.icon-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  background-color: transparent;
  z-index: 2;
}

.icon {
  margin: 0;
  padding: 0;
  font-size: 256px;
  color: #000000;
}

.hint-text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
  text-transform: uppercase;
  color: #000;
}

.ani-right {
  flex-direction: row;
  align-items: center;
  animation: arrow-right 3s linear 0s infinite;
}

.ani-down {
  flex-direction: column;
  align-items: center;
  animation: arrow-down 3s linear 0s infinite;
}

@keyframes arrow-right {
  0% {
    left: -500%;
  }
  100% {
    left: 100%;
  }
}

@keyframes arrow-down {
  0% {
    top: -500%;
  }
  100% {
    top: 100%;
  }
}
</style>