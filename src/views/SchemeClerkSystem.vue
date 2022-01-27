<template>
  <div class="page-container" @scroll="onPageScroll">
    <div class="section full-page light" id="section-1">
      <div class="project-title">{{ `Scheme\nClerk System` }}</div>
      <b-img-lazy
        :src="
          require('@/static/scheme-clerk-system/scheme_clerk_system_cover.png')
        "
        center
      />
      <div class="vertical-bottom-left-text">November, 2020</div>
    </div>
    <div class="section light" id="section-2">
      <div class="large-text">Scheme Clerk</div>
      <div class="large-text">Clerk System</div>
      <div class="center-title">Human-Computer Interaction</div>
      <div class="vertical-bottom-left-text">Course Project</div>
    </div>
    <div class="section light" id="section-3">
      <div class="section-title-container">
        <div class="section-title">Overview</div>
        <div class="section-divider"></div>
      </div>
      <div
        class="image-slider"
        :style="{
          width: `${imageSliderWidth}px`,
          height: `${imageSliderHeight}px`,
        }"
      >
        <b-carousel :interval="2000" :no-hover-pause="true">
          <b-carousel-slide
            v-for="j in 14"
            :key="`slider-1-${j}`"
            :img-src="
              require(`@/static/scheme-clerk-system/scheme_clerk_system_image${j}_light.png`)
            "
          >
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="project-description">
        Scheme Clerk System is a project that designed for shop manager and
        clerk to manage their working schedule. The clerk can set up the prefer
        working time each day, and the manager can check out each clerks'
        preference and make the schedule simply by drag and drop user's chip or
        switching between the working blocks.
      </div>
    </div>
    <div class="section light" id="section-4">
      <div class="section-title-container">
        <div class="section-title">Responsive Design</div>
        <div class="section-divider"></div>
      </div>
      <div v-if="this.$screen.width > 960" class="mobile-frame-wrapper">
        <MobileFrame
          v-for="i in 4"
          :key="`mobile-frame-${i}`"
          :imageWidth="180"
          :imageHeight="380"
          :imageName="`scheme-clerk-system/mobile/scheme_clerk_system_mobile_image${i}.png`"
          :dark="false"
        />
      </div>
      <b-carousel v-else :interval="2000" class="mobile-frame-slider">
        <div class="camera">
          <div class="circle"></div>
        </div>
        <b-carousel-slide
          v-for="i in 4"
          :key="`mobile-frame-${i}`"
          :img-src="
            require(`@/static/scheme-clerk-system/mobile/scheme_clerk_system_mobile_image${i}.png`)
          "
        />
      </b-carousel>
    </div>
    <div class="section dark" id="section-5">
      <div class="section-title-container">
        <div class="section-title">Dark Mode</div>
        <div class="section-divider"></div>
      </div>
      <div
        class="image-slider"
        :style="{
          width: `${imageSliderWidth}px`,
          height: `${imageSliderHeight}px`,
        }"
      >
        <b-carousel :interval="2000" :no-hover-pause="true">
          <b-carousel-slide
            v-for="j in 14"
            :key="`slider-2-${j}`"
            :img-src="
              require(`@/static/scheme-clerk-system/scheme_clerk_system_image${j}_dark.png`)
            "
          />
        </b-carousel>
      </div>
    </div>
    <div class="section dark" id="section-6">
      <div class="section-title-container">
        <div class="section-title">Techs &amp; Tools</div>
        <div class="section-divider"></div>
      </div>
      <div class="page-content-container">
        <span v-for="(tech, i) in this.techs" :key="tech + i">
          &#8208; {{ tech }}
        </span>
      </div>
    </div>
    <div class="section full-page dark" id="section-7">
      <div class="section-title-container">
        <div class="section-title">Next Project</div>
        <div class="section-divider"></div>
      </div>
      <div class="vertical-bottom-left-text">Visitor - Predictor</div>
      <CircularText
        id="circular-text"
        title="visitor-predictor-visitor-predictor-"
        @mouseenter.native="onEnterNextProject()"
        @mouseleave.native="onLeaveNextProject()"
        @click.native="onClickNextProject()"
      />
      <div class="center-text">Click</div>
    </div>
    <ProgressRing :percentage="this.percentage" />
    <div
      class="scroll-to-top-icon"
      :style="{
        opacity: scrollToTopIconOpacity,
        cursor: scrollToTopIconCursor,
      }"
      @click="onClickScrollToTopIcon()"
    >
      <span class="material-icons"> vertical_align_top </span>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import EventBus from "../eventBus";

