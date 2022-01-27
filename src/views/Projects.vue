<template>
  <div class="page-container">
    <svg width="100%" height="100%" viewBox="0 0 160 90">
      <polygon fill="#eeeeee" points="120,0 40,90 160,90 160, 0" />
    </svg>
    <div class="full-page-wrapper">
      <div class="top-container">
        <div class="top-left-container" @click="onClickPrevious">
          <div class="previous-project-text">previous project</div>
          <svg width="100%" height="30">
            <line x1="0" y1="15" x2="100%" y2="15" class="line" />
            <line x1="0" y1="15" x2="5%" y2="1" class="line" />
          </svg>
        </div>
        <div class="top-right-container"></div>
      </div>
      <div
        class="project-cover"
        @mouseenter="onEnterProjectCover"
        @mouseleave="onLeaveProjectCover"
        @click="onClickProject()"
      >
        <b-img-lazy
          :width="800"
          :height="450"
          :rounded="true"
          :src="this.cover[this.currentCoverIndex]"
        />
        <div class="project-cover-overlay-left"></div>
        <div class="project-cover-overlay-right"></div>
      </div>
      <div class="bottom-container">
        <div class="bottom-left-container"></div>
        <div class="bottom-right-container" @click="onClickNext">
          <div class="next-project-text">next project</div>
          <svg width="100%" height="30">
            <line x1="0" y1="15" x2="100%" y2="15" class="line" />
            <line x1="100%" y1="15" x2="95%" y2="29" class="line" />
          </svg>
        </div>
      </div>
    </div>
    <div class="project-number">
      No. {{ this.currentCoverIndex + 1 }} / {{ this.cover.length }}
    </div>
  </div>
</template>

<script>
import { gsap, Power1, Power4 } from "gsap";

import EventBus from "../eventBus";

const BImgLazy = () =>
  import(/* webpackPrefetch: true */ "bootstrap-vue").then(
    (module) => module.BImgLazy
  );

export default {
  name: "Projects",
  components: { BImgLazy },
  data() {
    return {
      cover: [
        require("@/static/scheme-clerk-system/scheme_clerk_system_cover.png"),
        require("@/static/visitor-predictor/visitor_predictor_cover.png"),
        require("@/static/led-visualizer/led_visualizer_cover.png"),
        require("@/static/beauty-crawler/beauty_crawler_cover.png"),
      ],
      currentCoverIndex: 3,
      overlayRightTl: gsap.timeline(),
      overlayLeftTl: gsap.timeline(),
    };
  },
  mounted() {
    EventBus.$emit("cursor-deactive");

    const projectCoverOverlayRight = document.querySelector(
      ".project-cover-overlay-right"
    );
    this.overlayRightTl.from(projectCoverOverlayRight, {
      left: "-100%",
      duration: 0.35,
      ease: Power1.easeInOut,
      onComplete: () => {
        if (this.currentCoverIndex < this.cover.length - 1) {
          this.currentCoverIndex += 1;
        } else {
          this.currentCoverIndex = 0;
        }
      },
    });
    this.overlayRightTl.to(projectCoverOverlayRight, {
      left: "100%",
      duration: 0.35,
      delay: 0.35,
      ease: Power1.easeInOut,
    });

    const projectCoverOverlayLeft = document.querySelector(
      ".project-cover-overlay-left"
    );
    this.overlayLeftTl.from(projectCoverOverlayLeft, {
      right: "-100%",
      duration: 0.35,
      ease: Power1.easeInOut,
      onComplete: () => {
        if (this.currentCoverIndex > 0) {
          this.currentCoverIndex -= 1;
        } else {
          this.currentCoverIndex = this.cover.length - 1;
        }
      },
    });
    this.overlayLeftTl.to(projectCoverOverlayLeft, {
      right: "100%",
      duration: 0.35,
      delay: 0.35,
      ease: Power1.easeInOut,
    });
    this.overlayLeftTl.pause();

    const topLeftContainer = document.querySelector(".top-left-container");
    gsap.from(topLeftContainer, {
      x: 128,
      skewX: 32,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      ease: Power4.easeOut,
    });

    const bottomRighttContainer = document.querySelector(
      ".bottom-right-container"
    );
    gsap.from(bottomRighttContainer, {
      x: -128,
      skewX: -32,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      ease: Power4.easeOut,
    });
  },
  methods: {
    isAnimating() {
      if (
        (this.overlayLeftTl.progress() == 0 ||
          this.overlayLeftTl.progress() == 1) &&
        (this.overlayRightTl.progress() == 0 ||
          this.overlayRightTl.progress() == 1)
      ) {
        return false;
      } else {
        return true;
      }
    },
    onClickNext() {
      if (!this.isAnimating()) {
        this.overlayRightTl.restart();
      }
    },
    onClickPrevious() {
      if (!this.isAnimating()) {
        this.overlayLeftTl.restart();
      }
    },
    onClickProject() {
      switch(this.currentCoverIndex) {
        case 0:
          this.$router.push("/scheme-clerk-system");
          break;
        case 1:
          this.$router.push("/visitor-predictor");
          break;
        case 2:
          this.$router.push("/led-visualizer");
          break;
        case 3:
          this.$router.push("/beauty-crawler");
          break;
      }
    },
    onEnterProjectCover() {
      EventBus.$emit("cursor-active", "right", "Go");
    },
    onLeaveProjectCover() {
      EventBus.$emit("cursor-deactive");
    },
  },
};
</script>

<style scoped>
.page-container::-webkit-scrollbar {
  display: none;
}

.full-page-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top-container,
.bottom-container {
  margin: 16px 0;
  width: 900px;
  height: 32px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
}

.top-left-container,
.top-right-container,
.bottom-left-container,
.bottom-right-container {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.top-left-container {
  flex-direction: row-reverse;
  cursor: pointer;
}

.bottom-right-container {
  flex-direction: row;
  cursor: pointer;
}

.next-project-text,
.previous-project-text {
  margin: 0 16px;
  font-size: 2vh;
  font-weight: 300;
  font-style: italic;
  text-transform: capitalize;
  white-space: nowrap;
  word-spacing: 0.3em;
  pointer-events: none;
}

.project-cover {
  width: 800px;
  height: 450px;
  position: relative;
  border-radius: 4px;
  transition: box-shadow 0.35s;
  overflow: hidden;
  cursor: pointer;
}

.project-cover:hover {
  box-shadow: 4px 4px 4px #888888;
}

.project-cover-overlay-left {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(
    -45deg,
    #ffffff 1px 32px,
    #000000 32px 64px
  );
  pointer-events: none;
}

.project-cover-overlay-right {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: repeating-linear-gradient(
    -45deg,
    #ffffff 1px 32px,
    #000000 32px 64px
  );
  pointer-events: none;
}

.project-number {
  position: absolute;
  bottom: 48px;
  left: 48px;
  font-size: 2vh;
  font-weight: 500;
  font-style: italic;
  text-transform: capitalize;
  letter-spacing: 0.2em;
  /* writing-mode: vertical-rl; */
}

svg,
img {
  pointer-events: none;
}

.line {
  stroke: #000000;
  stroke-width: 0.8px;
}
</style>