const BCarousel = () =>
  import("bootstrap-vue").then((module) => module.BCarousel);
const BImgLazy = () =>
  import("bootstrap-vue").then((module) => module.BImgLazy);

const ProgressRing = () =>
  import(/* webpackPrefetch: true */ "@/components/ProgressRing.vue");
// const ThreeDImage = () =>
//   import(/* webpackPrefetch: true */ "@/components/ThreeDImage.vue");
const MobileFrame = () =>
  import(/* webpackPrefetch: true */ "@/components/MobileFrame.vue");
const CircularText = () =>
  import(/* webpackPrefetch: true */ "@/components/CircularText.vue");

export default {
  components: {
    BCarousel,
    BImgLazy,
    ProgressRing,
    // ThreeDImage,
    CircularText,
    MobileFrame,
  },
  data() {
    return {
      percentage: 0,
      scrolledToBottomPage: false,
      isEnteringNextProject: false,
      techs: ["CSS3", "HTML5", "JavaScript", "Vue", "Vuetify"],
    };
  },
  mounted() {
    EventBus.$emit("cursor-active", "down", "scroll");

    // if (this.$screen.width > 576) {
    //   const oddColumns = document.querySelectorAll(
    //     ".three-d-image-column:nth-child(odd)"
    //   );
    //   const evenColumns = document.querySelectorAll(
    //     ".three-d-image-column:nth-child(even)"
    //   );
    //   gsap.to(oddColumns, {
    //     translateY: 100,
    //     scrollTrigger: {
    //       scroller: ".page-container",
    //       trigger: "#section-1",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 1,
    //     },
    //   });
    //   gsap.to(evenColumns, {
    //     translateY: -100,
    //     scrollTrigger: {
    //       scroller: ".page-container",
    //       trigger: "#section-1",
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 1,
    //     },
    //   });
    // }

    const largeText1 = document.querySelector(".large-text:nth-child(1)");
    const largeText2 = document.querySelector(".large-text:nth-child(2)");
    gsap.from(largeText1, {
      x: -this.$screen.width,
      scrollTrigger: {
        scroller: ".page-container",
        trigger: "#section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(largeText2, {
      x: -this.$screen.width,
      scrollTrigger: {
        scroller: ".page-container",
        trigger: "#section-2",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.utils.toArray(".section-divider").forEach((divider) => {
      gsap.from(divider, {
        width: 0,
        scrollTrigger: {
          scroller: ".page-container",
          trigger: divider,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      });
    });
  },
  methods: {
    onPageScroll(event) {
      let scrollTop = event.srcElement.scrollTop;
      this.percentage =
        (scrollTop / (event.srcElement.scrollHeight - this.$screen.height)) *
        100;

      if (
        this.percentage >= 95 &&
        !this.scrolledToBottomPage &&
        !this.isEnteringNextProject
      ) {
        this.scrolledToBottomPage = true;
        EventBus.$emit("cursor-deactive");
      }
    },
    onEnterNextProject() {
      this.isEnteringNextProject = true;
      EventBus.$emit("cursor-active", "right", "next");
    },
    onLeaveNextProject() {
      this.isEnteringNextProject = false;
      EventBus.$emit("cursor-deactive");
    },
    onClickNextProject() {
      this.$router.push("/visitor-predictor");
    },
    onClickScrollToTopIcon() {
      if (this.percentage >= 95) {
        const pageScroller = document.querySelector(".page-container");
        pageScroller.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  },
  computed: {
    columnNumber() {
      return 5;
    },
    threeDImageNumber() {
      return 10;
    },
    threeDImageWidth() {
      return 400;
    },
    imageSliderWidth() {
      return this.$screen.width * 0.7;
    },
    imageSliderHeight() {
      return ((this.$screen.width * 0.7) / 16) * 9;
    },
    scrollToTopIconCursor() {
      return this.percentage >= 95 ? "pointer" : "default";
    },
    scrollToTopIconOpacity() {
      return this.percentage >= 95 ? 1 : 0;
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
}

.page-container::-webkit-scrollbar {
  display: none;
}

.section {
  width: 100%;
  height: auto;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}

#section-2 {
  flex-direction: column;
  justify-content: space-around;
}

.project-title {
  padding: 0 64px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 128px;
  font-weight: 100;
  text-transform: capitalize;
  word-spacing: 0.2em;
  white-space: pre-line;
  pointer-events: none;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
}

.large-text {
  font-size: 50vh;
  font-weight: 500;
  line-height: 50vh;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
}

.center-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 192px;
  color: #f00;
  text-transform: uppercase;
  text-align: center;
  mix-blend-mode: difference;
  line-height: 192px;
}

.image-slider {
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: center;
  overflow: scroll hidden;
  border-radius: 2px;
}

.image-slider::-webkit-scrollbar {
  display: none;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  min-width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
}

.project-description {
  margin: 0 0 32px 0;
  padding: 0 128px;
}

.project-description::first-letter {
  margin: 0.1em 0.1em 0 0;
  float: left;
  font-size: 3.6em;
  line-height: 0.6em;
}

.section-title-container {
  margin: 32px 112px 32px 32px;
  padding: 16px 32px;
  width: calc(100% - 144px);
  height: 48px;
  box-sizing: border-box;
  mix-blend-mode: difference;
  position: relative;
}

.section-title {
  display: inline;
  font-size: 2vh;
  font-style: italic;
  font-weight: 500;
  line-height: 2vh;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  word-spacing: 0.8em;
  color: #ffffff;
}

.page-content-container {
  margin: 0;
  padding: 0 96px;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}

.page-content-container span {
  margin: 8px 0;
}

.section-divider {
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #e8e8e8;
  mix-blend-mode: difference;
}

.mobile-frame-wrapper {
  margin: 8px 128px;
  width: calc(100% - 256px);
  height: auto;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.mobile-frame-wrapper::-webkit-scrollbar {
  display: none;
}

.mobile-frame-slider {
  margin: 0 0 32px 0;
  width: 270px;
  height: 570px;
  position: relative;
  align-self: center;
  border-left: 2.5px solid #000000;
  border-right: 2.5px solid #000000;
  border-top: 4px solid #000000;
  border-bottom: 4px solid #000000;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #888888;
  box-sizing: border-box;
  overflow: hidden;
}

.camera {
  width: 8px;
  height: 8px;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #000000;
  z-index: 1;
}

.circle {
  width: 4px;
  height: 4px;
  border: 0.1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  z-index: 1;
}

#circular-text {
  margin: 48px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vertical-bottom-left-text {
  position: absolute;
  bottom: 48px;
  left: 48px;
  font-size: 2vh;
  font-weight: 500;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  mix-blend-mode: difference;
  color: #fff;
}

.center-text {
  margin: 48px 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  pointer-events: none;
}

.scroll-to-top-icon {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  mix-blend-mode: difference;
  transition: 0.35s ease-in-out;
  cursor: pointer;
  z-index: 2;
}

@media only screen and (max-width: 992px) {
  .project-title {
    font-size: 96px;
  }
  .project-description {
    padding: 32px 72px;
  }
}

@media only screen and (max-width: 768px) {
  .section-title-container {
    margin: 32px;
    padding: 16px 32px;
    width: calc(100% - 64px);
  }
  .project-title {
    font-size: 72px;
  }
}

@media only screen and (max-width: 576px) {
  .project-title {
    font-size: 64px;
  }
  .project-description {
    padding: 32px 32px;
  }
  #section-4 {
    height: 100%;
    align-items: center;
  }
  .page-content-container {
    padding: 0 48px;
  }
}
</style>